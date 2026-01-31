// ==========================================
// İSTİKBAL PWA - PROJE VE ANALİZ BÖLÜMÜ (V9 - BASINDA BİZ EKLENDİ)
// ==========================================

// 1. DATA (MEVCUT VERİLER + YENİ TANITIM VERİLERİ)
const NEWS_DATA = [
    // --- 1919 ---
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
    // --- 1920 ---
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
        "content": "Venizelos, Trabzon'un Ermenilere verilmesini savunurken, Metropolit Hrisantos Pontus'tan vazgeçtiklerini beyan etmişti fakat yazılı bildirmekten kaçınmışlardı. Rize'nin doğusundaki Atina Limanı'nı istemekle yetindikleri ortaya çıktı.",
        "impact": 85,
        "lat": 41.0201,
        "lng": 40.5234,
        "location": "Rize / Atina Limanı"
    },
    // --- 1921 ---
    {
        "id": 4,
        "date": "14 Ocak 1921",
        "title": "İNÖNÜ ZAFERİ COŞKUYLA KUTLANIYOR",
        "category": "ZAFER",
        "content": "İnönü'de Türklerin elde ettiği zafer Anadolu'nun her tarafında sevinçle karşılandı. Mustafa Kemal Paşa orduyu tebrik etti. Trabzon Müdafaa-i Hukuk Cemiyeti batı ordusuna tebrik telgrafı çekti.",
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
        "content": "Yunan ordusu İnönü'de büyük zayiata uğratılarak 11 Ocak’ta çekilmek zorunda kaldı. Bursa'nın doğusuna çekilen düşman, Anadolu içlerinde ilk defa ciddi bir mukavemetle karşılaşmış oldu.",
        "impact": 92,
        "lat": 39.8119,
        "lng": 30.1565,
        "location": "İnönü"
    },
    {
        "id": 6,
        "date": "7 Nisan 1921",
        "title": "YUNAN KRALI'NIN TEHLİKELİ KUMARI",
        "category": "YORUM",
        "content": "Yunan Kralı, mevkiini korumak ve Venizelos'a karşı güç kazanmak için ordusunu II. İnönü'de yeni bir felakete sürükledi. 'İzmir ve Trakya silahımızın hakkıdır' diyerek halkını kandırıyor.",
        "impact": 75,
        "lat": 37.9838,
        "lng": 23.7275,
        "location": "Atina"
    },
    {
        "id": 7,
        "date": "12 Temmuz 1921",
        "title": "YUNAN TAARRUZU BAŞLADI",
        "category": "ASKERİ",
        "content": "Aylardır beklenen Yunan taarruzu, 10 Temmuz’da Bursa cephesinden dört fırkanın hücumuyla başladı.",
        "impact": 85,
        "lat": 40.1828,
        "lng": 29.0669,
        "location": "Bursa Cephesi"
    },
    {
        "id": 8,
        "date": "8 Ağustos 1921",
        "title": "30.000 ESİR YALANI",
        "category": "PROPAGANDA",
        "content": "Yunanlıların '30 bin esir aldık' iddiasının aslı ortaya çıktı: Esir diye gösterilenler, işgal edilen köylerden toplanan silahsız kadın ve çocuklardı. Bu yalan, İzmir Rumlarını bile utandırdı.",
        "impact": 88,
        "lat": 39.4242,
        "lng": 29.9833,
        "location": "Kütahya"
    },
    {
        "id": 9,
        "date": "28 Ağustos 1921",
        "title": "YUNAN ORDUSUNUN ACELECİ TAARRUZU",
        "category": "ANALİZ",
        "content": "Yunanlılar, Türk ordusunun toparlanmasına fırsat vermemek için Sakarya'da alelacele taarruza devam kararı aldılar. Türklerin gücünün tükendiğini sanarak büyük bir hata yapıyorlar.",
        "impact": 80,
        "lat": 39.6333,
        "lng": 32.1245,
        "location": "Sakarya Hattı"
    },
    {
        "id": 10,
        "date": "14 Eylül 1921",
        "title": "SAKARYA'DA HATTI MÜDAFAA BİTTİ",
        "category": "DÖNÜM NOKTASI",
        "content": "Sakarya Zaferi ile savunma devri kapandı, milli ordu taarruz vaziyetine geçti. Yunan zayiatı: 16.000 ölü, 30.000 yaralı. Hedef: Düşmanı denize dökmek.",
        "impact": 98,
        "lat": 39.5768,
        "lng": 32.1462,
        "location": "Sakarya"
    },
    {
        "id": 11,
        "date": "20 Eylül 1921",
        "title": "KONYA'NIN FEDAKARLIĞI",
        "category": "CEPHE GERİSİ",
        "content": "Konya halkı, 263 gönüllü süvariyi atları ve silahlarıyla donatarak cepheye uğurladı. Halkın bu desteği cephenin lojistik gücünü artırıyor.",
        "impact": 85,
        "lat": 37.8714,
        "lng": 32.4846,
        "location": "Konya"
    },
    // --- 1922 ---
    {
        "id": 12,
        "date": "16 Mayıs 1922",
        "title": "TRABZON'DA İŞGAL, LANETLENDİ",
        "category": "MİTİNG",
        "content": "İzmir'in işgalinin 3. yılında Trabzon Meydanı'nda binlerce kişi toplandı. Faik Ahmet Bey: 'Mehmetçiğin süngüsü ile zafere ulaşacağız ve bu yakındır' dedi. Miting dualarla sona erdi.",
        "impact": 95,
        "lat": 41.0027,
        "lng": 39.7168,
        "location": "Trabzon Meydanı"
    },
    {
        "id": 13,
        "date": "19 Mayıs 1922",
        "title": "ANKARA'DA İZMİR MİTİNGİ",
        "category": "MİTİNG",
        "content": "Başkent Ankara'da da İzmir'in işgal yıl dönümü münasebetiyle büyük bir miting düzenlendi. Milli heyecan dorukta.",
        "impact": 90,
        "lat": 39.9334,
        "lng": 32.8597,
        "location": "Ankara"
    },
    {
        "id": 14,
        "date": "30 Temmuz 1922",
        "title": "EDİRNE VE TRAKYA İÇİN YEMİN",
        "category": "PROTESTO",
        "content": "Trakya'nın işgalinin 3. yılında Anadolu'nun her yerinde mitingler yapıldı. 'Trakya Türkiye'ye kavuşana kadar mücadeleye devam' yeminleri edildi. Ankara'ya protesto telgrafları yağdı.",
        "impact": 88,
        "lat": 41.6771,
        "lng": 26.5557,
        "location": "Edirne (Gıyabi)"
    },
    {
        "id": 15,
        "date": "28 Ağustos 1922",
        "title": "BÜYÜK TAARRUZ BAŞLADI!",
        "category": "ZAFER",
        "content": "TBMM Reisi'nin 26 Ağustos tarihli tamimiyle taarruz resmen ilan edildi. Türk ordusu, vatanı kurtarmak için bütün cephelerde harekete geçti.",
        "impact": 100,
        "lat": 38.7569,
        "lng": 30.5386,
        "location": "Batı Cephesi"
    },
    {
        "id": 16,
        "date": "29 Ağustos 1922",
        "title": "AFYON İŞGAL EDİLDİ",
        "category": "ZAFER",
        "content": "Türk ordusu, Yunanlıların bir yılda tahkim ettiği siperleri süngü hücumuyla zapt etti. Afyonkarahisar kurtarıldı, Yunan hattı çöktü.",
        "impact": 99,
        "lat": 38.7569,
        "lng": 30.5386,
        "location": "Afyon"
    },
    {
        "id": 17,
        "date": "13 Ekim 1922",
        "title": "SULH KONFERANSI TEKLİFİ",
        "category": "DİPLOMASİ",
        "content": "Ankara Hükümeti, barış konferansının 20 Ekim'de toplanmasını teklif etti. İtalya Toronto'yu önerirken, adres İsviçre görünüyor.",
        "impact": 70,
        "lat": 39.9334,
        "lng": 32.8597,
        "location": "Ankara"
    },
    {
        "id": 18,
        "date": "30 Ekim 1922",
        "title": "LOZAN'A DAVET",
        "category": "DİPLOMASİ",
        "content": "İtilaf Devletleri, sulh konferansı için Lozan şehrini seçti ve Ankara Hükümeti'ni resmen davet etti.",
        "impact": 85,
        "lat": 46.5197,
        "lng": 6.6323,
        "location": "Lozan"
    },
    // --- 1923 ---
    {
        "id": 19,
        "date": "17 Ağustos 1923",
        "title": "BÜYÜK MÜBADELE: 400.000 MUHACİR",
        "category": "SİYASİ",
        "content": "Türkiye ile Yunanistan arasında nüfus mübadelesi kesinleşti. Gelecek 400.000 dindaşımız için Trabzon, İstanbul, Ankara ve Edirne başta olmak üzere 8 büyük iskan mıntıkası belirlendi.",
        "impact": 95,
        "lat": 46.5197,
        "lng": 6.6323,
        "location": "Lozan Anlaşması"
    }
];

const PROPAGANDA_DATA = [
    {
        topic: "ESİR SAYISI",
        date: "Ağustos 1921",
        context: "Kütahya-Eskişehir Muharebeleri",
        lie: { source: "Atina Basını", claim: "\"30.000 esir ve 100'den fazla top ele geçirdik. Türk ordusu imha edildi.\"", image: "YALAN" },
        truth: { source: "İstikbal Gazetesi", claim: "\"Esir diye lanse edilenler silahsız köylüler, kadınlar ve çocuklardır.\"", image: "GERÇEK" },
        analysis: "Sivil halk 'esir asker' gibi gösterilerek iç kamuoyu kandırıldı."
    },
    {
        topic: "STRATEJİK ÇEKİLME",
        date: "Temmuz 1921",
        context: "II. İnönü Savaşı",
        lie: { source: "İngiliz/Rum Basını", claim: "\"Yunan ordusu stratejik nedenlerle kendi isteğiyle çekilmiştir.\"", image: "MANİPÜLASYON" },
        truth: { source: "Cephe Raporları", claim: "\"Yunan ordusu İnönü'de bozulmuş, panik halinde Bursa'ya kaçmıştır.\"", image: "HAKİKAT" },
        analysis: "Kaçış eylemi, 'Taktiksel Çekilme' olarak sunularak moral çöküşü gizlendi."
    }
];

const ACADEMIC_DATA = [
    {
        id: "oksuz",
        name: "Prof. Dr. Hikmet ÖKSÜZ",
        title: "Tarihçi / Akademisyen",
        highlights: [
            "İstikbal Gazetesi, 100 yıl önceki hadiselerin en önemli birincil kaynağıdır.",
            "Trabzon, Doğu-Batı ilişkisinde tarihi bir kavşaktır; bu birikim bugünkü refleksleri de besler.",
            "Gazete, teslimiyetçiliğe karşı 'Burası Türk yurdudur' mesajını her gün haykıran bir manifesto gibidir."
        ],
        interview: [
            {
                q: "İstikbal Gazetesi bugün nasıl bir anlam ifade eder?",
                a: "Bugün, 100 yıl önce yaşanılmış olan hadiselerin en önemli kaynağı, birincil kaynağıdır. Toplumun geniş kesimlerini etkileyen, ulusal bilincin gelişimine destek olan, imparatorluğun çöküş döneminde Milli Mücadele'nin başlangıç ve gelişme safhalarında Trabzon ve çevresinde Türk toplumunun içine düşmüş olduğu o dağınıklığı gidermede önemli rol oynamıştır. İstikbal Gazetesi de Milli Mücadele'yi yerelde destekleyen en önemli organlardan birisidir."
            },
            {
                q: "Milli Mücadele rolünün bugüne yansıması nedir?",
                a: "Bugün bölge insanının bilinç seviyesinin yüksekliği, sezgi kabiliyetinin yüksekliği ve kolay tepki verme özelliği, reflekslerinin güçlü olması aslında bu birikimin bir tezahürüdür. Bilgi akışının hızlı olduğu ve rezervlerinin dolu olduğu yerlerde yaşayan insanlar, olup biteni daha erken kavrama kabiliyetine de sahip olurlar."
            }
        ]
    },
    {
        id: "baskaya",
        name: "Prof. Dr. Muzaffer BAŞKAYA",
        title: "Tarihçi / Akademisyen",
        highlights: [
            "İstikbal Gazetesi, sadece bir gazete değil, bir milletin haykırışıdır.",
            "Tarih masal değildir; dedelerimizin yaşadığı bu bedelleri öğrenmek zorundayız.",
            "Zor şartlarda bir şeyler başarmak daha anlamlıdır; İstikbal bunun en büyük kanıtıdır."
        ],
        interview: [
            {
                q: "Gazetenin önemi nedir?",
                a: "Dünyanın en şerefli tarihine sahip bir milletin, en zor anında gösterdiği reflekstir. Hem Ermeniler hem de Rumlar Trabzon'a göz dikmişlerdi. İşte Trabzon'un İttihatçı ya da Trabzonlu vatansever gençleri, vatansever kişilikleri kendi aralarında haklarını duyurabilmek için 'Trabzon Muhafaza-i Hukuk-ı Milliye Cemiyeti'ni kuruyorlar. Ve bu cemiyetin de yayın organı olarak İstikbal Gazetesi ortaya çıkıyor."
            },
            {
                q: "Milli bilinç ve gençlik üzerine etkisi?",
                a: "Gençler tarihi masal gibi görüyor. Ama İstikbal'i okuyunca 'Aaa bu gerçekmiş' diyorlar. Nasıl Çanakkale'ye gidince siperleri, mermileri görünce 'Aaa hakikaten burada bir savaş olmuş' diyoruz, İstikbal Gazetesi de onu somutlaştırıyor. Bu yüzden milli bilincin ortaya çıkmasında bu gibi gazeteler çok önemli bir araç."
            }
        ]
    },
    {
        id: "aksoy",
        name: "Doç. Dr. Volkan AKSOY",
        title: "Tarihçi / Akademisyen",
        highlights: [
            "Özgürlüğün, bağımsızlığın ve kurtuluşun Karadeniz'deki sesidir.",
            "Ankara ve İstanbul arasındaki o kritik hattın en önemli haber merkezi olmuştur.",
            "İstikbal, Türk'ün ölmezliğinin sesi olarak algılanmalıdır."
        ],
        interview: [
            {
                q: "İstikbal Gazetesi'nin yeri nedir?",
                a: "Milli Mücadele'nin, milli varlığın, Türk'ün ölmezliğinin sesi olarak algılıyorum ben İstikbal Gazetesi'ni. Nitekim bunu da duyurmuştur. Yani doğru bildiğini iktidarlara rağmen, o dönemin siyasi güçlerine rağmen de söyleyebilmiş bir gazetedir."
            },
            {
                q: "Bugünün gençliği için anlamı?",
                a: "O dönemle bugünü kıyaslamak zor. O yetişmiş kadro umutsuzluk içinde bile bir çıkış yolu buldu. İşte savaşı kazanan ruh dediği o ruhu yakaladığı için o dönem önderleri bunu milli bilinçle beraber milli mücadeleye yansıtacak ve başarıyı kazanacaktır. İstikbal, bu yetişmiş insan gücünün somutlaşmış halidir."
            }
        ]
    }
];

const STUDENT_DATA = [
    {
        id: 1,
        question: "İstikbal Gazetesi'ni okumak, olayları algılama şeklinizi nasıl etkiledi?",
        analysis: "Öğrencilerin %31.8'i 'Birincil Kaynak' vurgusu yapmıştır. Olayları 'masalsı' bir tarihten çıkarıp 'gerçek' bir zemine oturtmuşlardır.",
        quote: "Olanları tamamen birinci ağızdan dinlemek tarihin o masalsı yönünü yok ediyor ve işlerin ciddiyeti daha iyi anlaşılıyor.",
        student: "Katılımcı K4",
        stats: [{ "label": "Gerçekçilik/Somutluk", "count": 13 }, { "label": "Dönem Ruhunu Hissetme", "count": 11 }]
    },
    {
        id: 2,
        question: "Halkı bilinçlendirmedeki rolünü nasıl değerlendiriyorsunuz?",
        analysis: "Katılımcıların yarısı (%50) gazetenin temel işlevini 'Halkın gözünü açmak' olarak görmektedir.",
        quote: "İnsanları aydınlatarak neyle karşı karşıya olduklarını göstermiş, bir nevi uykudan uyandırmıştır.",
        student: "Katılımcı K12",
        stats: [{ "label": "Bilişsel Aydınlanma", "count": 22 }, { "label": "Örgütlenme", "count": 16 }]
    },
    {
        id: 3,
        question: "Hangi ifadeler sizi en çok duygulandırdı?",
        analysis: "Fedakarlık ve işgal haberleri en yüksek duygusal tepkiyi çekmiştir. 'Namus' ve 'Vatan' kavramları rol oynamıştır.",
        quote: "İşgal altındaki mezalimleri okurken hissettiğim öfke, vatan sevgimin büyüklüğünü anlamamı sağladı.",
        student: "Katılımcı K27",
        stats: [{ "label": "Hüzün / Acı", "count": 18 }, { "label": "Milli Gurur", "count": 14 }]
    },
    {
        id: 4,
        question: "Gazetenin milli birliği sağlama gücü nedir?",
        analysis: "%77.2 gibi büyük bir çoğunluk 'Tam ve Koşulsuz Birleştirici Güç' olarak tanımlamıştır.",
        quote: "Gazete sadece kağıt değil, o dönemde her eve giren bir komutandı. İnsanları aynı amaç etrafında toplamıştır.",
        student: "Katılımcı K31",
        stats: []
    },
    {
        id: 5,
        question: "Fedakarlık teması size ne hissettiriyor?",
        analysis: "Gençlerin %40.9'u bu durumu 'Vefa Borcu' ve 'Sorumluluk' olarak tanımlamıştır.",
        quote: null,
        student: null,
        stats: [{ "label": "Vefa Borcu", "count": 18 }, { "label": "Sorumluluk", "count": 12 }]
    },
    {
        id: 6,
        question: "Barutçu ve ekibinin cesareti hakkında ne düşünüyorsunuz?",
        analysis: "%68.2 oranında 'Hayranlık ve Örnek Alma' kodu tespit edilmiştir.",
        quote: "Sadece silahla değil, kalemle de vatan savunulacağını kanıtladılar. Ölüm tehdidine rağmen susmamaları ilham verici.",
        student: "Katılımcı K19",
        stats: []
    },
    {
        id: 7,
        question: "Bugün benzer bir durum olsa rolünüz ne olurdu?",
        analysis: "Gençlerin eylem planı hazırdır.",
        quote: "Vatansız bir Türk olmaktansa, toprağıma kanımı bağışlamış bir şehit olurum.",
        student: "Katılımcı K8",
        stats: [{ "label": "En Ön Safta", "count": "36.4%" }, { "label": "Bilinçlendirme", "count": "31.8%" }]
    },
    {
        id: 8,
        question: "İstikbal bugün neden yaşatılmalı?",
        analysis: "Milli hafızanın ve bağımsızlık karakterinin korunması için.",
        quote: "Tarihini bilmeyen bir millet, köksüz bir ağaç gibidir. İstikbal bizim kökümüzdür.",
        student: "Katılımcı K44",
        stats: []
    }
];

// YENİ: TANITIM / BASINDA BİZ VERİSİ
const PUBLICITY_DATA = [
    {
        type: "NEWS",
        source: "Günebakış Gazetesi",
        date: "2024",
        title: "Trabzon’da 12. Sınıf Öğrencilerine Tarihsel Empati Kazandırmayı Amaçlayan Proje Tanıtıldı",
        desc: "Projemizin okullarda uygulanması ve 12. sınıf öğrencileri üzerindeki etkilerini konu alan detaylı haber.",
        link: "https://www.gunebakis.com.tr/video/27002852/trabzonda-12-sinif-ogrencilerine-tarihsel-empati-kazandirmayi-amaclayan-proje-tanitildi",
        icon: "fas fa-newspaper",
        color: "#1e3a8a"
    },
    {
        type: "RADIO",
        source: "TRT Trabzon Radyosu",
        date: "19.12.2025",
        title: "“Genç Yaşam” Programı",
        desc: "TRT Trabzon Radyosu'nun sevilen programı 'Genç Yaşam'a konuk olduk. İstikbal Gazetesi'nin önemi ve dijitalleşme sürecimiz hakkında kapsamlı bir söyleşi gerçekleştirdik.",
        link: "#",
        audio: "./assets/audio/genc_yasam.mp3",
        icon: "fas fa-microphone-alt",
        color: "#b91c1c"
    }
];

// YENİ: VEFA KÖŞESİ (LOYALTY) VERİSİ
const LOYALTY_DATA = [
    {
        name: "Ahmet Yılmaz",
        school: "Trabzon Lisesi",
        message: "Milli Mücadele'nin bu kadar zor şartlarda kazanıldığını bu gazeteyi okuyunca daha iyi anladım. Faik Ahmet Bey'e minnettarız.",
        date: "30.01.2026",
        avatar: "A"
    },
    {
        name: "Zeynep Demir",
        school: "Kanuni Anadolu Lisesi",
        message: "Tarih derslerinde sadece olayları ezberliyorduk, burada ise o günkü insanların duygularını hissettim. Bu proje harika!",
        date: "29.01.2026",
        avatar: "Z"
    },
    {
        name: "Mehmet Öztürk",
        school: "Yavuz Sultan Selim AL",
        message: "Vatan savunmasının sadece cephede değil, kalemle de yapıldığının en büyük kanıtı İstikbal Gazetesi'dir. Ruhları şad olsun.",
        date: "28.01.2026",
        avatar: "M"
    }
];

const EMPATHY_QUESTIONS = [
    { id: 1, text: "Geçmişte yaşamış insanların ne düşündükleri anlayabilirim.", type: "Bilişsel" },
    { id: 2, text: "Tarihte toplumlara liderlik etmiş bir kahramanı model alırım.", type: "Bilişsel" },
    { id: 3, text: "İnsanlığı olumsuz etkileyen olayları dinlerken üzülürüm.", type: "Duyuşsal" },
    { id: 4, text: "Kendimi tarihte yaşamış bir çocuğun yerine koyabilirim.", type: "Bilişsel" },
    { id: 5, text: "Eski dönemlere ait gördüğüm tarihi nesneler beni heyecanlandırır.", type: "Duyuşsal" },
    { id: 6, text: "Geçmişte yaşamış güçlü karakterler gibi davrandığım olur.", type: "Bilişsel" },
    { id: 7, text: "Tarihe yön vermiş kişilerin hayat hikâyelerini dinlerken heyecanlanırım.", type: "Duyuşsal" },
    { id: 8, text: "Geçmişte yaşanılan olumsuzlukların çözümü için o döneme uygun yeni fikirler üretebilirim.", type: "Bilişsel" },
    { id: 9, text: "Tarihi nesnelerin ait olduğu dönemdeki önemini hissederim.", type: "Duyuşsal" },
    { id: 10, text: "Kritik bir durumda tarihe yön vermiş kişiler gibi karar verebilirim.", type: "Bilişsel" },
    { id: 11, text: "Tarihi filmleri izlerken ordaymışım gibi olur.", type: "Duyuşsal" },
    { id: 12, text: "Geçmişteki olayların sonuçlarını tahmin edebilirim.", type: "Bilişsel" }
];

// ... (PAGE TEMPLATES update below)

// ...



// 2. PAGE TEMPLATES
const PAGE_TEMPLATES = {
    // ... DİĞERLERİ AYNEN ...
    about: `
    <div style="max-width:1000px; margin:2rem auto; font-family:'Inter',sans-serif; padding:1rem;">
        
        <!-- ÜST BANNER -->
        <div style="text-align:center; padding:5rem 2rem; background:linear-gradient(rgba(15, 23, 42, 0.8), rgba(15, 23, 42, 0.9)), url('./assets/images/header-bg.png'); background-size:cover; background-position:center; color:white; border-radius:20px; box-shadow:0 10px 40px rgba(0,0,0,0.3); position:relative; overflow:hidden;">
            <div style="position:relative; z-index:10;">
                <div style="font-family:'Times New Roman',serif; font-style:italic; font-size:1.3rem; opacity:0.9; margin-bottom:0.5rem; letter-spacing:1px; color:#94a3b8;">Milli Mücadele'nin Karadeniz'deki Sesi</div>
                <h1 style="font-size:3.5rem; font-weight:900; margin-bottom:1.5rem; line-height:1.2; text-shadow:0 4px 10px rgba(0,0,0,0.5);">İSTİKBAL GAZETESİ<br><span style="color:#cbd5e1; font-size:2.5rem;">DİJİTAL ARŞİV PROJESİ</span></h1>
                <div style="width:120px; height:6px; background:#b91c1c; margin:0 auto 2rem auto; border-radius:3px;"></div>
                <p style="font-size:1.3rem; margin-bottom:2rem; max-width:800px; margin:0 auto; line-height:1.6; color:#e2e8f0; text-shadow:0 2px 4px rgba(0,0,0,0.5);">
                    Bu proje, 1918-1925 yılları arasında Trabzon'da yayınlanan ve Milli Mücadele'nin en önemli basın organlarından biri olan İstikbal Gazetesi'ni modern teknolojilerle genç kuşaklara aktarmayı hedeflemektedir.
                </p>
                 <div style="margin-top:2rem; display:inline-block; padding:10px 25px; background:rgba(255,255,255,0.1); border:1px solid rgba(255,255,255,0.2); border-radius:50px; font-size:0.9rem; backdrop-filter:blur(5px);">
                    <i class="fas fa-award" style="color:#fcd34d; margin-right:8px;"></i> TÜBİTAK 2204 Projesi
                </div>
            </div>
        </div>

        <!-- TANITIM VİDEOSU -->
        <div style="margin-top:4rem; background:white; padding:1.5rem; border-radius:24px; box-shadow:0 20px 50px rgba(0,0,0,0.1); border:1px solid #e2e8f0; overflow:hidden;">
            <div style="margin-bottom:1.5rem; display:flex; align-items:center; gap:12px; padding:0 1rem;">
                <div style="width:12px; height:12px; background:#ef4444; border-radius:50%; box-shadow:0 0 10px #ef4444;"></div>
                <h2 style="font-size:1.5rem; font-weight:900; color:#0f172a; margin:0;">Proje Tanıtım Videosu</h2>
            </div>
            <div style="position:relative; padding-bottom:56.25%; height:0; border-radius:15px; overflow:hidden; background:#000; box-shadow:0 10px 30px rgba(0,0,0,0.3);">
                <iframe 
                    style="position:absolute; top:0; left:0; width:100%; height:100%; border:none;" 
                    src="https://www.youtube.com/embed/X2hoOcWwzSE" 
                    title="İstikbal Gazetesi Tanıtım Videosu" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen>
                </iframe>
            </div>
            <div style="margin-top:1rem; padding:10px; background:#fff7ed; border-radius:10px; border:1px solid #ffedd5; font-size:0.85rem; color:#9a3412;">
                <i class="fas fa-info-circle"></i> <strong>Not:</strong> Videoyu YouTube'a yükleyip ID'sini koda eklediğinizde burada otomatik görünecektir. Bu sayede uygulamanız çok daha hızlı açılır.
            </div>
            <p style="margin-top:1.5rem; color:#64748b; font-size:1rem; line-height:1.6; padding:0 1rem;">
                <strong>Savaşın İçinde Doğan Bir Gazete: İstikbal'in Hikayesi</strong> - Projemizin genel kapsamını, hedeflerini ve Milli Mücadele dönemindeki İstikbal Gazetesi'nin önemini anlatan tanıtım filmimiz.
            </p>
        </div>

        <!-- MİSYON VE VİZYON PANELİ -->
        <div style="display:grid; md:grid-cols-2; gap:40px; margin-top:4rem;">
            
                <h2 style="color:#1e3a8a; font-size:2rem; font-weight:900; margin-bottom:1.5rem; display:flex; align-items:center; gap:10px;">
                    <i class="fas fa-history" style="color:#b91c1c; margin-right:15px;"></i> Projenin Amacı
                </h2>
                <p style="font-size:1.1rem; line-height:1.8; color:#334155; text-align:justify;">
                    Tarih sadece ders kitaplarında kalan bir anlatı değildir. İstikbal Gazetesi, Mondros Mütarekesi'nden Cumhuriyet'in ilanına kadar geçen o kritik süreçte, halkın direnişini, Pontus çetelerine karşı verilen mücadeleyi ve Ankara Hükümeti'ne olan inancı belgeleyen canlı bir tanıktır. Amacımız, bu <strong>"birincil kaynağı"</strong> deşifre ederek, tarihsel empatiyi ve tarih bilincini artırmaktır.
                </p>
            </div>

            <div style="background:white; padding:2rem; border-radius:20px; box-shadow:0 10px 30px rgba(0,0,0,0.05); border-left:6px solid #b91c1c;">
                <h3 style="font-size:1.5rem; font-weight:bold; margin-bottom:1.5rem; color:#1e293b;">Neler Yapıldı?</h3>
                <ul style="list-style:none; padding:0;">
                    <li style="display:flex; align-items:start; gap:15px; margin-bottom:15px;">
                        <div style="min-width:40px; height:40px; background:#eff6ff; border-radius:50%; display:flex; align-items:center; justify-content:center; color:#1e40af;"><i class="fas fa-newspaper"></i></div>
                        <div>
                            <strong style="display:block; color:#1e293b; font-size:1.1rem;">Dijital Arşiv</strong>
                            <span style="color:#64748b; font-size:0.95rem;">Orijinal haber metinleri latinize edilerek günümüz Türkçesine kazandırıldı.</span>
                        </div>
                    </li>
                    <li style="display:flex; align-items:start; gap:15px; margin-bottom:15px;">
                        <div style="min-width:40px; height:40px; background:#fef2f2; border-radius:50%; display:flex; align-items:center; justify-content:center; color:#b91c1c;"><i class="fas fa-skull-crossbones"></i></div>
                        <div>
                            <strong style="display:block; color:#1e293b; font-size:1.1rem;">Propaganda Analizi</strong>
                            <span style="color:#64748b; font-size:0.95rem;">Düşman basınının yalan haberleri ile İstikbal'in gerçekleri "Basın Cephesi" modülünde karşılaştırıldı.</span>
                        </div>
                    </li>
                    <li style="display:flex; align-items:start; gap:15px;">
                        <div style="min-width:40px; height:40px; background:#f0fdf4; border-radius:50%; display:flex; align-items:center; justify-content:center; color:#15803d;"><i class="fas fa-users"></i></div>
                        <div>
                            <strong style="display:block; color:#1e293b; font-size:1.1rem;">Akademik Derinlik</strong>
                            <span style="color:#64748b; font-size:0.95rem;">Alanında uzman tarihçilerle yapılan mülakatlarla dönemin analzi yapıldı.</span>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        
        <!-- PROJE MATERYALLERİ -->
        <div style="margin-top:4rem;">
            <div style="text-align:center; margin-bottom:1rem;">
                <div style="display:inline-block; padding:5px 15px; background:#f1f5f9; border-radius:20px; color:#64748b; font-weight:bold; font-size:0.9rem; margin-bottom:10px;">KAYNAKLAR</div>
                <h2 style="font-size:2rem; font-weight:900; color:#1e293b;">Proje Materyalleri</h2>
            </div>
            
            <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap:20px; margin-top:2rem;">
                <!-- Sunum -->
                <a href="./assets/docs/sunu.pdf" target="_blank" style="text-decoration:none;">
                    <div style="background:white; padding:20px; border-radius:15px; border:1px solid #e2e8f0; transition:all 0.3s; text-align:center; height:100%; display:flex; flex-direction:column; align-items:center; justify-content:center; hover:shadow-lg; hover:border-blue-500;">
                        <div style="font-size:2.5rem; color:#dc2626; margin-bottom:15px;"><i class="fas fa-file-pdf"></i></div>
                        <h3 style="font-size:1.1rem; font-weight:bold; color:#1e293b; margin-bottom:5px;">Proje Sunumu</h3>
                        <p style="color:#64748b; font-size:0.9rem;">TÜBİTAK 2204 Stant Sunumu</p>
                    </div>
                </a>
                
                <!-- Zafer Kitapçığı -->
                <a href="./assets/docs/zafer_lozan.pdf" target="_blank" style="text-decoration:none;">
                     <div style="background:white; padding:20px; border-radius:15px; border:1px solid #e2e8f0; transition:all 0.3s; text-align:center; height:100%; display:flex; flex-direction:column; align-items:center; justify-content:center;">
                        <div style="font-size:2.5rem; color:#dc2626; margin-bottom:15px;"><i class="fas fa-file-pdf"></i></div>
                        <h3 style="font-size:1.1rem; font-weight:bold; color:#1e293b; margin-bottom:5px;">İstikbal'in Zaferi</h3>
                        <p style="color:#64748b; font-size:0.9rem;">Trabzon'dan Lozan'a Bir Soluk</p>
                    </div>
                </a>

                <!-- Etki Analizi -->
                <a href="./assets/docs/etki_yorum.docx" target="_blank" style="text-decoration:none;">
                     <div style="background:white; padding:20px; border-radius:15px; border:1px solid #e2e8f0; transition:all 0.3s; text-align:center; height:100%; display:flex; flex-direction:column; align-items:center; justify-content:center;">
                        <div style="font-size:2.5rem; color:#2563eb; margin-bottom:15px;"><i class="fas fa-file-word"></i></div>
                        <h3 style="font-size:1.1rem; font-weight:bold; color:#1e293b; margin-bottom:5px;">Haberin Etkisi</h3>
                        <p style="color:#64748b; font-size:0.9rem;">Analiz ve Yorumlar</p>
                    </div>
                </a>
            </div>
        </div>

        <!-- ZORUNLU YASAL UYARI -->
        <div style="margin-top:4rem; text-align:center; padding:2rem; background:#f8fafc; border-top:1px solid #e2e8f0; color:#64748b; font-size:0.9rem;">
             <p style="font-weight:bold; color:#334155;">Bu proje, 2204 Ortaöğretim Öğrencileri Araştırma Projeleri Yarışması kapsamında hazırlanmıştır.</p>
             <p style="margin-top:5px;">&copy; 2024-2025 Eğitim Öğretim Yılı</p>
        </div>
    </div>`,

    // YENİ TEMPLATE: TANITIM
    publicity: `
    <div style="max-width:900px; margin:2rem auto; padding:1rem; font-family:'Inter',sans-serif;">
         <header style="text-align:center; margin-bottom:3rem;">
            <div style="background:#0f172a; color:#fff; display:inline-block; padding:5px 20px; font-family:'Times New Roman',serif; font-size:1rem; margin-bottom:1rem; letter-spacing:1px; border-radius:30px;">BASIN YANSIMALARI</div>
            <h1 style="font-size:2.5rem; font-weight:900; color:#1a1a1a; margin-bottom:1rem; line-height:1.2;">Projeyi Kamuoyuna Tanıtma Çalışmaları</h1>
            <p style="color:#666; font-size:1.1rem; max-width:700px; margin:0 auto;">Projemizin ulusal ve yerel basındaki yansımaları.</p>
        </header>
        <div id="publicity-container" style="display:flex; flex-direction:column; gap:30px;"></div>
    </div>`,

    // YENİ TEMPLATE: VEFA KÖŞESİ
    loyalty: `
    <div style="max-width:1000px; margin:2rem auto; padding:1rem; font-family:'Inter',sans-serif;">
        <header style="text-align:center; margin-bottom:4rem;">
            <div style="background:#b45309; color:#fff; display:inline-block; padding:5px 20px; font-family:'Times New Roman',serif; font-size:1rem; margin-bottom:1rem; letter-spacing:1px; border-radius:30px;">GENÇLERDEN İSTİKBAL'E MESAJ</div>
            <h1 style="font-size:3rem; font-weight:900; color:#1a1a1a; margin-bottom:1rem;">Vefa Köşesi</h1>
            <p style="color:#666; font-size:1.2rem; max-width:700px; margin:0 auto;">Gençliğin, Milli Mücadele kahramanlarına ve İstikbal Gazetesi'ne bıraktığı duygu dolu mesajlar.</p>
        </header>

        <div style="display:grid; md:grid-cols-2; gap:40px;">
            <!-- MESAJ FORMU -->
            <div style="background:white; padding:30px; border-radius:20px; box-shadow:0 10px 40px rgba(0,0,0,0.05); height:fit-content; position:sticky; top:20px;">
                <h3 style="font-size:1.5rem; font-weight:bold; margin-bottom:20px; color:#1e293b; display:flex; align-items:center; gap:10px;">
                    <i class="fas fa-pen-fancy" style="color:#b45309;"></i> Bir Mesaj Bırak
                </h3>
                <form id="loyalty-form" onsubmit="event.preventDefault(); window.addMessage();">
                    <div style="margin-bottom:15px;">
                        <label style="display:block; font-size:0.9rem; font-weight:bold; color:#475569; margin-bottom:5px;">Adınız Soyadınız</label>
                        <input type="text" id="l-name" required style="width:100%; padding:10px; border:1px solid #cbd5e1; border-radius:8px; font-family:'Inter',sans-serif;">
                    </div>
                    <div style="margin-bottom:15px;">
                        <label style="display:block; font-size:0.9rem; font-weight:bold; color:#475569; margin-bottom:5px;">Okulunuz</label>
                        <input type="text" id="l-school" style="width:100%; padding:10px; border:1px solid #cbd5e1; border-radius:8px; font-family:'Inter',sans-serif;">
                    </div>
                    <div style="margin-bottom:20px;">
                        <label style="display:block; font-size:0.9rem; font-weight:bold; color:#475569; margin-bottom:5px;">Mesajınız</label>
                        <textarea id="l-msg" required rows="4" style="width:100%; padding:10px; border:1px solid #cbd5e1; border-radius:8px; font-family:'Inter',sans-serif; resize:vertical;"></textarea>
                    </div>
                    <button type="submit" style="width:100%; padding:12px; background:#b45309; color:white; border:none; border-radius:10px; font-weight:bold; cursor:pointer; font-size:1rem; transition:background 0.3s;">
                        Mesajı Gönder <i class="fas fa-paper-plane" style="margin-left:5px;"></i>
                    </button>
                </form>
            </div>

            <!-- MESAJ LİSTESİ -->
            <div id="loyalty-list" style="display:flex; flex-direction:column; gap:20px;">
                <!-- Mesajlar JS ile buraya gelecek -->
            </div>
        </div>
    </div>`,

    // GÜNCELLENMİŞ STUDENT TEMPLATE
    student: `
    <div style="max-width:1100px; margin:2rem auto; padding:1rem; font-family:'Inter',sans-serif;">
         <header style="text-align:center; margin-bottom:3rem;">
            <div style="background:#dc2626; color:#fff; display:inline-block; padding:5px 20px; font-family:'Times New Roman',serif; font-size:1rem; margin-bottom:1rem; letter-spacing:1px; border-radius:30px;">GENÇLİK BAKIŞI</div>
            <h1 style="font-size:3rem; font-weight:900; color:#1a1a1a; margin-bottom:1rem;">Öğrenci Görüşleri</h1>
            <p style="color:#666; font-size:1.2rem; max-width:700px; margin:0 auto;">Lise öğrencilerinin İstikbal Gazetesi'ni okuduktan sonraki analizleri ve tarihsel empati süreçleri (N=44).</p>
        </header>

        <div id="student-grid" style="display:grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap:25px;"></div>
    </div>
    `,

    newspaper: `
    <div style="max-width:1000px; margin:0 auto; padding:20px; font-family:'Times New Roman', serif; background-color:#fffaf0; border:1px solid #ccc;">
        <header style="text-align:center; border-bottom:4px double black; padding-bottom:20px; margin-bottom:20px;">
            <div style="display:flex; justify-content:space-between; font-size:0.8rem; font-weight:bold; border-bottom:1px solid black; padding-bottom:5px; margin-bottom:10px;">
                <span>Sayı: 1</span>
                <span>Trabzon</span>
                <span>10 Kânûn-ı Evvel 1334</span>
            </div>
            <h1 style="font-size:4rem; margin:0; line-height:1; color:#1a1a1a;">İSTİKBAL</h1>
            <p style="font-style:italic; margin-top:5px;">"Milletin Hukukunu Müdafaa Eden Siyasi Gazetedir"</p>
        </header>
        <div style="display:grid; grid-template-columns: 2fr 1fr; gap:20px;">
            <div>
                 <h2 style="font-size:2rem; font-weight:bold; line-height:1.2; margin-bottom:15px;">"Hattı Müdafaa Yoktur..."</h2>
                 <p style="text-align:justify; font-size:1.1rem; line-height:1.6;">
                    <span style="float:left; font-size:3.5rem; line-height:0.8; padding-right:10px; font-weight:bold;">B</span>ugün İstikbal hayat-ı matbuatına atılıyor. Trabzon'un bu gür sesi, vatanın en karanlık günlerinde hakikati haykırmak için doğmuştur. Bizim yolumuz, milletin hukukunu müdafaa, istiklalini muhafaza yoludur.
                 </p>
            </div>
            <div style="background:#f3f4f6; padding:15px; border-top:4px solid #b91c1c;">
                <h3 style="color:#b91c1c; font-weight:bold; margin-bottom:10px;">SAKARYA RAPORU</h3>
                <p style="font-size:0.9rem;"><strong>Yunan Zayiatı:</strong> 16.000 Ölü.</p>
                <p style="font-size:0.9rem; margin-top:5px;"><strong>Durum:</strong> Milli Ordu Taarruzda.</p>
            </div>
        </div>
    </div>`,

    archive: `
    <div style="max-width:1100px; margin:2rem auto;">
         <h2 style="text-align:center; serif; font-size:2rem; margin-bottom:2rem;">Haber Arşivi</h2>
         <div style="display:flex; justify-content:center; gap:10px; margin-bottom:2rem; flex-wrap:wrap;">
            <button class="filter-btn active" onclick="window.filterArchive('ALL')">Tümü</button>
            <button class="filter-btn" onclick="window.filterArchive('ZAFER')">Zafer</button>
            <button class="filter-btn" onclick="window.filterArchive('MİTİNG')">Mitingler</button>
            <button class="filter-btn" onclick="window.filterArchive('DİPLOMASİ')">Diplomasi</button>
         </div>
         <div id="arc-list"></div>
    </div>`,

    propaganda: `
    <div style="max-width:1100px; margin:2rem auto; padding:1rem;">
        <h1 style="text-align:center; font-size:2.5rem; margin-bottom:2rem;">Basın Cephesi</h1>
        <div id="propaganda-container"></div>
    </div>`,

    academic: `
    <div style="max-width:1200px; margin:2rem auto; padding:1rem; font-family:'Inter',sans-serif;">
        <header style="text-align:center; padding:4rem 2rem; background:linear-gradient(rgba(30, 58, 138, 0.9), rgba(30, 58, 138, 0.8)), url('./assets/images/pen-bg.png'); background-size:cover; background-position:center; color:white; border-radius:20px; box-shadow:0 10px 40px rgba(0,0,0,0.2); margin-bottom:4rem; position:relative;">
            <div style="display:inline-block; padding:5px 20px; background:rgba(255,255,255,0.1); border:1px solid rgba(255,255,255,0.2); backdrop-filter:blur(5px); font-family:'Times New Roman',serif; font-size:1rem; margin-bottom:1.5rem; letter-spacing:1px; border-radius:30px;">BİLİMSEL YAKLAŞIM</div>
            <h1 style="font-size:3.5rem; font-weight:900; margin-bottom:1rem; text-shadow:0 4px 10px rgba(0,0,0,0.3);">AKADEMİK BAKIŞ</h1>
            <p style="font-size:1.3rem; max-width:800px; margin:0 auto; color:#e2e8f0; line-height:1.6;">Tarihçilerle İstikbal Gazetesi'nin dünü ve bugünü üzerine sohbetler.</p>
        </header> 
        <div id="academic-grid" style="display:grid; grid-template-columns: repeat(auto-fit, minmax(350px, 1fr)); gap:30px;"></div>
        <div id="interview-modal" style="display:none; position:fixed; top:0; left:0; width:100%; height:100%; background:rgba(0,0,0,0.9); z-index:1000; overflow-y:auto; padding:20px;">
            <div style="max-width:900px; margin:50px auto; background:white; border-radius:20px; padding:40px; position:relative;">
                <button onclick="closeModal()" style="position:absolute; top:20px; right:20px; font-size:2rem; background:none; border:none; cursor:pointer;">&times;</button>
                <div id="modal-content"></div>
            </div>
        </div>
    </div>`,

    sentiment: `
    <div style="max-width:1200px; margin:2rem auto; padding:1rem; font-family:'Inter',sans-serif;">
        <!-- Header -->
        <header style="text-align:center; margin-bottom:3rem;">
            <div style="display:inline-block; padding:5px 20px; background:#fee2e2; color:#b91c1c; border-radius:30px; font-weight:bold; font-size:0.9rem; margin-bottom:1rem; text-transform:uppercase; letter-spacing:1px;">İstikbal Gazetesi Arşivi Üzerine</div>
            <h1 style="font-size:3rem; font-weight:900; color:#1e293b; margin-bottom:1rem;">Milli Mücadele'nin Duygu Haritası</h1>
            <p style="font-size:1.2rem; color:#64748b; max-width:800px; margin:0 auto; line-height:1.6;">1920-1923 yılları arasında yayınlanan haberlerin analiziyle oluşturulmuş; halkın, ordunun ve aydınların psikolojik zafer yolculuğu.</p>
        </header>

        <!-- Circular Stats Chart Section -->
        <section style="margin-top:4rem;">
            <div style="background:white; border-radius:40px; padding:3rem; border:1px solid #e2e8f0; box-shadow:0 20px 50px rgba(0,0,0,0.1);">
                <div style="display:flex; align-items:center; gap:15px; margin-bottom:2.5rem; border-bottom:1px solid #f1f5f9; padding-bottom:1rem;">
                    <i class="fas fa-chart-pie" style="font-size:1.5rem; color:#dc2626;"></i>
                    <h2 style="font-size:1.8rem; font-weight:bold; color:#1e293b; margin:0;">Duygu Dağılım Analizi</h2>
                </div>

                <div style="display:grid; grid-template-columns: 2fr 1fr; gap:4rem;">
                    <!-- Donut Charts Container -->
                    <div id="charts-container" style="display:grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap:30px;">
                        <!-- Grafikler JS ile buraya eklenecek -->
                    </div>

                    <!-- Analysis Box -->
                    <div style="background:#f8fafc; border-radius:25px; padding:2rem; border:1px solid #e2e8f0;">
                        <h3 style="font-size:1.3rem; font-weight:bold; margin-bottom:1.5rem; color:#1e293b; display:flex; align-items:center; gap:10px;">
                            <i class="fas fa-microscope" style="color:#dc2626;"></i> Psikolojik Veriler
                        </h3>
                        <div style="display:flex; flex-direction:column; gap:20px;">
                            <div style="display:flex; gap:15px;">
                                <div style="width:4px; background:#dc2626; border-radius:2px;"></div>
                                <div>
                                    <p style="font-weight:bold; color:#1e293b; margin-bottom:3px;">Milli Ruh Zirvesi</p>
                                    <p style="font-size:0.9rem; color:#64748b; line-height:1.4;">Sakarya Zaferi ile motivasyon %92'nin üzerine çıkmıştır.</p>
                                </div>
                            </div>
                            <div style="display:flex; gap:15px;">
                                <div style="width:4px; background:#2563eb; border-radius:2px;"></div>
                                <div>
                                    <p style="font-weight:bold; color:#1e293b; margin-bottom:3px;">Kırılma Noktası</p>
                                    <p style="font-size:0.9rem; color:#64748b; line-height:1.4;">15 Mayıs İzmir İşgali, kederin direnişe dönüştüğü andır.</p>
                                </div>
                            </div>
                            <div style="display:flex; gap:15px;">
                                <div style="width:4px; background:#d97706; border-radius:2px;"></div>
                                <div>
                                    <p style="font-weight:bold; color:#1e293b; margin-bottom:3px;">Siyasi Uyanış</p>
                                    <p style="font-size:0.9rem; color:#64748b; line-height:1.4;">Lozan öncesi halkın diplomasideki bilinç oranı %85'tir.</p>
                                </div>
                            </div>
                        </div>
                        <div style="margin-top:2rem; padding-top:1.5rem; border-top:1px solid #e2e8f0; text-align:center;">
                            <div style="font-size:2rem; font-weight:900; color:#dc2626; line-height:1;">TAM BAĞIMSIZLIK</div>
                            <div style="font-size:0.8rem; font-weight:bold; color:#94a3b8; letter-spacing:2px; margin-top:5px;">KOLEKTİF HEDEF ANALİZİ</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Process Timeline -->
        <div style="margin-top:4rem; background:#0f172a; color:white; border-radius:40px; padding:4rem; box-shadow:0 25px 50px rgba(0,0,0,0.5); position:relative; overflow:hidden;">
            <div style="position:absolute; top:-100px; right:-100px; width:400px; height:400px; background:rgba(220, 38, 38, 0.1); border-radius:50%; filter:blur(100px); pointer-events:none;"></div>
            <h3 style="font-size:1.8rem; font-weight:bold; margin-bottom:3rem; display:flex; align-items:center; gap:15px; position:relative; z-index:10;">
                <i class="fas fa-stream" style="color:#ef4444;"></i> Milli Mücadele Duygu Süreci
            </h3>
            
            <div id="timeline-container" style="position:relative; z-index:10; display:flex; justify-content:space-between; gap:40px; flex-wrap:wrap;">
                <!-- Timeline JS ile buraya eklenecek -->
            </div>
        </div>

        <!-- Quote Section -->
        <footer style="margin-top:4rem; text-align:center; padding:3rem; border-top:1px solid #e2e8f0;">
            <p style="font-size:1.4rem; font-style:italic; color:#64748b; font-family:'Times New Roman',serif;">"Mehmetçiğin süngüsü ile zafere ulaşacağını ve bunun yakın olduğunu söylemiştir..."</p>
            <span style="display:block; margin-top:1rem; font-weight:bold; color:#94a3b8; font-size:0.9rem; letter-spacing:2px;">— İSTİKBAL GAZETESİ, 16 MAYIS 1922</span>
        </footer>
    </div>`,

    timeline: `<div style="padding:2rem;"><div id="map-area" style="height:600px; border-radius:15px;"></div></div>`,

    empathy: `
    <div style="max-width:900px; margin:2rem auto; padding:1rem; font-family:'Inter',sans-serif;">
        <header style="text-align:center; margin-bottom:3rem;">
            <div style="background:#4f46e5; color:#fff; display:inline-block; padding:5px 20px; font-family:'Times New Roman',serif; font-size:1rem; margin-bottom:1rem; letter-spacing:1px; border-radius:30px;">BİLİMSEL ÖLÇEK</div>
            <h1 style="font-size:3rem; font-weight:900; color:#1a1a1a; margin-bottom:1rem;">Tarihsel Empati Ölçelim</h1>
            <p style="color:#666; font-size:1.2rem; max-width:700px; margin:0 auto;">Geçmişle ne kadar bağ kurabiliyorsunuz? 12 soruluk bu testle tarihsel empati düzeyinizi keşfedin.</p>
        </header>

        <div id="empathy-container" style="background:white; padding:40px; border-radius:20px; box-shadow:0 10px 40px rgba(0,0,0,0.05);">
             <div class="info-box" style="background:#e0e7ff; padding:20px; border-radius:15px; margin-bottom:30px; border-left:5px solid #4f46e5; color:#3730a3;">
                <i class="fas fa-info-circle"></i> <strong>Bilgilendirme:</strong> Aşağıdaki ifadeleri okuyup size en uygun seçeneği işaretleyiniz. (1: Hiçbir zaman - 5: Her zaman)
             </div>

             <form id="empathy-form" onsubmit="event.preventDefault(); window.calculateEmpathy();">
                <div id="questions-list" style="display:grid; gap:25px;"></div>
                
                <button type="submit" style="margin-top:40px; width:100%; padding:15px; background:#4f46e5; color:white; border:none; border-radius:12px; font-size:1.2rem; font-weight:bold; cursor:pointer; transition:all 0.3s;">
                    Sonucumu Hesapla <i class="fas fa-calculator" style="margin-left:10px;"></i>
                </button>
             </form>

             <!-- SONUÇ EKRANI (Başlangıçta gizli) -->
             <div id="empathy-result" style="display:none; margin-top:40px; padding-top:40px; border-top:2px dashed #e5e7eb; animation: fadeIn 0.8s;">
                <div style="text-align:center; margin-bottom:30px;">
                    <h2 style="font-size:2rem; font-weight:bold; color:#1e293b;">Empati Skorunuz</h2>
                    <div style="font-size:4rem; font-weight:900; color:#4f46e5;" id="total-score">0/60</div>
                    <p id="score-comment" style="font-size:1.2rem; color:#6b7280; font-style:italic;">Analyzing...</p>
                </div>

                <div style="display:grid; md:grid-cols-2; gap:20px; margin-bottom:30px;">
                    <div style="background:#f0fdf4; padding:20px; border-radius:15px; text-align:center;">
                        <h4 style="color:#166534; font-weight:bold; margin-bottom:5px;">Bilişsel Boyut (Zihin)</h4>
                        <div id="cognitive-score" style="font-size:2rem; font-weight:bold; color:#15803d;">0</div>
                    </div>
                    <div style="background:#fef2f2; padding:20px; border-radius:15px; text-align:center;">
                        <h4 style="color:#991b1b; font-weight:bold; margin-bottom:5px;">Duyuşsal Boyut (Kalp)</h4>
                        <div id="affective-score" style="font-size:2rem; font-weight:bold; color:#b91c1c;">0</div>
                    </div>
                </div>

                <div style="background:#f8fafc; padding:20px; border-radius:15px;">
                    <h4 style="margin-bottom:15px; font-weight:bold; color:#475569;">Diğer Ziyaretçilerle Karşılaştırma</h4>
                    <div style="height:20px; background:#e2e8f0; border-radius:10px; overflow:hidden; position:relative;">
                        <div id="user-bar" style="width:0%; height:100%; background:#4f46e5; position:absolute; top:0; left:0; transition:width 1s;"></div>
                        <div style="width:4px; height:100%; background:#ef4444; position:absolute; top:0; left:70%; z-index:10;" title="Ortalama"></div>
                    </div>
                    <div style="display:flex; justify-content:space-between; margin-top:5px; font-size:0.8rem; color:#64748b;">
                        <span>Siz</span>
                        <span>Ortalama (42)</span>
                    </div>
                </div>
             </div>
        </div>
    </div>`
};

// 3. CORE LOGIC
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

        switch (page) {
            case 'home':
                c.innerHTML = getHomeContent();
                break;
            case 'academic':
                c.innerHTML = PAGE_TEMPLATES.academic;
                renderAcademic();
                break;
            case 'student':
                c.innerHTML = PAGE_TEMPLATES.student;
                renderStudentOpinions();
                break;
            case 'publicity': // YENİ ROTA
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

// Handle browser back/forward buttons
window.addEventListener('popstate', (event) => {
    if (event.state && event.state.page) {
        window.router.navigate(event.state.page, false);
    } else {
        // Fallback or home
        const page = window.location.hash.replace('#', '') || 'home';
        window.router.navigate(page, false);
    }
});

// ... DİĞER FONKSİYONLAR ...

function renderSentiment() {
    const sections = [
        { title: "Toplumsal Fedakârlık", icon: "fa-hand-holding-heart", color: "#dc2626", value: 95 },
        { title: "Zafer Umudu", icon: "fa-dove", color: "#16a34a", value: 92 },
        { title: "Haklılık ve Gurur", icon: "fa-fist-raised", color: "#2563eb", value: 88 },
        { title: "Siyasi Bilinç", icon: "fa-brain", color: "#d97706", value: 85 }
    ];

    const timelineData = [
        { step: "01", title: "HÜZÜN VE ÖFKE", year: "1919-1920", desc: "İşgalin ilk yıllarındaki kederin kararlılığa dönüşü." },
        { step: "02", title: "DİRENİŞ VE KENETLENME", year: "1920-1921", desc: "Gönüllü alayları ve halkın 'tek vücut' olduğu dönem." },
        { step: "03", title: "ZAFER VE İSTİKLAL", year: "1922-1923", desc: "Büyük Taarruz sonrası tam bağımsızlık inancı." }
    ];

    const chartContainer = document.getElementById('charts-container');
    if (chartContainer) {
        chartContainer.innerHTML = sections.map(item => {
            const radius = 60;
            const circumference = 2 * Math.PI * radius;
            const offset = circumference - (item.value / 100) * circumference;

            return `
            <div style="display:flex; flex-direction:column; align-items:center;">
                <div style="position:relative; width:150px; height:150px; margin-bottom:1rem; transition:transform 0.3s;" onmouseover="this.style.transform='scale(1.05)'" onmouseout="this.style.transform='scale(1)'">
                    <svg width="150" height="150" viewBox="0 0 160 160" style="transform:rotate(-90deg);">
                        <circle cx="80" cy="80" r="${radius}" fill="transparent" stroke="#f1f5f9" stroke-width="12" />
                        <circle cx="80" cy="80" r="${radius}" fill="transparent" stroke="${item.color}" stroke-width="12" 
                            stroke-dasharray="${circumference}" stroke-dashoffset="${offset}" stroke-linecap="round" />
                    </svg>
                    <div style="position:absolute; top:0; left:0; width:100%; height:100%; display:flex; flex-direction:column; align-items:center; justify-content:center;">
                        <span style="font-size:2rem; font-weight:900; color:#1e293b;">%${item.value}</span>
                        <i class="fas ${item.icon}" style="color:${item.color}; font-size:1.2rem; margin-top:5px;"></i>
                    </div>
                </div>
                <span style="font-weight:bold; color:#334155; text-align:center;">${item.title}</span>
            </div>
            `;
        }).join('');
    }

    const timelineContainer = document.getElementById('timeline-container');
    if (timelineContainer) {
        timelineContainer.innerHTML = timelineData.map((t, index) => `
            <div style="flex:1; min-width:250px; background:rgba(255,255,255,0.05); padding:2rem; border-radius:20px; border:1px solid rgba(255,255,255,0.1); position:relative;">
                <div style="font-size:4rem; font-weight:900; color:rgba(255,255,255,0.1); position:absolute; top:10px; right:20px;">${t.step}</div>
                <div style="color:#ef4444; font-weight:bold; font-size:0.9rem; margin-bottom:10px; letter-spacing:1px;">${t.year}</div>
                <h4 style="font-size:1.4rem; font-weight:bold; margin-bottom:10px;">${t.title}</h4>
                <p style="color:#94a3b8; line-height:1.6;">${t.desc}</p>
            </div>
        `).join('');
    }
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
                  <h3 style="font-size:1.5rem; font-weight:bold; margin-bottom:10px; line-height:1.3;">${d.title}</h3>
                  <p style="color:#4b5563; line-height:1.6; margin-bottom:20px;">${d.desc}</p>
                  
                  ${d.audio ? `
                  <div style="margin-top:15px; background:#f3f4f6; padding:15px; border-radius:10px;">
                      <div style="font-weight:bold; font-size:0.9rem; margin-bottom:5px; color:#374151;"><i class="fas fa-play-circle"></i> Yayını Dinle:</div>
                      <audio controls style="width:100%; height:40px;">
                          <source src="${d.audio}" type="audio/mpeg">
                          Tarayıcınız ses elementini desteklemiyor.
                      </audio>
                  </div>` : ''}

                  ${d.link !== '#' ?
            `<a href="${d.link}" target="_blank" style="display:inline-flex; align-items:center; color:${d.color}; font-weight:bold; text-decoration:none; padding-bottom:2px; border-bottom:2px solid ${d.color}30; hover:border-color:${d.color}; transition:all 0.3s; margin-top: ${d.audio ? '15px' : '0'};">
                      Haberi İncele <i class="fas fa-external-link-alt" style="margin-left:8px; font-size:0.8rem;"></i>
                  </a>` :
            (!d.audio ? `<span style="color:#9ca3af; font-size:0.9rem; font-style:italic;"><i class="fas fa-check-circle"></i> Yayınlandı</span>` : '')
        }
             </div>
        </div>
    `).join('');
}


function renderLoyalty() {
    const container = document.getElementById('loyalty-list');
    if (!container) return;

    // Tarihe göre yeniden eskiye sırala
    const sortedData = [...LOYALTY_DATA].reverse();

    container.innerHTML = sortedData.map(msg => `
        <div style="background:white; padding:20px; border-radius:15px; border-left:5px solid #b45309; box-shadow:0 5px 15px rgba(0,0,0,0.03); display:flex; gap:15px; animation: fadeIn 0.5s ease-in;">
            <div style="min-width:50px; height:50px; background:#fef3c7; color:#b45309; border-radius:50%; display:flex; align-items:center; justify-content:center; font-weight:bold; font-size:1.2rem;">
                ${msg.avatar}
            </div>
            <div>
                <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:5px;">
                    <h4 style="font-weight:bold; color:#1e293b; margin:0;">${msg.name}</h4>
                    <span style="font-size:0.8rem; color:#94a3b8;"><i class="fas fa-clock"></i> ${msg.date}</span>
                </div>
                <div style="font-size:0.85rem; color:#b45309; font-weight:bold; margin-bottom:8px;">${msg.school}</div>
                <p style="color:#475569; line-height:1.5; font-style:italic;">"${msg.message}"</p>
            </div>
        </div>
    `).join('');
}

window.addMessage = function () {
    const name = document.getElementById('l-name').value;
    const school = document.getElementById('l-school').value;
    const message = document.getElementById('l-msg').value;

    if (!name || !message) return alert("Lütfen adınızı ve mesajınızı giriniz.");

    const today = new Date();
    const dateStr = today.getDate() + "." + (today.getMonth() + 1) + "." + today.getFullYear();

    LOYALTY_DATA.push({
        name: name,
        school: school || "Öğrenci",
        message: message,
        date: dateStr,
        avatar: name.charAt(0).toUpperCase()
    });

    // Formu temizle
    document.getElementById('loyalty-form').reset();

    // Listeyi güncelle
    renderLoyalty();

    // Kullanıcıya bildirim
    alert("Mesajınız Vefa Köşesi'ne eklendi. Teşekkürler!");
}

function renderEmpathy() {
    const list = document.getElementById('questions-list');
    if (!list) return;

    list.innerHTML = EMPATHY_QUESTIONS.map((q, index) => `
        <div style="background:#f9fafb; padding:20px; border-radius:12px; border:1px solid #e5e7eb;">
            <p style="font-weight:bold; margin-bottom:15px; color:#1f2937;">${index + 1}. ${q.text}</p>
            <div style="display:flex; justify-content:space-between; gap:10px; flex-wrap:wrap;">
                ${[1, 2, 3, 4, 5].map(val => `
                    <label style="flex:1; cursor:pointer; text-align:center;">
                        <input type="radio" name="q${q.id}" value="${val}" required style="display:none;" onchange="this.parentElement.parentElement.querySelectorAll('div').forEach(d=>d.style.background='white'); this.nextElementSibling.style.background='#c7d2fe';">
                        <div style="padding:10px; border:1px solid #d1d5db; border-radius:8px; transition:all 0.2s; font-size:0.9rem; font-weight:bold; color:#4b5563;">
                            ${val === 1 ? 'Hiçbir zaman' : val === 2 ? 'Nadiren' : val === 3 ? 'Bazen' : val === 4 ? 'Genellikle' : 'Her zaman'}
                        </div>
                    </label>
                `).join('')}
            </div>
        </div>
    `).join('');
}

window.calculateEmpathy = function () {
    let totalScore = 0;
    let cognitiveScore = 0;
    let affectiveScore = 0;
    const form = document.getElementById('empathy-form');

    // Puanlama
    EMPATHY_QUESTIONS.forEach(q => {
        const input = form.querySelector(`input[name="q${q.id}"]:checked`);
        if (input) {
            const val = parseInt(input.value);
            totalScore += val;
            if (q.type === "Bilişsel") cognitiveScore += val;
            else affectiveScore += val;
        }
    });

    // Sonuç Gösterimi
    const resultDiv = document.getElementById('empathy-result');
    resultDiv.style.display = 'block';

    // Skorları Yazdır
    document.getElementById('total-score').innerText = totalScore + "/60";
    document.getElementById('cognitive-score').innerText = cognitiveScore;
    document.getElementById('affective-score').innerText = affectiveScore;

    // Yorum
    let comment = "";
    if (totalScore >= 50) comment = "Mükemmel! Tarihsel olayları adeta yaşıyorsunuz.";
    else if (totalScore >= 40) comment = "Harika! Güçlü bir tarihsel empati yeteneğiniz var.";
    else if (totalScore >= 30) comment = "Güzel. Kendinizi geliştirmeye açıksınız.";
    else comment = "Tarihsel empati üzerine biraz daha düşünebilirsiniz.";
    document.getElementById('score-comment').innerText = comment;

    // Bar Grafiği
    const percent = (totalScore / 60) * 100;
    document.getElementById('user-bar').style.width = percent + "%";

    // Scroll to result
    resultDiv.scrollIntoView({ behavior: 'smooth' });
}

function renderStudentOpinions() {
    const grid = document.getElementById('student-grid');
    if (!grid) return;

    grid.innerHTML = STUDENT_DATA.map(d => `
        <div class="s-card" style="background:white; border-radius:15px; overflow:hidden; border:1px solid #e5e7eb; box-shadow:0 4px 6px -1px rgba(0,0,0,0.1);">
             <div style="background:#fef2f2; padding:20px; border-bottom:1px solid #fca5a5;">
                 <h3 style="color:#991b1b; font-weight:bold; font-size:1.1rem; line-height:1.4;">${d.question}</h3>
             </div>
             <div style="padding:20px;">
                 <p style="font-size:0.95rem; line-height:1.6; color:#374151; margin-bottom:15px;">${d.analysis}</p>
                 
                 ${d.quote ? `
                 <div style="background:#f9fafb; padding:15px; border-radius:8px; border-left:4px solid #ef4444; margin-bottom:15px;">
                     <i class="fas fa-quote-left" style="color:#d1d5db; margin-bottom:5px;"></i>
                     <p style="font-style:italic; font-size:0.9rem; color:#4b5563;">"${d.quote}"</p>
                     <div style="text-align:right; font-weight:bold; font-size:0.8rem; color:#991b1b; margin-top:5px;">- ${d.student}</div>
                 </div>` : ''}

                 ${d.stats && d.stats.length > 0 ? `
                 <div style="display:flex; flex-wrap:wrap; gap:10px; margin-top:10px;">
                    ${d.stats.map(s => `
                        <span style="background:#ecfdf5; color:#065f46; padding:4px 10px; border-radius:4px; font-size:0.75rem; font-weight:bold; border:1px solid #a7f3d0;">
                            ${s.label}: ${s.count}
                        </span>
                    `).join('')}
                 </div>` : ''}
             </div>
        </div>
    `).join('');
}


function renderAcademic() {
    const grid = document.getElementById('academic-grid');
    grid.innerHTML = ACADEMIC_DATA.map(p => `
        <div class="academic-card" onclick="openInterview('${p.id}')" style="background:white; border-radius:20px; overflow:hidden; box-shadow:0 10px 30px rgba(0,0,0,0.05); cursor:pointer; border:1px solid #eee;">
            <div style="height:100px; background:linear-gradient(135deg, #1e3a8a, #3b82f6); position:relative;">
                <div style="position:absolute; bottom:-30px; left:30px; width:60px; height:60px; background:#fff; border-radius:50%; padding:4px;">
                     <div style="width:100%; height:100%; background:#ccc; border-radius:50%; display:flex; align-items:center; justify-content:center; font-weight:bold; color:#555; font-size:1.5rem;">${p.name.charAt(0)}</div>
                </div>
            </div>
            <div style="padding:40px 20px 20px 20px;">
                <h3 style="font-size:1.2rem; font-weight:bold; margin-bottom:5px;">${p.name}</h3>
                <div style="color:#64748b; font-size:0.8rem; margin-bottom:15px;">${p.title}</div>
                
                <div style="background:#f8fafc; padding:10px; border-radius:8px; margin-bottom:15px;">
                    <i class="fas fa-quote-left" style="color:#cbd5e1; margin-bottom:5px; display:block;"></i>
                    <p style="font-style:italic; font-size:0.85rem; color:#475569;">"${p.highlights[0]}"</p>
                </div>
                
                <button style="width:100%; padding:10px; background:#1e3a8a; color:white; border:none; border-radius:8px; font-weight:bold; cursor:pointer;">Mülakatı Oku <i class="fas fa-arrow-right"></i></button>
            </div>
        </div>
    `).join('');
}

window.openInterview = (id) => {
    const p = ACADEMIC_DATA.find(x => x.id === id);
    const modal = document.getElementById('interview-modal');
    document.getElementById('modal-content').innerHTML = `
        <div style="border-bottom:1px solid #eee; padding-bottom:20px; margin-bottom:30px;">
            <h2 style="font-size:2rem; font-weight:bold; color:#1e3a8a;">${p.name}</h2>
            <p style="color:#666;">${p.title}</p>
        </div>
        <div style="display:flex; flex-direction:column; gap:30px;">
            ${p.interview.map(i => `
                <div>
                    <h4 style="font-size:1.2rem; font-weight:bold; margin-bottom:10px; color:#1a1a1a;"><i class="fas fa-question-circle" style="color:#dc2626; margin-right:10px;"></i> ${i.q}</h4>
                    <div style="font-size:1.1rem; line-height:1.7; color:#334155; padding-left:20px; border-left:4px solid #e2e8f0;">${i.a}</div>
                </div>
            `).join('')}
        </div>
    `;
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

window.closeModal = () => {
    document.getElementById('interview-modal').style.display = 'none';
    document.body.style.overflow = 'auto';
}

function getHomeContent() {
    return `
    <div class="home-hero">
      <div class="hero-content">
        <div class="breaking-news-banner" style="background:#b91c1c;color:white;padding:0.5rem;margin-bottom:2rem;">
            <marquee>*** HÂKİMİYET-İ MİLLİYE VE İSTİKLAL-İ TAM *** Trabzon'un Gür Sesi İstikbal ***</marquee>
        </div>
        <h1 class="main-title" style="font-size:4rem; text-align:center;">İSTİKBAL</h1>
        <div class="feature-grid">
          <div class="feature-card" onclick="router.navigate('archive')"><i class="fas fa-newspaper"></i><h3>Haber Arşivi</h3></div>
          <div class="feature-card" onclick="router.navigate('propaganda')"><i class="fas fa-balance-scale"></i><h3>Basın Cephesi</h3></div>
          <div class="feature-card" onclick="router.navigate('timeline')"><i class="fas fa-map-marked-alt"></i><h3>Harita</h3></div>
          <div class="feature-card" onclick="router.navigate('academic')" style="background:#eff6ff; border:2px solid #1e3a8a;"><i class="fas fa-university"></i><h3>Akademik Bakış</h3></div>
          <div class="feature-card" onclick="router.navigate('student')" style="background:#fef2f2; border:2px solid #dc2626;"><i class="fas fa-user-graduate" style="color:#dc2626;"></i><h3 style="color:#991b1b;">Öğrenci Görüşleri</h3></div>
          <!-- YENİ BUTON: TANITIM -->
          <div class="feature-card" onclick="router.navigate('publicity')" style="background:#f0f9ff; border:2px solid #0ea5e9;"><i class="fas fa-broadcast-tower" style="color:#0ea5e9;"></i><h3 style="color:#0369a1;">Basın & Tanıtım</h3></div>
          <!-- YENİ BUTON: VEFA KÖŞESİ -->
          <div class="feature-card" onclick="router.navigate('loyalty')" style="background:#fff7ed; border:2px solid #ea580c;"><i class="fas fa-hand-holding-heart" style="color:#ea580c;"></i><h3 style="color:#c2410c;">Vefa Köşesi</h3></div>
          <!-- YENİ BUTON: EMPATİ ÖLÇEĞİ -->
          <div class="feature-card" onclick="router.navigate('empathy')" style="background:#e0e7ff; border:2px solid #4f46e5;"><i class="fas fa-brain" style="color:#4f46e5;"></i><h3 style="color:#3730a3;">Empati Ölçeği</h3></div>
          <div class="feature-card" onclick="router.navigate('sentiment')"><i class="fas fa-chart-line"></i><h3>Duygu Analizi</h3></div>
          <div class="feature-card" onclick="router.navigate('about')"><i class="fas fa-info-circle"></i><h3>Proje</h3></div>
        </div>
      </div>
    </div>`;
}

function getSentimentContent() {
    return `
    <div style="max-width:1100px; margin:0 auto; padding:20px; font-family:'Inter', sans-serif;">
        <h1 style="text-align:center; font-size:2.5rem; font-weight:900; margin-bottom:2rem;">Milli Mücadele'nin Duygu Haritası</h1>
        <div style="text-align:center; background:white; padding:20px; border-radius:10px;">
             <div style="display:flex; justify-content:center; gap:2rem; flex-wrap:wrap;">
                <div><div style="font-size:2rem; color:#dc2626; font-weight:bold;">%95</div><div>Fedakârlık</div></div>
                <div><div style="font-size:2rem; color:#16a34a; font-weight:bold;">%92</div><div>Umut</div></div>
                <div><div style="font-size:2rem; color:#2563eb; font-weight:bold;">%88</div><div>Gurur</div></div>
             </div>
        </div>
    </div>`;
}

function renderPropaganda() {
    document.getElementById('propaganda-container').innerHTML = PROPAGANDA_DATA.map(item => `
        <div class="p-card" style="background:white; border:1px solid #ddd; margin-bottom:20px; padding:20px; border-radius:10px;">
            <h3 style="color:#b91c1c;">${item.topic}</h3>
            <div style="display:grid; grid-template-columns:1fr 1fr; gap:20px; margin-top:10px;">
                <div style="background:#fee2e2; padding:15px;"><strong>YALAN:</strong> ${item.lie.claim}</div>
                <div style="background:#dcfce7; padding:15px;"><strong>GERÇEK:</strong> ${item.truth.claim}</div>
            </div>
        </div>
    `).join('');
}

function initArchive() {
    window.renderList = (data) => {
        document.getElementById('arc-list').innerHTML = data.map(n => `
            <div style="background:white; padding:15px; border-bottom:1px solid #eee; margin-bottom:15px; border-left:4px solid #b91c1c;">
                <div style="display:flex; justify-content:space-between; color:#666; font-size:0.8rem;">
                     <span><i class="far fa-calendar-alt"></i> ${n.date}</span>
                     <span style="background:#eee; px-2; border-radius:4px;">${n.category}</span>
                </div>
                <h3 style="font-size:1.4rem; font-weight:bold; margin:5px 0;">${n.title}</h3>
                <p style="font-family:serif; font-size:1.1rem; line-height:1.5;">${n.content}</p>
                <div style="text-align:right; font-size:0.8rem; color:#b91c1c; font-weight:bold;"><i class="fas fa-map-marker-alt"></i> ${n.location}</div>
            </div>`).join('');
    };
    window.filterArchive = (cat) => {
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        event.target.classList.add('active');
        const d = cat === 'ALL' ? NEWS_DATA : NEWS_DATA.filter(n => n.category === cat);
        window.renderList(d);
    }
    window.renderList(NEWS_DATA);
}

function initTimeline() {
    setTimeout(() => {
        if (!document.getElementById('map-area')) return;
        const map = L.map('map-area').setView([39.0, 35.0], 6);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
        NEWS_DATA.forEach(n => L.marker([n.lat, n.lng]).addTo(map).bindPopup(`<b>${n.title}</b><br>${n.date}`));
    }, 100);
}


document.addEventListener('DOMContentLoaded', () => {
    // Global Link Click Handler
    document.querySelectorAll('.nav-link').forEach(l => {
        l.addEventListener('click', (e) => {
            e.preventDefault();
            const page = l.getAttribute('data-page');
            window.router.navigate(page);
        });
    });

    const initialPage = window.location.hash.replace('#', '') || 'home';
    window.router.navigate(initialPage, true);
});
