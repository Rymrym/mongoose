
const express = require('express')
const app = express();
const mongoose = require('mongoose')
app.use(express.json());

// app.use(cors());
// app.options("*", cors());



const PORT = process.env.PORT || 8000;

const dbURL = "mongodb+srv://rym:rym1234@mycluster.7ksct.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

mongoose.connect(
  dbURL,
  { useNewUrlParser: true, useUnifiedTopology: true },
  function (err) {
    if (err) {
      console.log("Error connecting to: " + dbURL);
    } else {
      console.log("Connected to: " + dbURL);
    }
  }
);

app.listen(PORT, function () {
  console.log(`Listening on port ${PORT}`);
});