const express = require('express');
const connectDB = require('./config/db');
var cors = require('cors');
const path = require('path');

const app = express();

connectDB();

//intit middleware

app.use(cors());

app.use(express.json({ extended: false }));
//Routes
app.use('/api/user', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/posts', require('./routes/api/posts'));

//Serve static assests
if (process.env.NODE_ENV === 'production') {
  //set Static Folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log('Server started on port ' + PORT));
