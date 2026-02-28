/* * ========================================
 * COFFEE ORTEGA - サイト設定ファイル
 * ==========================================
 */

const siteContent = {
    // --- 基本設定 ---
    common: {
        pageTitle: "珈琲オルテガ | COFFEE ORTEGA",
        fontFamily: "'Noto Sans JP', sans-serif", 
        
        links: {
            baseShop: "https://ortegacaffe.base.shop/",
            instagram: "https://www.instagram.com/coffee.ortega/",
            facebook: "https://www.facebook.com/caffe.ortega0102/",
            threads: "https://www.threads.com/@coffee.ortega"
        }
    },

    // --- 画像・アイコン設定 ---
    images: {
        logo: "images/icon/ortega_logo.webp", 
        
        // 画面全体のエフェクト用画像
        noiseOverlay: "images/icon/noise.svg",      
        textureOverlay: "images/icon/texture.webp",    
        
        icons: {
            instagram: "images/icon/instagram.svg",
            facebook: "images/icon/facebook.svg",
            threads: "images/icon/threads.svg"
        }
    },

    // --- ナビゲーションメニュー ---
    nav: {
        logoText: "珈琲オルテガ",
        items: [
            { label: "News", link: "#news" },
            { label: "Concept", link: "#concept" },
            { label: "Menu", link: "#menu" },
            { label: "Store", link: "#onlinestore" },
            { label: "Access", link: "#access" }
        ],
    },

    // --- トップ画像エリア (HERO) ---
    hero: {
        title: "<span class='ib'>私は、</span><br><span class='ib'>私と私の</span><span class='ib'>環境である。</span>",
        subTitle: "<span class='ib'>Yo soy yo</span> <span class='ib'>y mi circunstancia.</span> <br>-José <strong>Ortega</strong> y Gasset-",
        image: "images/top/top.webp"
    },

    // --- ニュース (NEWS) ---
    news: {
        sectionLabel: "News",
        sectionTitle: "Information",
        viewMoreText: "View More on Instagram",
        
        articles: [
            {
                date: "2026.03.01",
                tag: "Open",
                title: "プレオープンのご案内",
                content: `販売中。`,
            },
            {
                date: "2026.02.14",
                tag: "Item",
                title: "テスト2",
                content: `販売中。`,
                image: "images/news/news2.webp"
            },
            {
                date: "2026.02.13",
                tag: "Info",
                title: "テスト1",
                content: `珈琲オルテガのウェブサイトを作ってみた。`,
                image: "" 
            }
        ]
    },

    // --- コンセプト (CONCEPT) ---
    concept: {
        sectionLabel: "CONCEPT",
        title: "<span class='ib'>手廻し焙煎、</span><span class='ib'>ネルドリップ。</span><br><span class='ib'>深煎りを中心とした</span><span class='ib'>余韻と、</span><br><span class='ib'>色気のある</span><span class='ib'>珈琲を。</span>",
        text: `<p>お店のコンセプトとか</p>
               <p>伝えたいこととか</p>`,
        image: "images/concept/concept.webp"
    },

    // --- メニュー (STAND MENU) ---
    menu: {
        sectionLabel: "MENU",
        sectionTitle: "List",
        items: [
            {
                category: "", 
                name: "珈琲",
                subName: "", 
                price: "¥1,000",
                image: "images/menu/menu1.webp" 
            },
            {
                category: "カテゴリ部分",
                name: "コーヒー",
                subName: "紹介文とか",
                price: "¥350 ~",
                image: "" 
            },
        ]
    },

    // --- オンラインストア (STORE) ---
    store: {
        sectionLabel: "Store",
        sectionTitle: "Selected Beans",
        buttonText: "Online Shop<br class='m-br'>（外部サイト<strong>BASE</strong>へ移動します）",
        items: [
            {
                name: "テスト1",
                price: "¥1,000",
                image: "images/store/Beans1.webp"
            },
            {
                name: "テスト2",
                price: "¥900",
                image: "images/store/Beans2.webp"
            },
            {
                name: "テスト3",
                price: "¥1,000",
                image: "images/store/Beans3.webp"
            },
        ]
    },

    // --- アクセス (ACCESS) ---
    access: {
        sectionLabel: "Access",
        sectionTitle: "Location",
        shopName: "珈琲オルテガ",
        subTitle: "",
        
        labels: {
            contact: "Contact / Social",
            open: "Open",
            address: "Address"
        },

        shopImages: [
            "images/location/shop1.webp",
            "images/location/shop2.webp",
            "images/location/shop3.webp"
        ],
        businessHours: "00:00 - 00:00",
        schedule: "<span class='ib'>定休日：土曜・日曜・月曜</span><br><span class='ib'>（臨時休業の場合は、</span><span class='ib'>SNS等で告知いたします）</span>",
        address: "〒957-0231 新潟県新発田市<br>藤塚浜4068-15",
        note: "※店頭販売などの詳細はSNSをご覧ください。",
        email: "ortcaffe.s@gmail.com",
        mapEmbed: "<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3147.588012278159!2d139.03213437427448!3d37.91669140397503!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5ff4c9c230075f3b%3A0xcdc94edecf711aa9!2z44CSOTUxLTgxMjYg5paw5r2f55yM5paw5r2f5biC5Lit5aSu5Yy65a2m5qCh55S66YCa77yS55Wq55S677yV77yZ77yYIOWJsueDueOBvuOBpOOChA!5e0!3m2!1sja!2sjp!4v1772284139444!5m2!1sja!2sjp"
    },

    // --- フッター (FOOTER) ---
    footer: {
        copyRight: "© 2026 珈琲オルテガ All Rights Reserved."
    }

};



