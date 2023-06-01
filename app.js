const express = require('express');
const app = express();
app.use(express.json());

app.get('/api/calculate/:operation/:num1/:num2', (req, res) => {
    const operation = req.params.operation;
    const num1 = parseInt(req.params.num1);
    const num2 = parseInt(req.params.num2);

    let result;

    switch (operation) {
        case 'add':
            result = num1 + num2;
            break;
        case 'subtract':
            result = num1 - num2;
            break;
        case 'multiply':
            result = num1 * num2;
            break;
        case 'divide':
            if (num2 !== 0) {
                result = num1 / num2;
            } else {
                res.status(400).json({ message: "Cannot divide by zero" });
                return;
            }
            break;
        default:
            res.status(404).json({ message: "Invalid operation" });
            return;
    }

    res.json({ operation: `${num1} ${operation} ${num2}`, result: result });
});

app.listen(3000, () => console.log('Calculator API is listening on port 3000'));
