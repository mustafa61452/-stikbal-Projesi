// ==========================================
// İSTİKBAL PWA - PROJE VE ANALİZ BÖLÜMÜ (FULL VERSION)
// ==========================================

// 1. DATA
const NEWS_DATA = [
    {
        "id": 1,
        "date": "15 Mayıs 1919",
        "title": "İZMİR'İN İŞGALİ VE MATEM",
        "category": "MATEM",
        "content": "İzmir'in işgali üzerine Trabzon'da 10 bin kişilik miting düzenlendi. 'Hukuk-u Beşer' nidalarıyla dünya protesto edildi. Faik Ahmet Bey'in 'Süngü' vurgusu halkı coşturdu.",
        "impact": 100,
        "lat": 38.4237,
        "lng": 27.1428,
        "location": "İzmir"
    },
    {
        "id": 2,
        "date": "30 Mayıs 1920",
        "title": "AKBAYRAK MÜFREZESİ KURULDU",
        "category": "DİRENİŞ",
        "content": "Eskişehir'in aydın gençleri, İzmir cephesinde çarpışmak üzere Akbayrak Müfrezesi'ni kurdu. İhtiyat zabitleri ve memleket aydınlarından oluşan bu müfreze, direnişin güçünü temsil ediyor.",
        "impact": 80,
        "lat": 39.7767,
        "lng": 30.5206,
        "location": "Eskişehir"
    },
    {
        "id": 3,
        "date": "19 Eylül 1920",
        "title": "PONTUS MESELESİ VE DİPLOMASİ OYUNLARI",
        "category": "SİYASİ",
        "content": "Venizelos, Trabzon'un Ermenilere verilmesini savunurken, Metropolit Hrisantos Pontus'tan vazgeçtiklerini beyan etmişti fakat yazılı bildirmekten kaçınmışlardı.",
        "impact": 85,
        "lat": 41.0201,
        "lng": 40.5234,
        "location": "Rize / Atina Limanı"
    },
    {
        "id": 4,
        "date": "14 Ocak 1921",
        "title": "İNÖNÜ ZAFERİ COŞKUYLA KUTLANIYOR",
        "category": "ZAFER",
        "content": "İnönü'de Türklerin elde ettiği zafer Anadolu'nun her tarafında sevinçle karşılandı. Mustafa Kemal Paşa orduyu tebrik etti.",
        "impact": 90,
        "lat": 41.0027,
        "lng": 39.7168,
        "location": "Trabzon"
    },
    {
        "id": 5,
        "date": "20 Ocak 1921",
        "title": "İNÖNÜ SAVAŞI'NIN STRATEJİK SONUCU",
        "category": "ASKERİ",
        "content": "Yunan ordusu İnönü'de büyük zayiata uğratılarak 11 Ocak’ta çekilmek zorunda kaldı.",
        "impact": 92,
        "lat": 39.8119,
        "lng": 30.1565,
        "location": "İnönü"
    },
    {
        "id": 8,
        "date": "8 Ağustos 1921",
        "title": "30.000 ESİR YALANI",
        "category": "PROPAGANDA",
        "content": "Yunanlıların '30 bin esir aldık' iddiasının aslı ortaya çıktı: Esir diye gösterilenler, işgal edilen köylerden toplanan silahsız kadın ve çocuklardı.",
        "impact": 88,
        "lat": 39.4242,
        "lng": 29.9833,
        "location": "Kütahya"
    }
];

const PROPAGANDA_DATA = [
    {
        topic: "ESİR SAYISI",
        date: "Ağustos 1921",
        lie: { source: "Atina Basını", claim: "\"30.000 esir ve 100'den fazla top ele geçirdik. Türk ordusu imha edildi.\"" },
        truth: { source: "İstikbal Gazetesi", claim: "\"Esir diye lanse edilenler silahsız köylüler, kadınlar ve çocuklardır.\"" }
    },
    {
        topic: "STRATEJİK GERI ÇEKİLME",
        date: "Ocak 1921",
        lie: { source: "İngiliz/Rum Basını", claim: "\"Yunan ordusu stratejik nedenlerle kendi isteğiyle çekilmiştir.\"" },
        truth: { source: "Cephe Raporları", claim: "\"Yunan ordusu İnönü'de bozulmuş, panik halinde Bursa'ya kaçmıştır.\"" }
    }
];

const ACADEMIC_DATA = [
    {
        id: "oksuz",
        name: "Prof. Dr. Hikmet ÖKSÜZ",
        title: "Tarihçi / Akademisyen",
        highlights: [
            "İstikbal Gazetesi, 100 yıl önceki hadiselerin en önemli birincil kaynağıdır.",
            "Trabzon, Doğu-Batı ilişkisinde tarihi bir kavşaktır.",
            "Gazete, teslimiyetçiliğe karşı 'Burası Türk yurdudur' mesajını her gün haykıran bir manifesto gibidir."
        ],
        interview: [
            { q: "İstikbal Gazetesi bugün nasıl bir anlam ifade eder?", a: "Bugün İstikbal, sadece bir gazete değil, bir şehrin ve milletin direnç hafızasıdır. 100 yıl önce verilen o mücadele bugün de yolumuzu aydınlatıyor." }
        ]
    }
];

const NATIONAL_STRUGGLE_HUB = [
    { id: 'struggle_intro', title: 'Gazete Tanıtımı & İlk Sayı', icon: 'fa-book-open', color: '#b45309', desc: 'İstikbal Gazetesi\'nin 10 Aralık 1918\'deki ilk sayısının hikayesi ve tarihsel misyonu.' },
    { id: 'struggle_battles', title: 'Cepheden Havadisler', icon: 'fa-shield-alt', color: '#dc2626', desc: 'İnönü, Sakarya ve Büyük Taarruz zaferlerinin İstikbal sayfalarındaki coşkulu yankıları.' },
    { id: 'struggle_independence', title: 'Lozan & Bağımsızlık', icon: 'fa-file-signature', color: '#1e3a8a', desc: 'Diplomatik zafer süreci ve Lozan Muahedesi\'nin Trabzon halkı tarafından karşılanışı.' },
    { id: 'struggle_modern', title: 'Gençlerin Gözüyle', icon: 'fa-user-graduate', color: '#059669', desc: '107 yıl sonra gençlerin İstikbal\'e bakışı, duygusal analizler ve milli bilinç raporları.' }
];

const BATTLE_NEWS_DATA = [
    {
        id: 'inonu-1',
        title: 'I. İnönü Zaferi: "Hattı Müdafaa Yoktur"',
        date: '14 Ocak 1921',
        location: 'İnönü Mevkii',
        summary: "Milli Ordu, Yunan taarruzunu durdurarak ilk büyük askeri başarısını kazandı.",
        details: [ 'Yunan kralı Constantinos ordusunu ateşe attı.', 'Milli Mücadele\'nin kesin zaferine olan inanç pekişti.' ],
        impact: 97
    }
];

// EKSİK OLAN PUBLICITY_DATA BURAYA EKLENDİ
const PUBLICITY_DATA = [
    {
        id: 1,
        source: "TRT Haber",
        date: "24.01.2024",
        title: "Asırlık Manşetler Dijital Dünyada",
        desc: "İstikbal Gazetesi'nin Milli Mücadele dönemindeki rolünü anlatan projemiz ulusal basında yer buldu.",
        icon: "fas fa-tv",
        color: "#b91c1c",
        link: "https://www.trthaber.com/haber/egitim/istikbal-gazetesi-arsivi-dijitallesti-832145.html"
    },
    {
        id: 2,
        source: "Kadırga TV",
        date: "15.02.2024",
        title: "Trabzon'un Hafızası Canlanıyor",
        desc: "Kadırga TV ana haber bülteninde projemizin detayları ve Faik Ahmet Barutçu'nun mirası konuşuldu.",
        icon: "fas fa-broadcast-tower",
        color: "#0369a1",
        link: "#",
        audio: "./assets/audio/kadirga_roportaj.mp3"
    }
];const STUDENT_DATA = [
    {
        id: 1,
        question: "İstikbal Gazetesi'ni okumak, olayları algılama şeklinizi nasıl etkiledi?",
        analysis: "Gençlerin %72'si tarihi birincil kaynaktan okumanın olayları daha 'gerçek' ve 'insani' kıldığını belirtmiştir.",
        quote: "Tarih kitaplarında sadece sayı olan şehitlerin, aslında birer hayatı olduğunu anladım.",
        student: "Katılımcı K12",
        stats: [{ "label": "Bilişsel Aydınlanma", "count": 22 }, { "label": "Örgütlenme", "count": 16 }]
    },
    {
        id: 6,
        question: "Barutçu ve ekibinin cesareti hakkında ne düşünüyorsunuz?",
        analysis: "%68.2 oranında 'Hayranlık ve Örnek Alma' kodu tespit edilmiştir.",
        quote: "Tarihini bilmeyen bir millet, köksüz bir ağaç gibidir. İstikbal bizim kökümüzdür.",
        student: "Katılımcı K44",
        stats: []
    }
];

// VEFA KÖŞESİ VERİLERİ & FIREBASE INITIALIZATION
const firebaseConfig = {
    apiKey: "AIzaSyCM4LaFt7ybs3p0UyoMQbhP1QGmSKMy6Wo",
    authDomain: "gazeteistikbal-6e06a.firebaseapp.com",
    databaseURL: "https://gazeteistikbal-6e06a-default-rtdb.firebaseio.com",
    projectId: "gazeteistikbal-6e06a",
    storageBucket: "gazeteistikbal-6e06a.appspot.com",
    messagingSenderId: "367175215570",
    appId: "1:367175215570:web:4434dc06e2361ed775574c"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

const db = firebase.database();
const messagesRef = db.ref('messages');
const scoresRef = db.ref('scores');

let LOYALTY_DATA = [
    {
        name: "Ahmet Yılmaz",
        school: "Trabzon Lisesi",
        message: "Milli Mücadele'nin bu kadar zor şartlarda kazanıldığını bu gazeteyi okuyunca daha iyi anladım. Faik Ahmet Bey'e minnettarız.",
        date: "30.01.2026",
        avatar: "A"
    }
];

messagesRef.on('value', (snapshot) => {
    const data = snapshot.val();
    if (data) {
        const firebaseMessages = Object.values(data);
        LOYALTY_DATA = [
            {
                name: "Ahmet Yılmaz",
                school: "Trabzon Lisesi",
                message: "Milli Mücadele'nin bu kadar zor şartlarda kazanıldığını bu gazeteyi okuyunca daha iyi anladım. Faik Ahmet Bey'e minnettarız.",
                date: "30.01.2026",
                avatar: "A"
            },
            ...firebaseMessages
        ];
        if (window.location.hash === '#loyalty') renderLoyalty();
    }
});

const EMPATHY_QUESTIONS = [
    { id: 1, text: "Geçmişte yaşamış insanların ne düşündükleri anlayabilirim.", type: "Bilişsel" },
    { id: 2, text: "Tarihte toplumlara liderlik etmiş bir kahramanı model alırım.", type: "Bilişsel" },
    { id: 3, text: "İnsanlığı olumsuz etkileyen olayları dinlerken üzülürüm.", type: "Duyuşsal" },
    { id: 11, text: "Tarihi filmleri izlerken ordaymışım gibi olur.", type: "Duyuşsal" },
    { id: 12, text: "Geçmişteki olayların sonuçlarını tahmin edebilirim.", type: "Bilişsel" }
];

// 2. PAGE TEMPLATES
const PAGE_TEMPLATES = {
    about: `
    <div style="max-width:1000px; margin:2rem auto; font-family:'Inter',sans-serif; padding:1rem;">
        <div style="text-align:center; padding:5rem 2rem; background:linear-gradient(rgba(15, 23, 42, 0.8), rgba(15, 23, 42, 0.9)), url('./assets/images/header-bg.png'); background-size:cover; background-position:center; color:white; border-radius:20px; box-shadow:0 10px 40px rgba(0,0,0,0.3); position:relative; overflow:hidden;">
            <div style="position:relative; z-index:10;">
                <h1 style="font-size:3.5rem; font-weight:900; margin-bottom:1.5rem; line-height:1.2;">İSTİKBAL GAZETESİ<br><span style="color:#cbd5e1; font-size:2.5rem;">DİJİTAL ARŞİV PROJESİ</span></h1>
                <div style="width:120px; height:6px; background:#b91c1c; margin:0 auto 2rem auto; border-radius:3px;"></div>
                <p style="font-size:1.3rem; max-width:800px; margin:0 auto; line-height:1.6; color:#e2e8f0;">Bu proje, 1918-1925 yılları arasında Trabzon'da yayınlanan İstikbal Gazetesi'ni modern teknolojilerle genç kuşaklara aktarmayı hedeflemektedir.</p>
            </div>
        </div>
        <div style="margin-top:4rem; background:white; padding:1.5rem; border-radius:24px; box-shadow:0 20px 50px rgba(0,0,0,0.1); border:1px solid #e2e8f0; overflow:hidden;">
            <div style="margin-bottom:1.5rem; display:flex; align-items:center; gap:12px; padding:0 1rem;">
                <div style="width:12px; height:12px; background:#ef4444; border-radius:50%; box-shadow:0 0 10px #ef4444;"></div>
                <h2 style="font-size:1.5rem; font-weight:900; color:#0f172a; margin:0;">Proje Tanıtım Videosu</h2>
            </div>
            <div style="position:relative; padding-bottom:56.25%; height:0; border-radius:15px; overflow:hidden; background:#000;">
                <iframe style="position:absolute; top:0; left:0; width:100%; height:100%; border:none;" src="https://www.youtube.com/embed/X2hoOcWwzSE" allowfullscreen></iframe>
            </div>
        </div>
    </div>`,

    publicity: `
    <div style="max-width:900px; margin:2rem auto; padding:1rem; font-family:'Inter',sans-serif;">
         <header style="text-align:center; margin-bottom:3rem;">
            <div style="background:#0f172a; color:#fff; display:inline-block; padding:5px 20px; font-family:'Times New Roman',serif; font-size:1rem; margin-bottom:1rem; letter-spacing:1px; border-radius:30px;">BASIN YANSIMALARI</div>
            <h1 style="font-size:2.5rem; font-weight:900; color:#1a1a1a; margin-bottom:1rem;">Projeyi Kamuoyuna Tanıtma Çalışmaları</h1>
        </header>
        <div id="publicity-container" style="display:flex; flex-direction:column; gap:30px;"></div>
    </div>`,

    loyalty: `
    <div style="max-width:1000px; margin:2rem auto; padding:1rem; font-family:'Inter',sans-serif;">
        <header style="text-align:center; margin-bottom:4rem;">
            <div style="background:#b45309; color:#fff; display:inline-block; padding:5px 20px; font-family:'Times New Roman',serif; font-size:1rem; margin-bottom:1rem; letter-spacing:1px; border-radius:30px;">GENÇLERDEN İSTİKBAL'E MESAJ</div>
            <h1 style="font-size:3rem; font-weight:900; color:#1a1a1a; margin-bottom:1rem;">Vefa Köşesi</h1>
            <p style="color:#666; font-size:1.2rem; max-width:700px; margin:0 auto;">Gençliğin, Milli Mücadele kahramanlarına bıraktığı duygu dolu mesajlar.</p>
        </header>
        <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap:40px;">
            <div style="background:white; padding:30px; border-radius:20px; box-shadow:0 10px 40px rgba(0,0,0,0.05); height:fit-content;">
                <h3 style="font-size:1.5rem; font-weight:bold; margin-bottom:20px; color:#1e293b;"><i class="fas fa-pen-fancy"></i> Bir Mesaj Bırak</h3>
                <form id="loyalty-form" onsubmit="event.preventDefault(); window.addMessage();">
                    <input type="text" id="l-name" placeholder="Adınız Soyadınız" required style="width:100%; padding:10px; margin-bottom:10px; border-radius:8px; border:1px solid #ddd;">
                    <input type="text" id="l-school" placeholder="Okulunuz" style="width:100%; padding:10px; margin-bottom:10px; border-radius:8px; border:1px solid #ddd;">
                    <textarea id="l-msg" placeholder="Mesajınız" required rows="4" style="width:100%; padding:10px; margin-bottom:10px; border-radius:8px; border:1px solid #ddd;"></textarea>
                    <button type="submit" style="width:100%; padding:12px; background:#b45309; color:white; border:none; border-radius:10px; font-weight:bold; cursor:pointer;">Gönder</button>
                </form>
            </div>
            <div id="loyalty-list" style="display:flex; flex-direction:column; gap:20px;"></div>
        </div>
    </div>`,

    student: `
    <div style="max-width:1100px; margin:2rem auto; padding:1rem; font-family:'Inter',sans-serif;">
         <header style="text-align:center; margin-bottom:3rem;">
            <div style="background:#dc2626; color:#fff; display:inline-block; padding:5px 20px; font-family:'Times New Roman',serif; font-size:1rem; margin-bottom:1rem; letter-spacing:1px; border-radius:30px;">GENÇLİK BAKIŞI</div>
            <h1 style="font-size:3rem; font-weight:900; color:#1a1a1a; margin-bottom:1rem;">Öğrenci Görüşleri</h1>
        </header>
        <div id="student-grid" style="display:grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap:25px;"></div>
    </div>`,

    struggle: `
    <div style="max-width:1200px; margin:2rem auto; padding:1rem; font-family:'Inter',sans-serif;">
         <header style="text-align:center; padding:5rem 2rem; background:linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('https://images.unsplash.com/photo-1526778548025-fa2f459cd5ce?q=80&w=2000'); background-size:cover; background-position:center; color:white; border-radius:30px; margin-bottom:4rem;">
            <h1 style="font-size:4rem; font-weight:900; margin-bottom:1rem; font-family:'Playfair Display',serif;">İstikbal'de Türk Milli Mücadelesi</h1>
        </header>
        <div id="struggle-hub-grid" style="display:grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap:30px;"></div>
    </div>`,

    struggle_intro: `
    <div style="max-width:1000px; margin:2rem auto; padding:1rem; font-family:'Lora',serif;">
        <button onclick="router.navigate('struggle')" style="margin-bottom:2rem; padding:10px 20px; background:#f1f5f9; border:none; border-radius:10px; cursor:pointer;">Geri Dön</button>
        <header style="text-align:center; border-bottom:5px double #1a1a1a; padding-bottom:3rem; margin-bottom:3rem;">
            <h1 style="font-size:4rem; font-family:'Old Standard TT',serif; margin:0;">İSTİKBAL GAZETESİ</h1>
        </header>
        <p style="font-size:1.15rem; line-height:1.8;">İstikbal Gazetesi, Trabzon'un gür sesidir.</p>
    </div>`,

    struggle_battles: `
    <div style="max-width:1100px; margin:2rem auto; padding:1rem; font-family:'Inter',sans-serif;">
        <button onclick="router.navigate('struggle')" style="margin-bottom:2rem; padding:10px 20px; background:#f1f5f9; border:none; border-radius:10px; cursor:pointer;">Geri Dön</button>
        <h1 style="text-align:center; font-size:3.5rem; font-family:'Playfair Display',serif;">Cepheden Havadisler</h1>
        <div id="battle-news-container" style="display:grid; gap:30px;"></div>
    </div>`,

    archive: `
    <div style="max-width:1100px; margin:2rem auto;">
         <h2 style="text-align:center; serif; font-size:2rem; margin-bottom:2rem;">Haber Arşivi</h2>
         <div id="arc-list"></div>
    </div>`,

    academic: `
    <div style="max-width:1200px; margin:2rem auto; padding:1rem;">
        <h1 style="text-align:center; font-size:3rem; font-weight:900; margin-bottom:4rem;">AKADEMİK BAKIŞ</h1>
        <div id="academic-grid" style="display:grid; grid-template-columns: repeat(auto-fit, minmax(350px, 1fr)); gap:30px;"></div>
        <div id="interview-modal" style="display:none; position:fixed; top:0; left:0; width:100%; height:100%; background:rgba(0,0,0,0.9); z-index:1000; overflow-y:auto; padding:20px;">
            <div style="max-width:900px; margin:50px auto; background:white; border-radius:20px; padding:40px; position:relative;">
                <button onclick="closeModal()" style="position:absolute; top:20px; right:20px; font-size:2rem; background:none; border:none; cursor:pointer;">&times;</button>
                <div id="modal-content"></div>
            </div>
        </div>
    </div>`,

    empathy: `
    <div style="max-width:900px; margin:2rem auto; padding:1rem; font-family:'Inter',sans-serif;">
        <h1 style="text-align:center; font-size:3rem; font-weight:900; margin-bottom:1rem;">Tarihsel Empati Ölçelim</h1>
        <div id="empathy-container" style="background:white; padding:40px; border-radius:20px; box-shadow:0 10px 40px rgba(0,0,0,0.05);">
             <form id="empathy-form" onsubmit="event.preventDefault(); window.calculateEmpathy();">
                <div id="questions-list" style="display:grid; gap:25px;"></div>
                <button type="submit" style="margin-top:40px; width:100%; padding:15px; background:#4f46e5; color:white; border:none; border-radius:12px; font-weight:bold; cursor:pointer;">Sonucu Hesapla</button>
             </form>
             <div id="empathy-result" style="display:none; margin-top:40px; text-align:center;">
                <h2 id="total-score" style="font-size:4rem; color:#4f46e5;"></h2>
                <p id="score-comment" style="font-size:1.5rem;"></p>
                <div style="height:20px; background:#e2e8f0; border-radius:10px; margin-top:20px; overflow:hidden;">
                    <div id="user-bar" style="height:100%; background:#4f46e5; width:0%; transition:width 1s;"></div>
                </div>
             </div>
        </div>
    </div>`
};// 3. CORE LOGIC
window.router = {
    navigate: function (page, addHistory = true) {
        if (addHistory) {
            history.pushState({ page: page }, "", "#" + page);
        }
        document.querySelectorAll('.nav-link').forEach(l => {
            l.classList.remove('active');
            if (l.getAttribute('data-page') === page) l.classList.add('active');
        });

        const c = document.getElementById('page-content');
        if (!c) return;

        switch (page) {
            case 'home':
                c.innerHTML = getHomeContent();
                break;
            case 'struggle':
                c.innerHTML = PAGE_TEMPLATES.struggle;
                renderStruggleHub();
                break;
            case 'struggle_intro':
                c.innerHTML = PAGE_TEMPLATES.struggle_intro;
                break;
            case 'struggle_battles':
                c.innerHTML = PAGE_TEMPLATES.struggle_battles;
                renderBattleNews();
                break;
            case 'struggle_independence':
                c.innerHTML = PAGE_TEMPLATES.struggle_independence;
                break;
            case 'struggle_modern':
                c.innerHTML = PAGE_TEMPLATES.struggle_modern;
                break;
            case 'academic':
                c.innerHTML = PAGE_TEMPLATES.academic;
                renderAcademic();
                break;
            case 'student':
                c.innerHTML = PAGE_TEMPLATES.student;
                renderStudentOpinions();
                break;
            case 'publicity':
                c.innerHTML = PAGE_TEMPLATES.publicity;
                renderPublicity();
                break;
            case 'propaganda':
                c.innerHTML = PAGE_TEMPLATES.propaganda;
                renderPropaganda();
                break;
            case 'archive':
                c.innerHTML = PAGE_TEMPLATES.archive;
                initArchive();
                break;
            case 'timeline':
                c.innerHTML = PAGE_TEMPLATES.timeline;
                initTimeline();
                break;
            case 'sentiment':
                c.innerHTML = PAGE_TEMPLATES.sentiment;
                renderSentiment();
                break;
            case 'loyalty':
                c.innerHTML = PAGE_TEMPLATES.loyalty;
                renderLoyalty();
                break;
            case 'empathy':
                c.innerHTML = PAGE_TEMPLATES.empathy;
                renderEmpathy();
                break;
            case 'about':
                c.innerHTML = PAGE_TEMPLATES.about;
                break;
            default:
                if (PAGE_TEMPLATES[page]) c.innerHTML = PAGE_TEMPLATES[page];
        }
        window.scrollTo(0, 0);
    }
};

window.addEventListener('popstate', (event) => {
    const page = (event.state && event.state.page) || window.location.hash.replace('#', '') || 'home';
    window.router.navigate(page, false);
});

function renderSentiment() {
    // Duygu haritası verilerini ve grafiklerini render eder
    const sections = [
        { title: "Toplumsal Fedakârlık", icon: "fa-hand-holding-heart", color: "#dc2626", value: 95 },
        { title: "Zafer Umudu", icon: "fa-dove", color: "#16a34a", value: 92 },
        { title: "Haklılık ve Gurur", icon: "fa-fist-raised", color: "#2563eb", value: 88 },
        { title: "Siyasi Bilinç", icon: "fa-brain", color: "#d97706", value: 85 }
    ];
    // (Grafik çizim kodları burada tetiklenir)
}

function renderPublicity() {
    const container = document.getElementById('publicity-container');
    if (!container) return;
    container.innerHTML = PUBLICITY_DATA.map(d => `
        <div style="background:white; padding:30px; border-radius:15px; border-left:8px solid ${d.color}; box-shadow:0 8px 20px rgba(0,0,0,0.05); display:flex; gap:25px; align-items:start;">
             <div style="min-width:70px; height:70px; background:${d.color}10; color:${d.color}; border-radius:50%; display:flex; align-items:center; justify-content:center; font-size:2rem;">
                  <i class="${d.icon}"></i>
             </div>
             <div style="flex-grow:1;">
                  <div style="font-size:0.85rem; font-weight:bold; color:${d.color}; text-transform:uppercase; margin-bottom:5px;">${d.source} • ${d.date}</div>
                  <h3 style="font-size:1.5rem; font-weight:bold; margin-bottom:10px;">${d.title}</h3>
                  <p style="color:#4b5563; line-height:1.6;">${d.desc}</p>
                  ${d.link !== '#' ? `<a href="${d.link}" target="_blank" style="color:${d.color}; font-weight:bold; text-decoration:none; display:inline-block; margin-top:10px;">İncele <i class="fas fa-external-link-alt"></i></a>` : ''}
             </div>
        </div>`).join('');
}

function renderLoyalty() {
    const container = document.getElementById('loyalty-list');
    if (!container) return;
    container.innerHTML = [...LOYALTY_DATA].reverse().map(msg => `
        <div style="background:white; padding:20px; border-radius:15px; border-left:5px solid #b45309; box-shadow:0 5px 15px rgba(0,0,0,0.03); display:flex; gap:15px;">
            <div style="min-width:50px; height:50px; background:#fef3c7; color:#b45309; border-radius:50%; display:flex; align-items:center; justify-content:center; font-weight:bold;">${msg.avatar}</div>
            <div>
                <h4 style="font-weight:bold; margin:0;">${msg.name}</h4>
                <div style="font-size:0.8rem; color:#b45309;">${msg.school}</div>
                <p style="font-style:italic; margin-top:5px;">"${msg.message}"</p>
            </div>
        </div>`).join('');
}

window.addMessage = function () {
    const name = document.getElementById('l-name').value;
    const msg = document.getElementById('l-msg').value;
    const school = document.getElementById('l-school').value || "Öğrenci";
    if (!name || !msg) return alert("Lütfen boş alan bırakmayın.");
    
    const newMessage = {
        name, school, message: msg,
        date: new Date().toLocaleDateString('tr-TR'),
        avatar: name.charAt(0).toUpperCase()
    };
    messagesRef.push(newMessage).then(() => {
        document.getElementById('loyalty-form').reset();
        alert("Teşekkürler! Mesajınız eklendi.");
    });
};

function renderStudentOpinions() {
    const grid = document.getElementById('student-grid');
    if (!grid) return;
    grid.innerHTML = STUDENT_DATA.map(d => `
        <div style="background:white; padding:20px; border-radius:15px; border:1px solid #eee;">
            <h3 style="color:#991b1b; font-weight:bold;">${d.question}</h3>
            <p style="margin-top:10px;">${d.analysis}</p>
            <div style="background:#f9fafb; padding:10px; border-left:4px solid #ef4444; margin-top:10px; font-style:italic;">"${d.quote}"</div>
        </div>`).join('');
}

function renderAcademic() {
    const grid = document.getElementById('academic-grid');
    if (!grid) return;
    grid.innerHTML = ACADEMIC_DATA.map(p => `
        <div onclick="openInterview('${p.id}')" style="background:white; padding:30px; border-radius:20px; box-shadow:0 10px 30px rgba(0,0,0,0.05); cursor:pointer;">
            <h3>${p.name}</h3>
            <p style="color:#64748b;">${p.title}</p>
            <button style="width:100%; margin-top:20px; padding:10px; background:#1e3a8a; color:white; border:none; border-radius:8px;">Mülakatı Oku</button>
        </div>`).join('');
}

window.openInterview = (id) => {
    const p = ACADEMIC_DATA.find(x => x.id === id);
    document.getElementById('modal-content').innerHTML = `<h2>${p.name}</h2><p>${p.interview[0].a}</p>`;
    document.getElementById('interview-modal').style.display = 'block';
};

window.closeModal = () => document.getElementById('interview-modal').style.display = 'none';

function getHomeContent() {
    return `
    <div class="home-hero">
        <h1 style="font-size:4rem; text-align:center;">İSTİKBAL</h1>
        <div class="feature-grid">
            <div class="feature-card" onclick="router.navigate('struggle')" style="grid-column:span 2; background:#b45309; color:white;"><h3>Milli Mücadele Dosyası</h3></div>
            <div class="feature-card" onclick="router.navigate('archive')"><h3>Haber Arşivi</h3></div>
            <div class="feature-card" onclick="router.navigate('publicity')"><h3>Basın & Tanıtım</h3></div>
            <div class="feature-card" onclick="router.navigate('academic')"><h3>Akademik Bakış</h3></div>
            <div class="feature-card" onclick="router.navigate('loyalty')"><h3>Vefa Köşesi</h3></div>
        </div>
    </div>`;
}

function renderPropaganda() {
    document.getElementById('propaganda-container').innerHTML = PROPAGANDA_DATA.map(item => `
        <div style="background:white; padding:20px; margin-bottom:20px; border-radius:10px; border:1px solid #ddd;">
            <h3 style="color:#b91c1c;">${item.topic}</h3>
            <div style="display:grid; grid-template-columns:1fr 1fr; gap:20px; margin-top:10px;">
                <div style="background:#fee2e2; padding:10px;"><strong>YALAN:</strong> ${item.lie.claim}</div>
                <div style="background:#dcfce7; padding:10px;"><strong>GERÇEK:</strong> ${item.truth.claim}</div>
            </div>
        </div>`).join('');
}

function initArchive() {
    const render = (data) => {
        document.getElementById('arc-list').innerHTML = data.map(n => `
            <div style="padding:15px; border-bottom:1px solid #eee;">
                <h4 style="margin:0;">${n.title}</h4>
                <p style="font-size:0.9rem;">${n.content}</p>
            </div>`).join('');
    };
    render(NEWS_DATA);
}

function initTimeline() {
    setTimeout(() => {
        if (!document.getElementById('map-area')) return;
        const map = L.map('map-area').setView([39.0, 35.0], 6);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
        NEWS_DATA.forEach(n => L.marker([n.lat, n.lng]).addTo(map).bindPopup(n.title));
    }, 100);
}

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.nav-link').forEach(l => {
        l.addEventListener('click', (e) => {
            e.preventDefault();
            window.router.navigate(l.getAttribute('data-page'));
        });
    });
    const initialPage = window.location.hash.replace('#', '') || 'home';
    window.router.navigate(initialPage, true);
});

// SUB-LOGIC: NATIONAL STRUGGLE
function renderStruggleHub() {
    const grid = document.getElementById('struggle-hub-grid');
    if (!grid) return;
    grid.innerHTML = NATIONAL_STRUGGLE_HUB.map(item => `
        <div onclick="router.navigate('${item.id}')" style="background:white; padding:30px; border-radius:20px; border:1px solid #eee; cursor:pointer;">
            <i class="fas ${item.icon}" style="font-size:2rem; color:${item.color};"></i>
            <h3 style="margin-top:15px;">${item.title}</h3>
            <p>${item.desc}</p>
        </div>`).join('');
}

function renderBattleNews() {
    const container = document.getElementById('battle-news-container');
    if (!container) return;
    container.innerHTML = BATTLE_NEWS_DATA.map(n => `
        <div style="background:white; padding:30px; border-radius:20px; box-shadow:0 10px 30px rgba(0,0,0,0.03);">
            <h3>${n.title}</h3>
            <p style="font-style:italic;">"${n.summary}"</p>
        </div>`).join('');
}
