const connectDB = require('./startup/db');
const express = require('express');
const app = express();
const users = require('./routes/users');
const cors = require('cors');
const auth = require('./routes/auth');
const petinfo = require('./routes/petinfos');

connectDB();

app.use(cors());
app.use(express.json());
app.use('/api/users', users);
app.use('/api/auth', auth); //not sure if this is formed right
app.use('/api/newinfo', petinfo);


const port = process.env.PORT || 6000;
app.listen(port, () =>{
    console.log(`Server started on port: ${port}`);
});