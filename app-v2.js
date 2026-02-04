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

const NATIONAL_STRUGGLE_HUB = [
    {
        id: 'struggle_intro',
        title: 'Gazete Tanıtımı & İlk Sayı',
        icon: 'fa-book-open',
        color: '#b45309',
        desc: 'İstikbal Gazetesi\'nin misyonu ve 10 Kânûn-ı Evvel 1334 tarihli heyecan dolu ilk sayısı.'
    },
    {
        id: 'struggle_battles',
        title: 'Cepheden Haberler',
        icon: 'fa-shield-alt',
        color: '#dc2626',
        desc: 'İnönü\'den Sakarya\'ya, Büyük Taarruz\'dan zafere; İstikbal\'in kalemiyle muharebe raporları.'
    },
    {
        id: 'struggle_independence',
        title: 'Lozan & Bağımsızlık',
        icon: 'fa-file-signature',
        color: '#1e3a8a',
        desc: 'Lozan Muahedesi, tam bağımsızlık yolundaki diplomatik zaferler ve büyük mübadele.'
    },
    {
        id: 'struggle_modern',
        title: 'Gençlerin Gözüyle',
        icon: 'fa-user-graduate',
        color: '#059669',
        desc: '107 yıl sonra gençlerin İstikbal\'e bakışı, duygusal analizler ve milli bilinç raporları.'
    }
];

const BATTLE_NEWS_DATA = [
    {
        id: 'inonu-1',
        title: 'I. İnönü Zaferi: "Hattı Müdafaa Yoktur"',
        date: '14 Ocak 1921',
        location: 'İnönü Mevkii',
        summary: 'Garp Cephesi Kumandanı İsmet Paşa idaresindeki milli ordumuz, Yunanlıları İnönü mevkilerinde mağlup ederek Anadolu\'nun makus talihini yenmiştir.',
        details: [
            'Yunan ordusu büyük kayıplar vererek Bursa yönüne çekildi.',
            'Mustafa Kemal Paşa, İsmet Paşa\'yı telgrafla tebrik etti.',
            'Trabzon halkı zaferi fener alaylarıyla kutladı.'
        ],
        impact: 95
    },
    {
        id: 'inonu-2',
        title: 'II. İnönü: "Siz Orada Sadece Düşmanı Değil..."',
        date: '1 Nisan 1921',
        location: 'Metristepe',
        summary: 'Yunan kralının mevkiini korumak için başlattığı taarruz, milli ordunun azmi karşısında felaketle sonuçlandı. Yunanlılar her şeyi bırakarak kaçıyor.',
        details: [
            'Yunan kralı Constantinos ordusunu ateşe attı.',
            'Esir diye gösterilenlerin sivil halk olduğu ispatlandı.',
            'Milli Mücadele\'nin kesin zaferine olan inanç pekişti.'
        ],
        impact: 97
    },
    {
        id: 'kutahya-eskisehir',
        title: 'Kütahya-Eskişehir: Stratejik Geri Çekilme',
        date: 'Temmuz 1921',
        location: 'Sakarya Doğusu',
        summary: 'Yunan taarruzu karşısında ordumuzun Sakarya nehri doğusuna çekilmesi kararlaştırıldı. Bu, ordunun imhasını önlemek için yapılmış dahi bir manevradır.',
        details: [
            'Mustafa Kemal Paşa ordunun toparlanması için zaman kazandı.',
            'Yunanlılar 30 bin esir aldıklarını iddia ederek yalan söylediler.',
            'Halk, ordusuna güvenmeye devam ediyor.'
        ],
        impact: 75
    },
    {
        id: 'sakarya',
        title: 'Sakarya Meydan Muharebesi: Kan Deryası',
        date: '13 Eylül 1921',
        location: 'Sakarya Hattı',
        summary: '22 gün 22 gece süren dünyanın en uzun meydan muharebesinde Yunan ordusu perişan edildi. Düşman zayiata dayanamayarak Sakarya\'yı terk etti.',
        details: [
            'Yunan zayiatı: 16.000 ölü, 30.000 yaralı.',
            'Savunma dönemi bitti, taarruz dönemi başladı.',
            'Mustafa Kemal Paşa\'ya "Gazi" unvanı verildi.'
        ],
        impact: 100
    },
    {
        id: 'buyuk-taarruz',
        title: 'Büyük Taarruz: "Ordular İlk Hedefiniz Akdeniz!"',
        date: '30 Ağustos 1922',
        location: 'Dumlupınar / Afyon',
        summary: '26 Ağustos şafağında başlayan taarruzla Yunan tahkimatı 24 saatte paramparça edildi. Afyon kurtarıldı, düşman denize dökülmek üzere kaçıyor.',
        details: [
            'Yunan başkumandanı esir alındı.',
            'Afyonkarahisar halkı milli orduyu gözyaşlarıyla karşıladı.',
            'İstikbal Gazetesi: "Vatan Kurtuldu!"'
        ],
        impact: 100
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

// YENİ: VEFA KÖŞESİ (LOYALTY) VERİSİ & FIREBASE INITIALIZATION
const firebaseConfig = {
    apiKey: "AIzaSyCM4LaFt7ybs3p0UyoMQbhP1QGmSKMy6Wo",
    authDomain: "gazeteistikbal-6e06a.firebaseapp.com",
    databaseURL: "https://gazeteistikbal-6e06a-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "gazeteistikbal-6e06a",
    storageBucket: "gazeteistikbal-6e06a.firebasestorage.app",
    messagingSenderId: "666874515447",
    appId: "1:666874515447:web:01e2c72f7c73f929eba8f2",
    measurementId: "G-J2KP79YH77"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const database = firebase.database();
const messagesRef = database.ref('messages');
const scoresRef = database.ref('empathy_scores');

let GLOBAL_AVERAGE_SCORE = 0;
let TOTAL_SCORE_COUNT = 0;

// Listen for empathy scores updates
scoresRef.on('value', (snapshot) => {
    const data = snapshot.val();
    if (data) {
        const scores = Object.values(data);
        const total = scores.reduce((sum, score) => sum + score, 0);
        TOTAL_SCORE_COUNT = scores.length;
        GLOBAL_AVERAGE_SCORE = (total / TOTAL_SCORE_COUNT).toFixed(1);
    }
});

let LOYALTY_DATA = [
    {
        name: "Ahmet Yılmaz",
        school: "Trabzon Lisesi",
        message: "Milli Mücadele'nin bu kadar zor şartlarda kazanıldığını bu gazeteyi okuyunca daha iyi anladım. Faik Ahmet Bey'e minnettarız.",
        date: "30.01.2026",
        avatar: "A"
    }
];

// Listen for updates from Firebase
messagesRef.on('value', (snapshot) => {
    const data = snapshot.val();
    if (data) {
        // Firebase verilerini mevcut diziye ekle (Ahmet Yılmaz gibi varsayılanları koruyarak veya temizleyerek)
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
        // Eğer şu an loyalty sayfasındaysak listeyi yenile
        if (window.location.hash === '#loyalty') {
            renderLoyalty();
        }
    }
});

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

// 2. PAGE TEMPLATES
const PAGE_TEMPLATES = {
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
                    src="[https://www.youtube.com/embed/X2hoOcWwzSE](https://www.youtube.com/embed/X2hoOcWwzSE)" 
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

    publicity: `
    <div style="max-width:900px; margin:2rem auto; padding:1rem; font-family:'Inter',sans-serif;">
         <header style="text-align:center; margin-bottom:3rem;">
            <div style="background:#0f172a; color:#fff; display:inline-block; padding:5px 20px; font-family:'Times New Roman',serif; font-size:1rem; margin-bottom:1rem; letter-spacing:1px; border-radius:30px;">BASIN YANSIMALARI</div>
            <h1 style="font-size:2.5rem; font-weight:900; color:#1a1a1a; margin-bottom:1rem; line-height:1.2;">Projeyi Kamuoyuna Tanıtma Çalışmaları</h1>
            <p style="color:#666; font-size:1.1rem; max-width:700px; margin:0 auto;">Projemizin ulusal ve yerel basındaki yansımaları.</p>
        </header>
        <div id="publicity-container" style="display:flex; flex-direction:column; gap:30px;"></div>
    </div>`,

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
                    <div id="charts-container" style="display:grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap:30
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

const NATIONAL_STRUGGLE_HUB = [
    {
        id: 'struggle_intro',
        title: 'Gazete Tanıtımı & İlk Sayı',
        icon: 'fa-book-open',
        color: '#b45309',
        desc: 'İstikbal Gazetesi\'nin misyonu ve 10 Kânûn-ı Evvel 1334 tarihli heyecan dolu ilk sayısı.'
    },
    {
        id: 'struggle_battles',
        title: 'Cepheden Haberler',
        icon: 'fa-shield-alt',
        color: '#dc2626',
        desc: 'İnönü\'den Sakarya\'ya, Büyük Taarruz\'dan zafere; İstikbal\'in kalemiyle muharebe raporları.'
    },
    {
        id: 'struggle_independence',
        title: 'Lozan & Bağımsızlık',
        icon: 'fa-file-signature',
        color: '#1e3a8a',
        desc: 'Lozan Muahedesi, tam bağımsızlık yolundaki diplomatik zaferler ve büyük mübadele.'
    },
    {
        id: 'struggle_modern',
        title: 'Gençlerin Gözüyle',
        icon: 'fa-user-graduate',
        color: '#059669',
        desc: '107 yıl sonra gençlerin İstikbal\'e bakışı, duygusal analizler ve milli bilinç raporları.'
    }
];

const BATTLE_NEWS_DATA = [
    {
        id: 'inonu-1',
        title: 'I. İnönü Zaferi: "Hattı Müdafaa Yoktur"',
        date: '14 Ocak 1921',
        location: 'İnönü Mevkii',
        summary: 'Garp Cephesi Kumandanı İsmet Paşa idaresindeki milli ordumuz, Yunanlıları İnönü mevkilerinde mağlup ederek Anadolu\'nun makus talihini yenmiştir.',
        details: [
            'Yunan ordusu büyük kayıplar vererek Bursa yönüne çekildi.',
            'Mustafa Kemal Paşa, İsmet Paşa\'yı telgrafla tebrik etti.',
            'Trabzon halkı zaferi fener alaylarıyla kutladı.'
        ],
        impact: 95
    },
    {
        id: 'inonu-2',
        title: 'II. İnönü: "Siz Orada Sadece Düşmanı Değil..."',
        date: '1 Nisan 1921',
        location: 'Metristepe',
        summary: 'Yunan kralının mevkiini korumak için başlattığı taarruz, milli ordunun azmi karşısında felaketle sonuçlandı. Yunanlılar her şeyi bırakarak kaçıyor.',
        details: [
            'Yunan kralı Constantinos ordusunu ateşe attı.',
            'Esir diye gösterilenlerin sivil halk olduğu ispatlandı.',
            'Milli Mücadele\'nin kesin zaferine olan inanç pekişti.'
        ],
        impact: 97
    },
    {
        id: 'kutahya-eskisehir',
        title: 'Kütahya-Eskişehir: Stratejik Geri Çekilme',
        date: 'Temmuz 1921',
        location: 'Sakarya Doğusu',
        summary: 'Yunan taarruzu karşısında ordumuzun Sakarya nehri doğusuna çekilmesi kararlaştırıldı. Bu, ordunun imhasını önlemek için yapılmış dahi bir manevradır.',
        details: [
            'Mustafa Kemal Paşa ordunun toparlanması için zaman kazandı.',
            'Yunanlılar 30 bin esir aldıklarını iddia ederek yalan söylediler.',
            'Halk, ordusuna güvenmeye devam ediyor.'
        ],
        impact: 75
    },
    {
        id: 'sakarya',
        title: 'Sakarya Meydan Muharebesi: Kan Deryası',
        date: '13 Eylül 1921',
        location: 'Sakarya Hattı',
        summary: '22 gün 22 gece süren dünyanın en uzun meydan muharebesinde Yunan ordusu perişan edildi. Düşman zayiata dayanamayarak Sakarya\'yı terk etti.',
        details: [
            'Yunan zayiatı: 16.000 ölü, 30.000 yaralı.',
            'Savunma dönemi bitti, taarruz dönemi başladı.',
            'Mustafa Kemal Paşa\'ya "Gazi" unvanı verildi.'
        ],
        impact: 100
    },
    {
        id: 'buyuk-taarruz',
        title: 'Büyük Taarruz: "Ordular İlk Hedefiniz Akdeniz!"',
        date: '30 Ağustos 1922',
        location: 'Dumlupınar / Afyon',
        summary: '26 Ağustos şafağında başlayan taarruzla Yunan tahkimatı 24 saatte paramparça edildi. Afyon kurtarıldı, düşman denize dökülmek üzere kaçıyor.',
        details: [
            'Yunan başkumandanı esir alındı.',
            'Afyonkarahisar halkı milli orduyu gözyaşlarıyla karşıladı.',
            'İstikbal Gazetesi: "Vatan Kurtuldu!"'
        ],
        impact: 100
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

// YENİ: VEFA KÖŞESİ (LOYALTY) VERİSİ & FIREBASE INITIALIZATION
const firebaseConfig = {
    apiKey: "AIzaSyCM4LaFt7ybs3p0UyoMQbhP1QGmSKMy6Wo",
    authDomain: "gazeteistikbal-6e06a.firebaseapp.com",
    databaseURL: "https://gazeteistikbal-6e06a-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "gazeteistikbal-6e06a",
    storageBucket: "gazeteistikbal-6e06a.firebasestorage.app",
    messagingSenderId: "666874515447",
    appId: "1:666874515447:web:01e2c72f7c73f929eba8f2",
    measurementId: "G-J2KP79YH77"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const database = firebase.database();
const messagesRef = database.ref('messages');
const scoresRef = database.ref('empathy_scores');

let GLOBAL_AVERAGE_SCORE = 0;
let TOTAL_SCORE_COUNT = 0;

// Listen for empathy scores updates
scoresRef.on('value', (snapshot) => {
    const data = snapshot.val();
    if (data) {
        const scores = Object.values(data);
        const total = scores.reduce((sum, score) => sum + score, 0);
        TOTAL_SCORE_COUNT = scores.length;
        GLOBAL_AVERAGE_SCORE = (total / TOTAL_SCORE_COUNT).toFixed(1);
    }
});

let LOYALTY_DATA = [
    {
        name: "Ahmet Yılmaz",
        school: "Trabzon Lisesi",
        message: "Milli Mücadele'nin bu kadar zor şartlarda kazanıldığını bu gazeteyi okuyunca daha iyi anladım. Faik Ahmet Bey'e minnettarız.",
        date: "30.01.2026",
        avatar: "A"
    }// Listen for updates from Firebase
messagesRef.on('value', (snapshot) => {
    const data = snapshot.val();
    if (data) {
        // Firebase verilerini mevcut diziye ekle
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
        // Eğer şu an loyalty sayfasındaysak listeyi yenile
        if (window.location.hash === '#loyalty') {
            renderLoyalty();
        }
    }
});

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

// 2. PAGE TEMPLATES
const PAGE_TEMPLATES = {
    about: `
    <div style="max-width:1000px; margin:2rem auto; font-family:'Inter',sans-serif; padding:1rem;">
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
            <p style="margin-top:1.5rem; color:#64748b; font-size:1rem; line-height:1.6; padding:0 1rem;">
                <strong>Savaşın İçinde Doğan Bir Gazete: İstikbal'in Hikayesi</strong> - Projemizin genel kapsamını, hedeflerini ve Milli Mücadele dönemindeki İstikbal Gazetesi'nin önemini anlatan tanıtım filmimiz.
            </p>
        </div>

        <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap:40px; margin-top:4rem;">
            <div>
                <h2 style="color:#1e3a8a; font-size:2rem; font-weight:900; margin-bottom:1.5rem; display:flex; align-items:center; gap:10px;">
                    <i class="fas fa-history" style="color:#b91c1c; margin-right:15px;"></i> Projenin Amacı
                </h2>
                <p style="font-size:1.1rem; line-height:1.8; color:#334155; text-align:justify;">
                    Tarih sadece ders kitaplarında kalan bir anlatı değildir. İstikbal Gazetesi, Mondros Mütarekesi'nden Cumhuriyet'in ilanına kadar geçen o kritik süreçte, halkın direnişini belgelen canlı bir tanıktır.
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
                </ul>
            </div>
        </div>
    </div>`,

    publicity: `
    <div style="max-width:900px; margin:2rem auto; padding:1rem; font-family:'Inter',sans-serif;">
         <header style="text-align:center; margin-bottom:3rem;">
            <div style="background:#0f172a; color:#fff; display:inline-block; padding:5px 20px; font-family:'Times New Roman',serif; font-size:1rem; margin-bottom:1rem; letter-spacing:1px; border-radius:30px;">BASIN YANSIMALARI</div>
            <h1 style="font-size:2.5rem; font-weight:900; color:#1a1a1a; margin-bottom:1rem; line-height:1.2;">Projeyi Kamuoyuna Tanıtma Çalışmaları</h1>
        </header>
        <div id="publicity-container" style="display:flex; flex-direction:column; gap:30px;"></div>
    </div>`,

    loyalty: `
    <div style="max-width:1000px; margin:2rem auto; padding:1rem; font-family:'Inter',sans-serif;">
        <header style="text-align:center; margin-bottom:4rem;">
            <div style="background:#b45309; color:#fff; display:inline-block; padding:5px 20px; font-family:'Times New Roman',serif; font-size:1rem; margin-bottom:1rem; letter-spacing:1px; border-radius:30px;">GENÇLERDEN İSTİKBAL'E MESAJ</div>
            <h1 style="font-size:3rem; font-weight:900; color:#1a1a1a; margin-bottom:1rem;">Vefa Köşesi</h1>
        </header>
        <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap:40px;">
            <div style="background:white; padding:30px; border-radius:20px; box-shadow:0 10px 40px rgba(0,0,0,0.05); height:fit-content;">
                <h3 style="font-size:1.5rem; font-weight:bold; margin-bottom:20px; color:#1e293b;">Bir Mesaj Bırak</h3>
                <form id="loyalty-form" onsubmit="event.preventDefault(); window.addMessage();">
                    <input type="text" id="l-name" placeholder="Adınız Soyadınız" required style="width:100%; padding:10px; margin-bottom:10px; border-radius:8px; border:1px solid #ddd;">
                    <textarea id="l-msg" placeholder="Mesajınız" required rows="4" style="width:100%; padding:10px; margin-bottom:10px; border-radius:8px; border:1px solid #ddd;"></textarea>
                    <button type="submit" style="width:100%; padding:12px; background:#b45309; color:white; border:none; border-radius:10px; cursor:pointer;">Gönder</button>
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

    struggle_independence: `
    <div style="max-width:1100px; margin:2rem auto; padding:1rem; font-family:'Inter',sans-serif;">
        <button onclick="router.navigate('struggle')" style="margin-bottom:2rem; padding:10px 20px; background:#f1f5f9; border:none; border-radius:10px; cursor:pointer;">Geri Dön</button>
        <h1 style="text-align:center; font-size:3.5rem; font-family:'Playfair Display',serif;">Lozan & Bağımsızlık</h1>
    </div>`,

    struggle_modern: `
    <div style="max-width:1200px; margin:2rem auto; padding:1rem; font-family:'Inter',sans-serif;">
        <button onclick="router.navigate('struggle')" style="margin-bottom:2rem; padding:10px 20px; background:#f1f5f9; border:none; border-radius:10px; cursor:pointer;">Geri Dön</button>
        <h1 style="text-align:center; font-size:3.5rem; font-family:'Playfair Display',serif;">Gençliğin İstikbal Analizi</h1>
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
    if (event.state && event.state.page) {
        window.router.navigate(event.state.page, false);
    } else {
        const page = window.location.hash.replace('#', '') || 'home';
        window.router.navigate(page, false);
    }
});

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
                <div style="position:relative; width:150px; height:150px; margin-bottom:1rem;">
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
                <span style="font-weight:bold; color:#334155;">${item.title}</span>
            </div>`;
        }).join('');
    }

    const timelineContainer = document.getElementById('timeline-container');
    if (timelineContainer) {
        timelineContainer.innerHTML = timelineData.map((t, index) => `
            <div style="flex:1; min-width:250px; background:rgba(255,255,255,0.05); padding:2rem; border-radius:20px; border:1px solid rgba(255,255,255,0.1); position:relative;">
                <div style="font-size:4rem; font-weight:900; color:rgba(255,255,255,0.1); position:absolute; top:10px; right:20px;">${t.step}</div>
                <div style="color:#ef4444; font-weight:bold; font-size:0.9rem; margin-bottom:10px;">${t.year}</div>
                <h4 style="font-size:1.4rem; font-weight:bold; margin-bottom:10px;">${t.title}</h4>
                <p style="color:#94a3b8; line-height:1.6;">${t.desc}</p>
            </div>`).join('');
    }
}

function renderPublicity() {
    const container = document.getElementById('publicity-container');
    if (!container) return;
    // (Publicity_Data referansı burada kullanılabilir)
}

function renderLoyalty() {
    const container = document.getElementById('loyalty-list');
    if (!container) return;
    const sortedData = [...LOYALTY_DATA].reverse();
    container.innerHTML = sortedData.map(msg => `
        <div style="background:white; padding:20px; border-radius:15px; border-left:5px solid #b45309; box-shadow:0 5px 15px rgba(0,0,0,0.03); display:flex; gap:15px;">
            <div style="min-width:50px; height:50px; background:#fef3c7; color:#b45309; border-radius:50%; display:flex; align-items:center; justify-content:center; font-weight:bold;">${msg.avatar}</div>
            <div>
                <h4 style="font-weight:bold; margin:0;">${msg.name}</h4>
                <p style="color:#475569; font-style:italic;">"${msg.message}"</p>
                <small style="color:#94a3b8;">${msg.date}</small>
            </div>
        </div>`).join('');
}

window.addMessage = function () {
    const nameInput = document.getElementById('l-name');
    const msgInput = document.getElementById('l-msg');
    const name = nameInput.value;
    const message = msgInput.value;
    if (!name || !message) return alert("Hata");
    const today = new Date();
    const dateStr = today.getDate() + "." + (today.getMonth() + 1) + "." + today.getFullYear();
    messagesRef.push({ name, message, date: dateStr, avatar: name.charAt(0).toUpperCase() })
        .then(() => { document.getElementById('loyalty-form').reset(); alert("Mesaj eklendi!"); });
}

function renderEmpathy() {
    const list = document.getElementById('questions-list');
    if (!list) return;
    list.innerHTML = EMPATHY_QUESTIONS.map((q, index) => `
        <div style="padding:15px; border-bottom:1px solid #eee;">
            <p>${index + 1}. ${q.text}</p>
            <div style="display:flex; gap:10px; margin-top:10px;">
                ${[1, 2, 3, 4, 5].map(v => `<label><input type="radio" name="q${q.id}" value="${v}" required> ${v}</label>`).join('')}
            </div>
        </div>`).join('');
}

window.calculateEmpathy = function () {
    let totalScore = 0;
    EMPATHY_QUESTIONS.forEach(q => {
        const input = document.querySelector(`input[name="q${q.id}"]:checked`);
        if (input) totalScore += parseInt(input.value);
    });
    document.getElementById('empathy-result').style.display = 'block';
    document.getElementById('total-score').innerText = totalScore + "/60";
    scoresRef.push(totalScore);
}

function renderStudentOpinions() {
    const grid = document.getElementById('student-grid');
    if (!grid) return;
    grid.innerHTML = STUDENT_DATA.map(d => `
        <div style="background:white; border-radius:15px; padding:20px; border:1px solid #eee;">
            <h3 style="color:#991b1b; font-weight:bold;">${d.question}</h3>
            <p style="font-size:0.9rem;">${d.analysis}</p>
            ${d.quote ? `<p style="font-style:italic; border-left:3px solid #dc2626; padding-left:10px;">"${d.quote}"</p>` : ''}
        </div>`).join('');
}

function renderAcademic() {
    const grid = document.getElementById('academic-grid');
    if(!grid) return;
    grid.innerHTML = ACADEMIC_DATA.map(p => `<div style="padding:20px; background:white; border-radius:15px; cursor:pointer;" onclick="openInterview('${p.id}')"><h3>${p.name}</h3><small>${p.title}</small></div>`).join('');
}

window.openInterview = (id) => {
    const p = ACADEMIC_DATA.find(x => x.id === id);
    document.getElementById('modal-content').innerHTML = `<h2>${p.name}</h2>` + p.interview.map(i => `<p><b>${i.q}</b><br>${i.a}</p>`).join('');
    document.getElementById('interview-modal').style.display = 'block';
}

window.closeModal = () => document.getElementById('interview-modal').style.display = 'none';

function getHomeContent() {
    return `
    <div class="home-hero">
        <h1 style="font-size:4rem; text-align:center;">İSTİKBAL</h1>
        <div class="feature-grid">
            <div class="feature-card" onclick="router.navigate('struggle')" style="grid-column: span 2; background: linear-gradient(135deg, #7c2d12, #b45309); color:white;">
                <h3 style="font-size:1.8rem;">İstikbal'de Türk Milli Mücadelesi</h3>
                <p>Gazete Manşetlerinden Zafer Yolculuğu</p>
            </div>
            <div class="feature-card" onclick="router.navigate('archive')"><h3>Haber Arşivi</h3></div>
            <div class="feature-card" onclick="router.navigate('sentiment')"><h3>Duygu Analizi</h3></div>
            <div class="feature-card" onclick="router.navigate('about')"><h3>Proje Hakkında</h3></div>
        </div>
    </div>`;
}

function initArchive() {
    window.renderList = (data) => {
        document.getElementById('arc-list').innerHTML = data.map(n => `<div style="padding:15px; border-bottom:1px solid #eee;"><h3>${n.title}</h3><p>${n.content}</p></div>`).join('');
    };
    window.renderList(NEWS_DATA);
}

function initTimeline() {
    setTimeout(() => {
        const mapArea = document.getElementById('map-area');
        if (!mapArea) return;
        const map = L.map('map-area').setView([39.0, 35.0], 6);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
        NEWS_DATA.forEach(n => L.marker([n.lat, n.lng]).addTo(map).bindPopup(`<b>${n.title}</b>`));
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

function renderStruggleHub() {
    const grid = document.getElementById('struggle-hub-grid');
    if (!grid) return;
    grid.innerHTML = NATIONAL_STRUGGLE_HUB.map(item => `
        <div class="hub-card" onclick="router.navigate('${item.id}')" style="background:white; padding:30px; border-radius:20px; border:1px solid #e2e8f0; cursor:pointer;">
            <h3 style="font-family:'Playfair Display',serif;">${item.title}</h3>
            <p style="color:#64748b; font-size:0.9rem;">${item.desc}</p>
        </div>`).join('');
}

function renderBattleNews() {
    const container = document.getElementById('battle-news-container');
    if (!container) return;
    container.innerHTML = BATTLE_NEWS_DATA.map(n => `<div style="background:white; padding:20px; border-radius:15px; margin-bottom:10px;"><h3>${n.title}</h3><p>${n.summary}</p></div>`).join('');
}
];
