// === server.js ===
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const enrollUserInMoodle = require('./utils/moodleEnrollment');
const generateInvoice = require('./utils/invoiceGenerator');
const { logPayment, getPaymentHistory } = require('./utils/paymentLogger');
const connectDB = require('./db');
connectDB(); // connect to MongoDB

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

app.post('/api/payment', async (req, res) => {
    const { userId, courseId, amount } = req.body;

    try {
        // 1. Simulate payment
        const paymentStatus = 'success'; // In real-world, use Razorpay, Stripe etc.

        if (paymentStatus === 'success') {
            // 2. Enroll user in Moodle
            await enrollUserInMoodle(userId, courseId);

            // 3. Log payment
            const logEntry = await logPayment(userId, courseId, amount);

            // 4. Generate invoice
            const invoicePath = await generateInvoice({ userId, courseId, amount, date: new Date() });

            res.json({ success: true, message: 'Payment complete and user enrolled.', invoicePath });
        } else {
            res.status(400).json({ success: false, message: 'Payment failed.' });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ success: false, message: 'Server error.' });
    }
});

app.get('/api/payment-history/:userId', async (req, res) => {
    const { userId } = req.params;
    try {
        const history = await getPaymentHistory(userId);
        res.json(history);
    } catch (err) {
        res.status(500).json({ message: 'Error fetching history.' });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});