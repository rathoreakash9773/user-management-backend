const express = require('express');
const path = require('path');
const morgan = require('morgan');
const userRoutes = require('./routes/response.js');
const corsMiddleware = require('./middleware/cors.js');
const responseHandler = require('./middleware/responseHandler.js');

const app = express();
app.use(corsMiddleware);
app.use(responseHandler);
const PORT = process.env.PORT || 3001;

app.use(morgan('dev'));

app.use(express.json());
app.use(express.static(path.join(__dirname, './public')));
app.use('/api/users', userRoutes);  // final endpoint for users

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});