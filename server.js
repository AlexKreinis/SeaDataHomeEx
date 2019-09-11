const express = require('express');

const app = express();
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
app.use(express.json({ extended: false }));
app.use('/api/users', require('./routes/api/usersAPI'));
app.get('/', (req, res) => res.send('API RUNNING'));
