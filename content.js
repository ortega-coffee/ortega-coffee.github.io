/* * ========================================
 * 珈琲オルテガ - サイト設定ファイル
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
        logo: "images/icon/ortega_logo.gif", 
        
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
    date: "2026.04.11",
    tag: "Media",
    title: "「Things」様にてご紹介いただきました",
    content: `新潟のウェブマガジン「Things」様にて、珈琲オルテガの店舗情報を記事にしていただきました。ぜひご覧ください。

▼掲載記事はこちら
<a href="https://gata21.jp/archives/96842261.html" target="_blank" rel="noopener noreferrer" class="text-stone-300 underline underline-offset-4 hover:text-white transition-colors">https://things-niigata.jp/other/coffee-ortega-2/</a>`,
    image: "" 
},
            {
    date: "2026.03.15",
    tag: "Media",
    title: "「にいがた速報」様にてご紹介いただきました",
    content: `新潟の地域情報サイト「にいがた速報」様にて、珈琲オルテガのオープン情報を記事にしていただきました。ぜひご覧ください。

▼掲載記事はこちら
<a href="https://gata21.jp/archives/96842261.html" target="_blank" rel="noopener noreferrer" class="text-stone-300 underline underline-offset-4 hover:text-white transition-colors">https://gata21.jp/archives/96842261.html</a>`,
    image: "" 
},
            {
                date: "2026.03.01",
                tag: "Notice",
                title: "ご来店時のお願いとご案内",
                content: `大切なお客様へ、いくつかお願いがございます。
                
・1杯ずつお作りする為、ご提供まで気長にお待ち下さい
・お支払いは【現金のみ】となります。
・専用駐車場はございません。お車でお越しの際は、近隣のコインパーキングをご利用ください。
・当店周辺は閑静な住宅街のため、路上駐車や騒音等、周囲へのご配慮を心よりお願い申し上げます。

皆さまと心地よい時間を共有できるよう、ご理解とご協力をお願い申し上げます。`,
                image: "" 
            },
        ]
    },

    // --- コンセプト (CONCEPT) ---
    concept: {
        sectionLabel: "CONCEPT",
        title: "<span class='ib'>手廻し焙煎、</span><span class='ib'>ネルドリップ。</span><br><span class='ib'>深煎りを中心とした</span><span class='ib'>余韻と、</span><br><span class='ib'>色気のある</span><span class='ib'>珈琲を。</span>",
        text: `<p></p>
               <p></p>`,
        image: "images/concept/concept.webp"
    },

    // --- メニュー (STAND MENU) ---
    menu: {
        sectionLabel: "MENU",
        sectionTitle: "COMING SOON", // 普段であればListの文字で。今はCOMING SOONに。
        items: [
            {
                category: "", 
                name: "準備中です。解禁まで、今しばらくお待ちください。※Instagramで掲載している場合もあります。",
                subName: "", 
                price: "",
                image: "" 
            },
        ]
    },

    // --- オンラインストア (STORE) ---
    store: {
        sectionLabel: "Store",
        sectionTitle: "Selected Beans",
        note: "※売り切れの際はご容赦ください",
        buttonText: "Online Shop<br class='m-br'>（外部サイト<strong>BASE</strong>へ移動します）",
        items: [
            {
                name: "エルサルバドル マラカラ・ウォッシュド（中深煎り）",
                price: "¥950",
                image: "images/store/Beans1.webp"
            },
            {
                name: "エチオピア イルガチェ・イディド・W（中深煎り）",
                price: "¥950",
                image: "images/store/Beans2.webp"
            },
            {
                name: "ルワンダ キニニ・ターナー（深煎り）",
                price: "¥900",
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
            "images/location/shop4.webp",
            "images/location/shop1.webp",
            "images/location/shop6.webp",
            "images/location/shop3.webp",
            "images/location/shop5.webp",
        ],
        businessHours: "平日（火-木）/ 12:00-19:00金・土/ 13:00-21:00日/ 12:00-18:00※各日、閉店30分前l.o12:00 - 19:00（各日閉店30分前L.o.）",
        schedule: "<span class='ib'>定休日：月曜+不定休</span><br><span class='ib'> ※臨時休業の場合は、</span><span class='ib'>SNS等で告知いたします</span>",
        address: "〒951-8126 新潟県新潟市中央区<br>学校町通2-598（衣屋さん隣）",
        note: "※店頭販売などの詳細はSNSをご覧ください。",
        email: "ortcaffe.s@gmail.com",
        mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3147.5714775316455!2d139.0341446!3d37.91707780000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5ff4c93e1ca6fa35%3A0x20f8d823c9e93578!2z44Kq44Or44OG44Ks!5e0!3m2!1sja!2sjp!4v1773545228845!5m2!1sja!2sjp"
    },

    // --- フッター (FOOTER) ---
    footer: {
        privacyNotice: "当サイトでは、Googleによるアクセス解析ツール「Googleアナリティクス」を使用しています。このデータは匿名で収集されており、個人を特定するものではありません。詳細はGoogleの<a href='https://policies.google.com/technologies/ads?hl=ja' target='_blank' rel='noopener noreferrer' class='underline hover:text-stone-500 transition-colors'>規約</a>をご覧ください。",
        copyRight: "© 2026 珈琲オルテガ All Rights Reserved."
    }

};
