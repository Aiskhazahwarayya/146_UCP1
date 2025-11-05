const express = require('express');
const app = express();
const PORT = 3001;
const db = require('./models'); 

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

db.sequelize.sync()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server started on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });

  app.post('/hotel', async (req, res) => {
  const data = req.body;
  try {
    const hotel = await db.Tentrem.create(data); 
    res.send(hotel);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

app.get('/hotel', async (req, res) => {
  try {
    const hotel = await db.Tentrem.findAll();
    res.send(hotel);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

app.put('/hotel/:id', async (req, res) => {
  const id = req.params.id;
  const data = req.body;
  try {
    const hotel = await db.Tentrem.findByPk(id); 
    if (!hotel) {
      return res.status(404).send({ message: 'Data tidak ditemukan' });
    }
    await hotel.update(data);
    res.send({ message: "Data berhasil diupdate", hotel});
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});