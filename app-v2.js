/**
 * İstikbal PWA - Orijinal Sade Sürüm
 * Bu dosya Milli Mücadele eklemelerini içermez.
 */

// 1. DATA (TEMEL)
const NEWS_DATA = [
    {
        "id": 1, "date": "10 Aralık 1918", "title": "İstikbal Gazetesi Yayına Başladı", "category": "BAŞYAZI",
        "content": "Trabzon'un bu gür sesi, vatanın en karanlık günlerinde hakikati haykırmak için doğmuştur.",
        "impact": 100, "lat": 41.0027, "lng": 39.7168, "location": "Trabzon"
    }
];

// Firebase Config
const firebaseConfig = {
    apiKey: "AIzaSyCM4LaFt7ybs3p0UyoMQbhP1QGmSKMy6Wo",
    authDomain: "gazeteistikbal-6e06a.firebaseapp.com",
    databaseURL: "https://gazeteistikbal-6e06a-default-rtdb.firebaseio.com",
    projectId: "gazeteistikbal-6e06a",
};

if (!firebase.apps.length) firebase.initializeApp(firebaseConfig);

// 2. ROUTER & LOADING
window.router = {
    navigate: function (page, addHistory = true) {
        if (addHistory) history.pushState({ page: page }, "", "#" + page);

        const content = document.getElementById('page-content');
        if (!content) return;

        // Sayfa yükleme mantığı (HTML dosyalarından çekme)
        fetch(`./pages/${page}.html`)
            .then(res => res.text())
            .then(html => {
                content.innerHTML = html;
                // Scriptleri çalıştır
                const scripts = content.getElementsByTagName('script');
                for (let s of scripts) {
                    const newScript = document.createElement('script');
                    newScript.text = s.text;
                    document.body.appendChild(newScript);
                }
            })
            .catch(() => {
                if (page === 'home') {
                    content.innerHTML = `
                    <div style="padding:50px; text-align:center;">
                        <h1>İSTİKBAL</h1>
                        <p>Trabzon'un Bağımsızlık Sesi</p>
                        <div style="display:grid; grid-template-columns:1fr 1fr; gap:20px; margin-top:30px;">
                            <button onclick="router.navigate('archive')" style="padding:20px;">Haber Arşivi</button>
                            <button onclick="router.navigate('timeline')" style="padding:20px;">Tarihsel Harita</button>
                        </div>
                    </div>`;
                }
            });

        window.scrollTo(0, 0);
    }
};

window.addEventListener('popstate', (e) => {
    const page = (e.state && e.state.page) || window.location.hash.replace('#', '') || 'home';
    router.navigate(page, false);
});

document.addEventListener('DOMContentLoaded', () => {
    const page = window.location.hash.replace('#', '') || 'home';
    router.navigate(page, true);
});
