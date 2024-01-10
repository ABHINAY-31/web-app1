// const express = require('express');
// const cors = require('cors');
// const mongoose = require('mongoose');

// require('dotenv').config();

// const app = express();
// const port = process.env.PORT || 5000;

// app.use(cors());
// app.use(express.json());

// const uri = process.env.ATLAS_URI;

// mongoose.connect(uri, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// });

// const connection = mongoose.connection;
// connection.once('open', () => {
//     console.log("Connection Established Successfully");
// })

// const userDataRouter = require("./routes/userdata");
// app.use("/userdata", userDataRouter);


// app.listen(port, () => {
//     console.log(`Server is running on port: ${port}`);
// });




// Importing required modules
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

// Creating an instance of Express
const app = express();
const port = process.env.PORT || 5000;

// Middleware setup
app.use(cors());
app.use(express.json());

// MongoDB connection setup
const uri = process.env.ATLAS_URI;

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB Connection Established Successfully");
});

// Using user data router
const userDataRouter = require("./routes/userdata");
app.use("/userdata", userDataRouter);

// Starting the server
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
