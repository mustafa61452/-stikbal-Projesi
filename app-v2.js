/**
 * İstikbal PWA - MASTER RESTORATION (v1.0 - ORIGINAL FULL)
 * Bu dosya projenin en ilk halindeki tüm özellikleri (Firebase, Router, Vefa Köşesi) içerir.
 */

// 1. FIREBASE CONFIGURATION (Kritik: Realtime Database için)
const firebaseConfig = {
    apiKey: "AIzaSyCM4LaFt7ybs3p0UyoMQbhP1QGmSKMy6Wo",
    authDomain: "gazeteistikbal-6e06a.firebaseapp.com",
    databaseURL: "https://gazeteistikbal-6e06a-default-rtdb.firebaseio.com",
    projectId: "gazeteistikbal-6e06a",
    storageBucket: "gazeteistikbal-6e06a.appspot.com",
    messagingSenderId: "367175215570",
    appId: "1:367175215570:web:4434dc06e2361ed775574c"
};

// Initialize Firebase
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}
const db = firebase.database();

// 2. CORE ROUTER
window.router = {
    navigate: function (page, addHistory = true) {
        if (addHistory) history.pushState({ page: page }, "", "#" + page);

        const content = document.getElementById('page-content');
        if (!content) return;

        // Sayfa yükleme (Pages klasöründen HTML çekme)
        fetch(`./pages/${page}.html`)
            .then(res => {
                if (!res.ok) throw new Error('Page not found');
                return res.text();
            })
            .then(html => {
                content.innerHTML = html;

                // Sayfaya özel JavaScript'leri çalıştır (Chart.js vb.)
                const scripts = content.getElementsByTagName('script');
                for (let s of scripts) {
                    const newScript = document.createElement('script');
                    if (s.src) {
                        newScript.src = s.src;
                    } else {
                        newScript.text = s.text;
                    }
                    document.body.appendChild(newScript);
                }

                // Sayfa yüklendikten sonra veri çekme işlemlerini başlat
                if (page === 'loyalty') loadLoyaltyMessages();
            })
            .catch(err => {
                console.error('Navigation Error:', err);
                if (page === 'home') loadHomeDefault();
                else content.innerHTML = '<div class="p-20 text-center"><h1>Sayfa Yüklenemedi</h1></div>';
            });

        window.scrollTo(0, 0);
    }
};

// 3. PAGE LOGICS (ORİJİNAL)

// Vefa Köşesi Mesajları (Firebase Realtime Database)
function loadLoyaltyMessages() {
    const list = document.getElementById('loyalty-messages-list');
    if (!list) return;

    db.ref('messages').on('value', (snapshot) => {
        const data = snapshot.val();
        if (data) {
            list.innerHTML = Object.values(data).reverse().map(m => `
                <div class="message-card p-4 mb-4 bg-white rounded-xl shadow-sm border-l-4 border-red-700">
                    <div class="font-bold text-gray-800">${m.name}</div>
                    <div class="italic text-gray-600">"${m.message}"</div>
                    <div class="text-xs text-gray-400 mt-2">${new Date(m.date).toLocaleDateString('tr-TR')}</div>
                </div>
            `).join('');
        } else {
            list.innerHTML = '<div class="text-gray-400 italic">Henüz mesaj bırakılmamış...</div>';
        }
    });
}

// Mesaj Gönder (Firebase Realtime Database)
window.submitLoyaltyMessage = function () {
    const name = document.getElementById('l-name').value;
    const msg = document.getElementById('l-message').value;

    if (!name || !msg) {
        alert("Lütfen tüm alanları doldurun.");
        return;
    }

    db.ref('messages').push({
        name: name,
        message: msg,
        date: new Date().toISOString()
    }).then(() => {
        alert("Vefa mesajınız iletildi.");
        document.getElementById('l-name').value = '';
        document.getElementById('l-message').value = '';
    });
};

function loadHomeDefault() {
    const content = document.getElementById('page-content');
    content.innerHTML = `
        <div class="p-20 text-center">
            <h1 class="text-5xl font-bold mb-4">İSTİKBAL</h1>
            <p class="text-xl mb-8">Milli Mücadele'nin Trabzon'daki Sesi</p>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                <div onclick="router.navigate('archive')" class="p-8 bg-white rounded-2xl shadow-xl cursor-pointer hover:scale-105 transition">
                    <i class="fas fa-history text-4xl mb-4 text-red-700"></i>
                    <h3 class="text-2xl font-bold">Haber Arşivi</h3>
                </div>
                <div onclick="router.navigate('sentiment')" class="p-8 bg-white rounded-2xl shadow-xl cursor-pointer hover:scale-105 transition">
                    <i class="fas fa-brain text-4xl mb-4 text-pink-700"></i>
                    <h3 class="text-2xl font-bold">Duygu Analizi</h3>
                </div>
            </div>
        </div>
    `;
}

// 4. INITIALIZATION
window.addEventListener('popstate', (e) => {
    const page = (e.state && e.state.page) || window.location.hash.replace('#', '') || 'home';
    router.navigate(page, false);
});

document.addEventListener('DOMContentLoaded', () => {
    const page = window.location.hash.replace('#', '') || 'home';
    router.navigate(page, true);
});
