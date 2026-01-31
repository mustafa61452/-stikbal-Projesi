# İstikbal Gazetesi - PWA Mobil Uygulama

![İstikbal Gazetesi Logo](./assets/icons/icon-512.png)

## 📰 Proje Hakkında

TÜBİTAK İstikbal Projesi kapsamında hazırlanan bu **Progressive Web App (PWA)**, Milli Mücadele dönemi Trabzon basınının dijitalleştirilmesi ve duygu analizi ile tarihsel içgörü kazandırılması amacıyla geliştirilmiştir.

İstikbal Gazetesi (1918-1925), Trabzon Muhafaza-i Hukuk-ı Milliye Cemiyeti'nin sesi olarak Faik Ahmet Barutçu tarafından kurulmuş, Milli Mücadele'nin Karadeniz'deki en önemli basın organlarından biri olmuştur.

## ✨ Özellikler

- 🏛️ **Dijital Arşiv**: Milli Mücadele dönemindeki tüm haberler aranabilir ve filtrelenebilir
- 🧠 **Duygu Analizi**: Haberlerin toplumsal moral üzerindeki etkileri görselleştirilmiş
- 🗺️ **İnteraktif Harita**: Leaflet.js ile coğrafi haritalama
- 📊 **İstatistikler**: Chart.js ile duygu dağılımı ve moral grafikleri
- 📱 **PWA**: Offline çalışma, mobil/masaüstü uyumlu
- 🎨 **Vintage Tasarım**: 1920'ler gazete estetiği

## 🚀 Kurulum ve Çalıştırma

### 1. Dosyaları İndirin
Bu proje dosyalarını bilgisayarınıza indirin veya klonlayın.

### 2. Yerel Sunucu Başlatın

**Yöntem 1: Python ile (Önerilen)**
```powershell
# Python 3 ile
python -m http.server 8000

# veya Python 2 ile
python -m SimpleHTTPServer 8000
```

**Yöntem 2: Node.js ile**
```powershell
# Önce http-server yükleyin (sadece bir kez)
npm install -g http-server

# Sonra çalıştırın
http-server -p 8000
```

**Yöntem 3: VS Code Live Server**
- VS Code'da projeyi açın
- Sağ tıklayıp "Open with Live Server" seçin

### 3. Tarayıcıda Açın
Tarayıcınızda şu adresi açın:
```
http://localhost:8000
```

### 4. PWA Olarak Yükleyin (Opsiyonel)
- Chrome/Edge: Adres çubuğundaki "Install" ikonuna tıklayın
- Mobil: "Ana Ekrana Ekle" seçeneğini kullanın

## 📁 Proje Yapısı

```
istikbal-app/
├── index.html              # Ana sayfa
├── styles.css              # Ana stil dosyası
├── app.js                  # Ana JavaScript (PWA + Router)
├── sw.js                   # Service Worker (offline)
├── manifest.json           # PWA Manifest
├── pages/
│   ├── archive.html        # Haber arşivi
│   ├── newspaper.html      # Gazete tanıtımı
│   ├── sentiment.html      # Duygu analizi
│   ├── timeline.html       # Tarihsel harita
│   └── about.html          # Proje hakkında
├── data/
│   └── news.json           # Haber verileri
└── assets/
    ├── icons/              # PWA iconları
    │   ├── icon-192.png
    │   └── icon-512.png
    └── images/             # Görseller
```

## 🛠️ Teknolojiler

- **Frontend**: HTML5, CSS3, Vanilla JavaScript
- **Stil**: TailwindCSS CDN + Custom CSS
- **Grafikler**: Chart.js
- **Harita**: Leaflet.js
- **İkonlar**: Font Awesome
- **Typography**: Google Fonts (Playfair Display, Lora, Amiri, Inter)
- **PWA**: Service Worker, Web App Manifest

## 📱 Tarayıcı Desteği

- ✅ Chrome/Edge (90+)
- ✅ Firefox (88+)
- ✅ Safari (14+)
- ✅ Samsung Internet
- ✅ iOS Safari (PWA desteği)

## 🎯 Kullanım

### Ana Sayfa
Proje tanıtımı ve hızlı navigasyon kartları

### Haber Arşivi
- Arama kutusuna kelime yazarak arama yapın
- Kategori butonlarıyla filtreleme yapın
- Haberleri açmak için tıklayın

### Gazete Tanıtımı
İstikbal Gazetesi'nin tarihi ve ilk sayı içeriği

### Duygu Analizi
İnteraktif grafiklerle duygu dağılımı ve psikolojik bulgular

### Tarihsel Harita
- Haritada marker'lara tıklayarak haber detaylarını görün
- Timeline'da olayları kronolojik sırayla inceleyin

### Proje Hakkında
TÜBİTAK projesi hakkında detaylı bilgi ve PDF dökümanlar

## 📊 Offline Çalışma

Service Worker sayesinde uygulama offline çalışabilir:
1. İlk ziyarette tüm kaynaklar cache'lenir
2. İnternet bağlantısı kesildiğinde uygulama cache'ten çalışır
3. Online olduğunuzda güncellemeler otomatik alınır

## 🔧 Geliştirici Notları

### Service Worker Güncelleme
Service Worker'ı güncelledikten sonra:
```javascript
// sw.js dosyasında CACHE_NAME'i değiştirin
const CACHE_NAME = 'istikbal-v2'; // v1'den v2'ye
```

### Yeni Sayfa Ekleme
1. `pages/` klasörüne HTML dosyası ekleyin
2. `app.js`'de route ekleyin:
```javascript
router.addRoute('yeni-sayfa', () => {
  loadPage('pages/yeni-sayfa.html');
});
```
3. Navigasyona link ekleyin

### Haber Ekleme
`data/news.json` dosyasını düzenleyin:
```json
{
  "id": 12,
  "date": "1 Ocak 1924",
  "title": "Yeni Haber",
  "category": "SİYASİ",
  "content": "İçerik...",
  "impact": 90,
  "lat": 39.0,
  "lng": 35.0,
  "location": "Ankara"
}
```

## 📄 Lisans

Bu proje TÜBİTAK 2204-A Lise Öğrencileri Araştırma Projeleri Yarışması kapsamında hazırlanmıştır.

## 👥 Katkıda Bulunanlar

- Proje Geliştirme Ekibi
- Tarih Bölümü Danışmanları
- Trabzon Arşiv Uzmanları

## 📞 İletişim

TÜBİTAK İstikbal Projesi - 2025

---

*"Maziden gelen ses, İstikbal'i aydınlatır."*

**İstikbal Gazetesi** | Milli Mücadele'nin Trabzon'daki Yılmaz Sesi | 1918-1925
