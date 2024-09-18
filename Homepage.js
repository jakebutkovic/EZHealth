const express = require('express');
const app = express();
const port = 3000; // Choose the port you want to run your app on

// Set up the homepage route
app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>EZ-Health</title>
      <style>
        body { font-family: Arial, sans-serif; background-color: #acf8fd; text-align: center; padding: 50px; }
        h1 { color: #333; }
        p { color: #666; font-size: 18px; }
        .button { display: inline-block; padding: 10px 20px; margin: 20px; background-color: #007BFF; color: white; text-decoration: none; border-radius: 5px; }
      </style>
    </head>
    <body>
      <h1>Welcome to EZ-Health</h1>
      <p>Your go-to resource for understanding your health.</p>
      <a href="#" class="button">Sign In</a>
    </body>
    </html>
  `);
});

// Start the server
app.listen(port, () => {
  console.log(`HelpMyBrain! website is running at http://localhost:${port}`);
});
