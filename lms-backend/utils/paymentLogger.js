const fs = require('fs');
const path = require('path');

const LOG_PATH = path.join(__dirname, '../logs/paymentLogs.json');

function ensureLogFile() {
    if (!fs.existsSync(LOG_PATH)) {
        fs.writeFileSync(LOG_PATH, JSON.stringify([]));
    }
}

async function logPayment(userId, courseId, amount) {
    ensureLogFile();
    const logs = JSON.parse(fs.readFileSync(LOG_PATH));
    const newLog = {
        userId,
        courseId,
        amount,
        date: new Date().toISOString(),
    };
    logs.push(newLog);
    fs.writeFileSync(LOG_PATH, JSON.stringify(logs, null, 2));
    return newLog;
}

async function getPaymentHistory(userId) {
    ensureLogFile();
    const logs = JSON.parse(fs.readFileSync(LOG_PATH));
    return logs.filter(log => log.userId == userId);
}

module.exports = { logPayment, getPaymentHistory };
