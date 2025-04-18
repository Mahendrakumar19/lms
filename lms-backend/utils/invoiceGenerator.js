const fs = require('fs');
const path = require('path');

async function generateInvoice({ userId, courseId, amount, date }) {
    const invoiceData = `
    Invoice for User ID: ${userId}
    Course ID: ${courseId}
    Amount: ₹${amount}
    Date: ${new Date(date).toLocaleString()}
  `;

    const filePath = path.join(__dirname, `../invoices/invoice_${userId}_${Date.now()}.txt`);
    fs.writeFileSync(filePath, invoiceData);

    return filePath;
}

module.exports = generateInvoice;
