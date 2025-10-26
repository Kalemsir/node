/*const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Body-parser middleware'lerini aktif et
app.use(bodyParser.json()); // JSON verilerini okumak için
app.use(bodyParser.urlencoded({ extended: true })); // Form verilerini okumak için

// Ana sayfa - HTML formu göster
app.get('/', (req, res) => {
  res.send(`
    <h2>Öğrenci Bilgi Formu</h2>
    <form action="/ogrenci-kaydet" method="POST">
      <label>Ad:</label>
      <input type="text" name="ad" required><br><br>
      
      <label>Bölüm:</label>
      <input type="text" name="bolum" required><br><br>
      
      <label>Not Ortalaması:</label>
      <input type="number" step="0.01" name="not" required><br><br>
      
      <button type="submit">Kaydet</button>
    </form>
  `);
});

// POST isteği - Form verilerini al ve göster
app.post('/ogrenci-kaydet', (req, res) => {
  // body-parser sayesinde req.body kullanabiliyoruz
  const { ad, bolum, not } = req.body;
  
  console.log('Gelen Veri:', req.body);
  
  res.send(`
    <h2>✅ Kayıt Tamamlandı</h2>
    <ul>
      <li><strong>Ad:</strong> ${ad}</li>
      <li><strong>Bölüm:</strong> ${bolum}</li>
      <li><strong>Not:</strong> ${not}</li>
    </ul>
    <a href="/">Yeni Kayıt Ekle</a>
  `);
});

// JSON veri kabul eden endpoint (Postman ile test için)
app.post('/json-veri', (req, res) => {
  console.log('JSON Veri Geldi:', req.body);
  
  res.json({
    durum: 'başarılı',
    mesaj: 'JSON veri alındı',
    alinan_veri: req.body
  });
});

// Sunucuyu başlat
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Sunucu çalışıyor: http://localhost:${PORT}`);
});*/


/*Basit Express Sunucusu - Form Verisi Alma ve Gösterme
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// 1. APP.USE - Middleware (Her istekte çalışır)
app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
  console.log('İstek geldi: ' + req.url);
  next(); // Sonraki adıma geç
});

// 2. APP.GET - Veri okuma/gösterme
app.get('/', (req, res) => {
  res.send(`
    <h1>Basit Form</h1>
    <form action="/gonder" method="POST">
      <input type="text" name="mesaj" placeholder="Bir şey yaz">
      <button type="submit">Gönder</button>
    </form>
  `);
});

// 3. APP.POST - Veri gönderme/kaydetme
app.post('/gonder', (req, res) => {
  const mesaj = req.body.mesaj;
  res.send(`<h2>Yazdığın: ${mesaj}</h2><a href="/">Geri Dön</a>`);
});

app.listen(3000, () => {
  console.log('Sunucu: http://localhost:3000');
});
*/



const express = require('express');
const app = express();

// Router dosyasını dahil et
const router = require('./ClassNode/router');

// Ana sayfa
app.get('/', (req, res) => {
  res.send(`
    <h1>Ana Sayfa</h1>
    <a href="/router">Kullanıcılar</a>
  `);
});

// Router'ı kullan
app.use('/router', kullaniciRouter);

app.listen(3000, () => {
  console.log('Sunucu: http://localhost:3000');
});
