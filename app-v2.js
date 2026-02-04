/**
 * İstikbal PWA - MASTER RESTORATION (v1.1 - ROBUST)
 * Bu dosya Firebase Realtime Database ve dinamik sayfa yükleme sistemini içerir.
 */

// 1. FIREBASE CONFIGURATION
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

// Global DB reference for cross-page access
window.db = firebase.database();

// 2. CORE ROUTER
window.router = {
    navigate: function (page, addHistory = true) {
        console.log('[Router] Navigating to:', page);
        if (addHistory) history.pushState({ page: page }, "", "#" + page);

        const content = document.getElementById('page-content');
        if (!content) return;

        // Sayfa yükleme (Pages klasöründen HTML çekme)
        fetch(`./pages/${page}.html`)
            .then(res => {
                if (!res.ok) throw new Error('Page not found: ' + page);
                return res.text();
            })
            .then(html => {
                content.innerHTML = html;

                // Scriptleri çalıştır
                const scripts = content.getElementsByTagName('script');
                for (let s of scripts) {
                    const newScript = document.createElement('script');
                    if (s.src) newScript.src = s.src;
                    else newScript.text = s.text;
                    document.body.appendChild(newScript);
                }

                // Sayfa özel mantıkları
                if (page === 'loyalty') loadLoyaltyMessages();
            })
            .catch(err => {
                console.error('[Router] Error:', err);
                if (page === 'home') loadHomeDefault();
                else content.innerHTML = `<div class="p-20 text-center"><h1>Sayfa Yüklenemedi</h1><p>${err.message}</p></div>`;
            });

        window.scrollTo(0, 0);
    }
};

// 3. VEFA KÖŞESİ (LOYALTY) FUNCTIONS
function loadLoyaltyMessages() {
    const list = document.getElementById('loyalty-messages-list');
    if (!list) return;

    window.db.ref('messages').on('value', (snapshot) => {
        const data = snapshot.val();
        if (data) {
            list.innerHTML = Object.values(data).reverse().map(m => `
                <div class="message-card p-4 mb-4 bg-white rounded-xl shadow-sm border-l-4 border-red-700">
                    <div class="font-bold text-gray-800">${m.name || 'İsimsiz'}</div>
                    <div class="italic text-gray-600">"${m.message || ''}"</div>
                    <div class="text-xs text-gray-400 mt-2">${m.date ? new Date(m.date).toLocaleDateString('tr-TR') : ''}</div>
                </div>
            `).join('');
        } else {
            list.innerHTML = '<div class="text-gray-400 italic">Henüz mesaj bırakılmamış...</div>';
        }
    }, (error) => {
        console.error("[Database] Read Error:", error);
    });
}

window.submitLoyaltyMessage = function () {
    const nameEl = document.getElementById('l-name');
    const msgEl = document.getElementById('l-message');

    if (!nameEl || !msgEl) return;

    const name = nameEl.value;
    const msg = msgEl.value;

    if (!name || !msg) {
        alert("Lütfen tüm alanları doldurun.");
        return;
    }

    window.db.ref('messages').push({
        name: name,
        message: msg,
        date: new Date().toISOString()
    }).then(() => {
        alert("Vefa mesajınız iletildi.");
        nameEl.value = '';
        msgEl.value = '';
    }).catch(err => {
        console.error("[Database] Push Error:", err);
        alert("Mesaj gönderilemedi: " + err.message);
    });
};

function loadHomeDefault() {
    const content = document.getElementById('page-content');
    content.innerHTML = `<div class="p-20 text-center"><h1 class="text-4xl font-bold">İSTİKBAL</h1><p>Sayfa içerikleri yükleniyor...</p></div>`;
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
