/**
 * İstikbal PWA - MASTER RESTORATION (v1.2 - ULTIMATE RESILIENCE)
 * Frankfurt Regional DB Support & Debugging Tools Included.
 */

// 1. FIREBASE CONFIGURATION
// Not: fra1 hatası Frankfurt bölgesini (europe-west1) işaret eder.
const firebaseConfig = {
    apiKey: "AIzaSyCM4LaFt7ybs3p0UyoMQbhP1QGmSKMy6Wo",
    authDomain: "gazeteistikbal-6e06a.firebaseapp.com",
    databaseURL: "https://gazeteistikbal-6e06a-default-rtdb.europe-west1.firebasedatabase.app", // Güncel Frankfurt URL
    projectId: "gazeteistikbal-6e06a",
    storageBucket: "gazeteistikbal-6e06a.appspot.com",
    messagingSenderId: "367175215570",
    appId: "1:367175215570:web:4434dc06e2361ed775574c"
};

// Global DB Reference
let database;

function initFirebase() {
    try {
        if (!firebase.apps.length) {
            firebase.initializeApp(firebaseConfig);
        }
        database = firebase.database();
        window.db = database;
        console.log('[Firebase] Initialized with Frankfurt URL');
    } catch (err) {
        console.error('[Firebase] Initialization Error:', err);
    }
}

initFirebase();

// 2. CORE ROUTER
window.router = {
    navigate: function (page, addHistory = true) {
        if (addHistory) history.pushState({ page: page }, "", "#" + page);

        const content = document.getElementById('page-content');
        if (!content) return;

        fetch(`./pages/${page}.html?v=${Date.now()}`)
            .then(res => {
                if (!res.ok) throw new Error('Page not found');
                return res.text();
            })
            .then(html => {
                content.innerHTML = html;

                const scripts = content.getElementsByTagName('script');
                for (let s of scripts) {
                    const newScript = document.createElement('script');
                    if (s.src) newScript.src = s.src;
                    else newScript.text = s.text;
                    document.body.appendChild(newScript);
                }

                if (page === 'loyalty') loadLoyaltyMessages();
            })
            .catch(err => {
                console.error('[Router] Load Error:', err);
                if (page === 'home') loadHomeDefault();
                else content.innerHTML = `<div class="p-20 text-center"><h1>Yükleme Hatası</h1><p>${err.message}</p></div>`;
            });

        window.scrollTo(0, 0);
    }
};

// 3. VEFA KÖŞESİ (LOYALTY)
function loadLoyaltyMessages() {
    const list = document.getElementById('loyalty-messages-list');
    if (!list) return;

    // Timeout mechanism for feedback
    const timeout = setTimeout(() => {
        if (list.innerHTML.includes('yükleniyor')) {
            list.innerHTML = `
                <div class="text-amber-600 bg-amber-50 p-4 rounded-xl border border-amber-200">
                    <strong>Bağlantı gecikiyor...</strong><br>
                    Veritabanı yanıt vermedi. Lütfen şu URL'lerin Firebase Console'da doğru olduğunu teyit edin:<br>
                    <code class="text-xs">europe-west1.firebasedatabase.app</code>
                </div>`;
        }
    }, 5000);

    window.db.ref('messages').on('value', (snapshot) => {
        clearTimeout(timeout);
        const data = snapshot.val();
        if (data) {
            list.innerHTML = Object.values(data).reverse().map(m => `
                <div class="message-card p-4 mb-4 bg-white rounded-xl shadow-sm border-l-4 border-red-700 animate-fade-in">
                    <div class="font-bold text-gray-800">${m.name || 'İsimsiz'}</div>
                    <div class="italic text-gray-600">"${m.message || ''}"</div>
                    <div class="text-xs text-gray-400 mt-2">${m.date ? new Date(m.date).toLocaleDateString('tr-TR') : ''}</div>
                </div>
            `).join('');
        } else {
            list.innerHTML = '<div class="text-gray-400 italic">Henüz mesaj bırakılmamış...</div>';
        }
    }, (error) => {
        clearTimeout(timeout);
        console.error("[Database] Error:", error);
        list.innerHTML = `<div class="p-4 bg-red-50 text-red-700 rounded-xl border border-red-200">
            <strong>Bağlantı Hatası:</strong> ${error.message}
        </div>`;
    });
}

window.submitLoyaltyMessage = function () {
    const nameEl = document.getElementById('l-name');
    const msgEl = document.getElementById('l-message');
    if (!nameEl || !msgEl) return;

    const name = nameEl.value.trim();
    const msg = msgEl.value.trim();

    if (!name || !msg) {
        alert("Lütfen isim ve mesaj alanlarını doldurun.");
        return;
    }

    const btn = document.querySelector('.submit-btn');
    const originalText = btn.innerText;
    btn.innerText = "Gönderiliyor...";
    btn.disabled = true;

    window.db.ref('messages').push({
        name: name,
        message: msg,
        date: new Date().toISOString()
    }).then(() => {
        alert("Vefa mesajınız başarıyla iletildi.");
        nameEl.value = '';
        msgEl.value = '';
    }).catch(err => {
        alert("Hata oluştu: " + err.message);
    }).finally(() => {
        btn.innerText = originalText;
        btn.disabled = false;
    });
};

function loadHomeDefault() {
    const content = document.getElementById('page-content');
    content.innerHTML = `<div class="p-20 text-center"><h1 class="text-4xl font-bold">İSTİKBAL</h1><p>Vatanın Sesi</p></div>`;
}

// 4. INIT
window.addEventListener('popstate', (e) => {
    const page = (e.state && e.state.page) || window.location.hash.replace('#', '') || 'home';
    router.navigate(page, false);
});

document.addEventListener('DOMContentLoaded', () => {
    const page = window.location.hash.replace('#', '') || 'home';
    router.navigate(page, true);
});
