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
                date: "2026.02.15",
                tag: "Event",
                title: "テスト3",
                content: `いつも珈琲オルテガをご利用いただきありがとうございます。<br>皆様のご来店を心よりお待ちしております。`,
                image: "images/news/news3.webp"
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
        mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3142.6604879402043!2d139.3043805742819!3d38.03169379732157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5f8b381c4c277651%3A0x25f67ea8758b7a0e!2z44CSOTU3LTAyMzEg5paw5r2f55yM5paw55m655Sw5biC6Jek5aGa5rWc77yU77yQ77yW77yY4oiS77yR77yV!5e0!3m2!1sja!2sjp!4v1770901552253!5m2!1sja!2sjp"
    },

    // --- フッター (FOOTER) ---
    footer: {
        copyRight: "© 2026 珈琲オルテガ All Rights Reserved."
    }

};
