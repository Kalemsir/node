const express = require('express');
const router = express.Router();

// Kullanıcı listesi
router.get('/', (req, res) => {
  res.send('<h2>Kullanıcı Listesi</h2><ul><li>Ali</li><li>Ayşe</li></ul>');
});

// Kullanıcı ekle
router.get('/ekle', (req, res) => {
  res.send('<h2>Yeni kullanıcı eklendi!</h2><a href="/kullanicilar">Listeye Dön</a>');
});

// Kullanıcı sil
router.get('/sil', (req, res) => {
  res.send('<h2>Kullanıcı silindi!</h2><a href="/kullanicilar">Listeye Dön</a>');
});

module.exports = router;
