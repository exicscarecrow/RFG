const express = require('express');
const app = express();
const port = 3000;

// Example in Express.js to serve static files from a 'public' directory
app.use(express.static('public'));
app.use('/',express.static(__dirname));


app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
