const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const port = 5003; // Ensure this matches the port you use in your frontend

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/PetAdoption', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('Connected to MongoDB');
}).catch((error) => {
    console.error('Error connecting to MongoDB:', error);
});

// Define a schema and model for the orders
// Add this route to your existing backend code

// Order schema (for storing orders in the database)
const orderSchema = new mongoose.Schema({
    petId: { type: Number, required: true },
    name: { type: String, required: true },
    email: { type: String, required: true },
    address: { type: String, required: true },
    phone: { type: String, required: true },
    numberOfPets: { type: Number, required: true },
    orderDate: { type: Date, default: Date.now },
});

const Order = mongoose.model('Order', orderSchema);

// Order route
app.post('/api/order', async (req, res) => {
    const { petId, name, email, address, phone, numberOfPets } = req.body;

    try {
        const newOrder = new Order({
            petId,
            name,
            email,
            address,
            phone,
            numberOfPets,
        });

        await newOrder.save();
        res.status(201).json({ message: 'Order placed successfully' });
    } catch (err) {
        console.error('Error placing order:', err);
        res.status(500).json({ message: 'Server error. Unable to place order.' });
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
