const express = require('express');
const router = express.Router();
const { Client } = require('@elastic/elasticsearch');
const client = new Client({ node: 'http://35.188.79.184:9200/' });
var bcrypt = require('bcryptjs');

router.get('/finduser/:id', async (req, res) => {
  try {
    let user = await client.get({
      index: 'users',
      type: 'mytype',
      id: req.params.id
    });
    delete user.body._source.password;
    res.json(user.body._source);
  } catch (err) {
    console.error(err);
    res.status(500).send(err.message);
  }
});

router.post('/register', async (req, res) => {
  try {
    const salt = await bcrypt.genSalt(10);
    let password = await bcrypt.hash(req.body.password, salt);

    const user = {
      email: req.body.email,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      phone: req.body.phone,
      password
    };
    await client.index({
      index: 'users',
      type: 'mytype',
      body: user
    });
    res.json({ msg: 'Created Successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).send(err.message);
  }
});

router.delete('/delete/:id', async (req, res) => {
  try {
    await client.delete({
      index: 'users',
      type: 'mytype',
      id: req.params.id
    });
    res.json({ msg: 'Deleted Successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).send(err.message);
  }
});
module.exports = router;
