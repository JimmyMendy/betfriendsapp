const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require("./config/db");
const authRoutes = require("./routes/auth")
const eventRoutes = require("./routes/events")
const betRoutes = require("./routes/bets")
const userRoutes = require("./routes/users")

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json())

connectDB();

app.use('/api/auth', authRoutes);
app.use('/api/events', authRoutes);
app.use('/api/bets', authRoutes);
app.use('/api/users', userRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))