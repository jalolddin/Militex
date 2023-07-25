import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/scss/style.scss'
import { createI18n } from 'vue-i18n'
import ToastPlugin from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-bootstrap.css';
const i18n = createI18n({
  locale: 'ru',
  messages: {
    ru: {
        scroll: 'Прокрутить Вниз',
        main: "Главная",
        about: "О Mili Tex Group",
        production: "Продукция",
        contacts: 'Контакты',
        headerTitle: 'Текстильные продукции <br> высокого качества <br> в "Mili Tex Group"',
        headerDescription: '"Mili Tex Group" является одним из ведущих производителей высококачественной 100% х/б <br class="desktop-only"> пряжи экспортирующей продукцию собственного производства. ',
        connect: 'Cвязаться',
        weProduct: 'У нас производятся <br> такие продукции',
        cotton: 'Хлопчатобумажная пряжа кардная <br class="desktop-only"> Ne 32/1, 100%',
        aboutCompany: ' Компания "Mili Tex Group"( Узбекистан) выражает Вам свое почтение и предлагает 100% хлопковую пряжу для трикотажа и тканей пневмопрядильного...',
        yarn: 'Пряжа 100% х/б, сурова, кардная, ткацкая, пневмопрядельная хлопчатобумажная OE NE 20/1',
        yarnDesc: 'Производство и продажа х/б пряжи пневмомеханического способа прядения для трикотажного и ткацкого назначения Ne (Oe) 20-30/1, Nm 34-50/1...',
        inNumbers: 'МЫ В ЦЫФРАХ',
        numberOne: '"Mili Tex Group" является одним из ведущих <br class="desktop-only"> производи<span class="hyphen">-</span>телей Нашей страны',
        mainDepartments: 'Основные виды деятельности MILI TEX GROUP прядение волокон, оптовая торговля. Отличительны черты нашей организации – это создание и стратегическое развитие лучшей Узбекской текстильной компании мирового уровня, обеспечивающей текстильный рынок России, Европы и азиатские страны.',
        inMarket: 'Лет опыта <br class="desktop-only"> на рынке',
        tonns: 'Тонн в сутки <br class="desktop-only"> прядельного шелка',
        employees: 'Сотруднтков работают <br class="desktop-only"> в "Mili Tex Group"',
        advantages: 'НАШИ ПРЕИМУЩЕСТВА',
        whatAdvantages: 'Какие преимущества у нас есть перед другими',
        cooperation: 'СОТРУДНИЧЕСТВО',
        countries: 'C какими странами мы сотрудничаем?',
        export: 'Мы экспортируем свою продукцию во многие страны, в особенности капитала с энтузиазмом, особенно: Россия, Китай, Турция, и другие',
        contactUs: 'Cвяжитесь с нами и <br>начните сотрудничес<span class="hyphen">  - </span>тво сегодня',
        contactDesc: 'Постепенно создавайте синергетические общие связи с помощью кросс-<br class="desktop-only">медийного интеллектуального капитала. с энтузиазмом',
        pages: 'Страницы',
        yarn32: 'Пряжа кардная Ne 32/1, 100%',
        yarn30: 'Пряжа кардная Ne 30/1, 100%',
        cottonYarn32: 'Хлопчатобумажная пряжа кардная пневмопрядельная Ne 32/1, 100%',
        cottonYarn30: 'Хлопчатобумажная пряжа кардная пневмопрядельная Ne 30/1, 100%',
        yarnNe: 'Пряжа кардная пневмопрядельная <br> Ne 32/1, 100%',
        address: 'Узбекистан, г.Ташкент, Чиланзарский район, 10 квартал 14А',
        tashkent: 'Ташкент',
        guliston: 'Гулистон',
        tashkentAddress: 'Чилонзор тумани, кўтарма <br > маҳалласи, 14 А',
        gulistonAddress: 'Сырдарьинская область, г. <br> Гулистан, ул. Айланма 1',
        gulistonAddress2: 'Сырдарьинская область, Гулистан <br> р-н, Зарбдор КФЙ Ишонч СИУ',
        knowHistory: 'Вы можете узнать про <br> нашу историю',
        china: 'Китай',
        russia: 'Россия',
        turkey: 'Турция',
        egypt: 'Египет',
        polish: 'Польша',
        kazax: 'Казахстан',
        uk: 'Великобритания',
        union: 'Европейский Союз',
        canHelp: 'КОМУ МЫ МОЖЕМ ПОМОЧЬ',
        equipment: 'ОБОРУДОВАНИЕ',
        newTech: 'Наши продукции производятся новейшими технологиями',
        difficultOrder: 'Сложные заказы в любых объёмах',
        orderDesc: '"Mili Tex Group" является одним из ведущих <br class="desktop-only"> производителей высококачественной 100% х/<br class="desktop-only">б пряжи экспортирующей продукцию <br class="desktop-only"> собственного производства. Наши <br class="desktop-only"> производственные мощности позволяют выполнять <br class="desktop-only"> компания выпускает продукции основываясь на <br class="desktop-only"> экологичности производства и соответствии <br class="desktop-only"> международным стандартам. Имея соответствующую<br class="desktop-only"> производственную базу, которая состоит из<br class="desktop-only"> сотрудников с большим опытом работы и<br class="desktop-only"> современного оборудования,<br class="desktop-only"> компания выпускает продукции,<br class="desktop-only"> экологичность производства и соответствие<br class="desktop-only"> международным стандартам.',
        product__1: 'У нас имеется новейшие оборудование (Швейцария),  TRUTZSCHLER, SAUREP JINTAN, Schlafhorst Autoconer 6 и многое другое. Производственные мощности прядильного производства сегодня перерабатывают 25 тонн сырья в сутки.',
        product__2: 'Rieter (Щвейцария), Savio (Италия) SAURER JITAN и много другое. Производственные мощности прядильного производства сегодня перерабатывают 10 тонн сырья в сутки.',
        product__3: 'Встречайте новый Nissan Pathfinder! Оцените по достоинству его впечатляющий дизайн. Выразительные простые линии придают кузову современный, решительный внешний вид. Хотите проявить больше индивидуальности? Выбирайте двухцветную окраску кузова!Светодиодные фары и ходовые огни в сочетании с массивной решеткой радиатора V–Motion делают внешность Nissan Pathfinder заметной и запоминающейся.',
        schlarft: 'Как и прежде, компания Schlafhorst предлагает градуированные решения по автоматизации, которые подбираются индивидуально для каждого клиента в соответствии с его внутренними процессами путем выбора соответствующего типа машины, а также требуемой обработки катушек и трубок.',
        quality: 'Качество',
        qualityDesc: 'Высококачественная продукция соответсвующая всем нормам и предлагающая взаимовыгодное сотрудничество',
        ecological: 'Экологичность',
        ecologicalDesc: 'Экологичность производства и соответствие международным стандартам',
        quality100: 'Качество на все 100',
        send: "Отправить",
        name: 'Имя',
        number: 'Номер телефона'
      },
    en: {
      scroll: 'Scroll Down',
      main: "Home",
      about: "About Us",
      production: "Production",
      contacts: 'Contacts',
      headerTitle: 'High quality <br> textile products in <br> MiliTex Group ',
      headerDescription: '"Mili Tex Group" is a manufacturer of one of the manufacturers of 100% cotton <br class="desktop-only"> yarn exporting products of own production.',
      connect: 'Contact',
      weProduct: 'We are producing <br> such products',
      cotton: 'Carded cotton yarn <br class="desktop-only"> Ne 32/1, 100%',
      aboutCompany: ' The company "Mili Tex Group" (Uzbekistan) expresses its respect to you and offers 100% cotton yarn for knitwear and rotor spinning fabrics...',
      yarn: 'Yarn 100% cotton, gray, carded, weaving, rotor-spun cotton OE NE 20/1',
      yarnDesc: 'Production and sale of cotton yarn of pneumomechanical spinning for knitting and weaving purposes Ne (Oe) 20-30/1, Nm 34-50/1... ',
      inNumbers: 'WE ARE IN NUMBERS',
      numberOne: ' "Mili Tex Group" is one of the leading <br class="desktop-only"> manufacturers of our country ',
      mainDepartments: 'Principal activities of MILI TEX GROUP fiber spinning, wholesale trade. The distinctive features of our organization are the creation and strategic development of the best world-class Uzbek textile company, providing the textile market of Russia, Europe and Asian countries.',
      inMarket: 'Years of experience <br class="desktop-only"> in the market',
      tonns: 'Tons per day <br class="desktop-only"> of spinning silk',
      employees: 'Employees work <br class="desktop-only"> in "Mili Tex Group"',
      advantages: 'OUR ADVANTAGES',
      whatAdvantages: 'What advantages do we have over others?',
      cooperation: 'COOPERATION',
      countries: 'Which countries do we cooperate with?',
      export: 'We export our products to many countries, especially: Russia, China, Turkey and others.',
      contactUs: 'Contact us and start <br> cooperation today ',
      contactDesc: 'Gradually build synergistic shared connections with cross-media <br class="desktop-only"> intellectual capital enthusiastically Contact',
      pages: 'Pages',
      cottonYarn32: 'Cotton yarn carded rotor spinning Ne 32/1, 100%',
      cottonYarn30: 'Cotton yarn carded rotor spinning Ne 30/1, 100%',
      yarn32: 'Carded yarn Ne 32/1, 100%',
      yarn30: 'Carded yarn Ne 30/1, 100%',
      yarnNe: 'Rotor-spinning carded yarn <br> Ne 32/1, 100%',
      address: 'Uzbekistan, Tashkent, Chilanzar district, 10 quarter 14A',
      tashkent: 'Tashkent',
      guliston: 'Guliston',
      tashkentAddress: 'Chilonzor tumi, kўtarma <br> mahallasi, 14 A',
      gulistonAddress: 'Syrdarya region, g. <br> Gulistan, st. Aylanma 1',
      gulistonAddress2: 'Syrdarya region, Gulistan <br> district, Zarbdor KFY Ishonch SIU',
      knowHistory: 'You can learn about <br> our history',
      china: 'China',
      russia: 'Russia',
      turkey: 'Turkey',
      egypt: 'Egypt',
      polish: 'Poland',
      kazax: 'Kazakhstan',
      uk: 'UK',
      union: 'European Union',
      canHelp: 'WHO WE CAN HELP',
      equipment: 'EQUIPMENT',
      newTech: 'Our products are manufactured with the latest technology',
      difficultOrder: 'Complex orders in any volume',
      orderDesc: '"Mili Tex Group" is one of the leading <br class="desktop-only"> manufacturers of high-quality <br class="desktop-only"> yarn exporting its own products. Our <br class="desktop-only"> manufacturing facilities enable us to <br class="desktop-only"> manufacture products based on <br class="desktop-only"> environmental friendliness and compliance with <br class="desktop-only"> international standards. Having an appropriate<br class="desktop-only"> production base, which consists of <br class="desktop-only"> employees with extensive experience and<br class="desktop-only"> modern equipment,<br class="desktop-only"> the company produces products that<br class="desktop-only"> are environmentally friendly and conform to<br class="desktop-only"> international standards.',
      product__1: 'We have the latest equipment (Switzerland), TRUTZSCHLER, SAURER JINTAN, Schlafhorst Autoconer 6 and much more. The production capacities of the spinning mill today process 25 tons of raw materials per day.',
      product__2: 'Rieter (Switzerland), Savio (Italy) SAURER JITAN and much more. The production capacities of the spinning mill today process 10 tons of raw materials per day.',
      product__3: 'Meet the new Nissan Pathfinder! Check out its impressive design. Expressive, simple lines give the body a modern, resolute appearance. Want to show more personality? Choose from a two-tone body color! LED headlights and daytime running lights, combined with a massive V-Motion grille, make the Nissan Pathfinder look noticeable and memorable.',
      schlarft: 'As before, Schlafhorst offers graduated automation solutions that are individually specified for each customer in compliance with his internal processes by choosing the matching machine type, as well as the desired bobbin and tube handling.',
      quality: 'Quality',
      qualityDesc: 'High-quality products that meet all standards and offer mutually beneficial cooperation',
      ecological: 'Environmental friendliness',
      ecologicalDesc: 'Environmentally friendly production and compliance with international standards',
      quality100: 'Quality for all 100',
      send: "Send",
      name: 'Name',
      number: 'Phone number'
    }
  }
  })
  

createApp(App).use(store).use(router).use(i18n).use(ToastPlugin).mount('#app')
