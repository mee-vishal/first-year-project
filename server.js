const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Middleware to parse form data
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files (if you have any, like an HTML form file)
// app.use(express.static('public'));

// Handle form submission
app.post('/submit-form', (req, res) => {
  const { name, email, phone, branch, year } = req.body;
  console.log(`Name: ${name}, Email: ${email}, Phone: ${phone}, Branch: ${branch}, Year: ${year}`);

  // Here you can process the data (e.g., save to database)

  // Respond with a thank you message
  res.send(`<h2>Thank you for your submission, ${name}!</h2>`);
});

// Handle form submission for the "ASK US" form
app.post('/ask-us', (req, res) => {
  const { name, email,message } = req.body;
  console.log('Received form submission for ASK US:', req.body);
  console.log(`Name: ${name}, Email: ${email}`);
  // You can process the data here, e.g., save it to a database

  res.send('Question submission successful!');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
