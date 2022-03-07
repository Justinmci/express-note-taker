const express = require('express');
const PORT = process.env.PORT || 5501;

const app = express();
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

// string array data
app.use(express.urlencoded({ extended: true }));
// json data
app.use(express.json());
//middleware
app.use(express.static('public'));

// routes
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);


app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});