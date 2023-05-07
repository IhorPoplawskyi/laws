export let categories =  ['піднайом', 'кодекси', 'казначейство', 'статути', 'забезпечення', 'соц. захист', 'реєстрація м.п.']

categories = categories.sort((a, b) => a.localeCompare(b));

export let laws = [
  {
    name: 'НАКАЗ МІНІСТЕРСТВО ОБОРОНИ УКРАЇНИ 31.07.2018  № 380 Про затвердження Інструкції з організації забезпечення військовослужбовців Збройних Сил України та членів їх сімей жилими приміщеннями',
    href: 'https://zakon.rada.gov.ua/laws/show/z1020-18#Text',
    category: 'піднайом'
  },
  {
    name: 'КАБІНЕТ МІНІСТРІВ УКРАЇНИ ПОСТАНОВА від 26 червня 2013р. № 450 Київ  Про розмір і порядок виплати грошової компенсації військовослужбовцям Збройних Сил, Національної гвардії, Служби безпеки, розвідувальних органів, Державної прикордонної служби, Державної служби спеціального зв’язку та захисту інформації, Державної спеціальної служби транспорту, Управління державної охорони та військовослужбовцям, відрядженим до Міністерства освіти і науки, Державного космічного агентства, за піднайом (найом) ними житлових приміщень',
    href: 'https://zakon.rada.gov.ua/laws/show/450-2013-%D0%BF#Text',
    category: 'піднайом'
  },
  {
    name: 'Наказ Міністерства оборони України від 30.12.2016 року № 744 ІНСТРУКЦІЯ з організації претензійної та позовної роботи, самопредставництва, представництва інтересів Міністерства оборони України та Збройних Сил України у судах та інших державних органах, виконання судових рішень',
    href: '/nakaz744',
  },
  {
    name: 'КОДЕКС АДМІНІСТРАТИВНОГО СУДОЧИНСТВА УКРАЇНИ',
    href: 'https://zakon.rada.gov.ua/laws/show/2747-15',
    category: 'кодекси'
  },
  {
    name: 'Кодекс України про адміністративні правопорушення ч.1',
    href: 'https://zakon.rada.gov.ua/laws/show/2747-15',
    category: 'кодекси'
  },
  {
    name: 'Кодекс України про адміністративні правопорушення ч.2',
    href: 'https://zakon.rada.gov.ua/laws/show/80732-10',
    category: 'кодекси'
  },
  {
    name: 'КРИМІНАЛЬНИЙ КОДЕКС УКРАЇНИ',
    href: 'https://zakon.rada.gov.ua/laws/show/2341-14#Text',
    category: 'кодекси'
  },
  {
    name: 'КРИМІНАЛЬНИЙ  ПРОЦЕСУАЛЬНИЙ  КОДЕКС  УКРАЇНИ',
    href: 'https://zakon.rada.gov.ua/laws/show/4651-17#Text',
    category: 'кодекси'
  },
  {
    name: 'ЦИВІЛЬНИЙ КОДЕКС УКРАЇНИ',
    href: 'https://zakon.rada.gov.ua/laws/show/435-15#Text',
    category: 'кодекси'
  },
  {
    name: 'ЦИВІЛЬНИЙ ПРОЦЕСУАЛЬНИЙ КОДЕКС УКРАЇНИ',
    href: 'https://zakon.rada.gov.ua/laws/show/1618-15',
    category: 'кодекси'
  },
  {
    name: 'ГОСПОДАРСЬКИЙ ПРОЦЕСУАЛЬНИЙ КОДЕКС УКРАЇНИ',
    href: 'https://zakon.rada.gov.ua/laws/show/1798-12',
    category: 'кодекси'
  },
  {
    name: 'Кодекс законів про працю України',
    href: 'https://zakon.rada.gov.ua/laws/show/322-08#Text',
    category: 'кодекси'
  },
  {
    name: 'МИТНИЙ  КОДЕКС  УКРАЇНИ',
    href: 'https://zakon.rada.gov.ua/laws/show/4495-17#Text',
    category: 'кодекси'
  },
  {
    name: 'ЗЕМЕЛЬНИЙ  КОДЕКС  УКРАЇНИ',
    href: 'https://zakon.rada.gov.ua/laws/show/2768-14#Text',
    category: 'кодекси'
  },
  {
    name: 'ВОДНИЙ КОДЕКС УКРАЇНИ',
    href: 'https://zakon.rada.gov.ua/laws/show/213/95-%D0%B2%D1%80#Text',
    category: 'кодекси'
  },
  {
    name: 'ПОВІТРЯНИЙ  КОДЕКС  УКРАЇНИ',
    href: 'https://zakon.rada.gov.ua/laws/show/3393-17#Text',
    category: 'кодекси'
  },
  {
    name: 'ПОСТАНОВА КАБІНЕТ МІНІСТРІВ УКРАЇНИ від 3 серпня 2011 р. N 845 Про затвердження Порядку виконання рішень про стягнення коштів державного та місцевих бюджетів або боржників',
    href: 'https://zakon.rada.gov.ua/laws/show/845-2011-%D0%BF#Text',
    category: 'казначейство'
  },
  {
    name: 'НАКАЗ МІНІСТЕРСТВО ФІНАНСІВ УКРАЇНИ 03.09.2013 № 787 Про затвердження Порядку повернення (перерахування) коштів, помилково або надміру зарахованих до державного та місцевих бюджетів',
    href: 'https://zakon.rada.gov.ua/laws/show/z1650-13#Text',
    category: 'казначейство'
  },
  {
    name: 'Про Статут внутрішньої служби Збройних Сил України',
    href: 'https://zakon.rada.gov.ua/laws/show/548-14#Text',
    category: 'статути'
  },
  {
    name: 'Про Дисциплінарний статут Збройних Сил України',
    href: 'https://zakon.rada.gov.ua/laws/show/551-14#Text',
    category: 'статути'
  },
  {
    name: 'Про Статут гарнізонної та вартової служб Збройних Сил України',
    href: 'https://zakon.rada.gov.ua/laws/show/550-14#Text',
    category: 'статути'
  },
  {
    name: 'Про Стройовий статут Збройних Сил України',
    href: 'https://zakon.rada.gov.ua/laws/show/549-14#Text',
    category: 'статути'
  },
  {
    name: 'НАКАЗ МІНІСТЕРСТВО ОБОРОНИ УКРАЇНИ 07.06.2018  № 260 Про затвердження Порядку виплати грошового забезпечення військовослужбовцям Збройних Сил України та деяким іншим особам',
    href: 'https://zakon.rada.gov.ua/laws/show/z0745-18#Text',
    category: 'забезпечення'
  },
  {
    name: 'ПОСТАНОВА КАБІНЕТ МІНІСТРІВ УКРАЇНИ від 30 серпня 2017 р. № 704 Київ Про грошове забезпечення військовослужбовців, осіб рядового і начальницького складу та деяких інших осіб',
    href: 'https://zakon.rada.gov.ua/laws/show/704-2017-%D0%BF#Text',
    category: 'забезпечення'
  },
  {
    name: 'Про соціальний і правовий захист військовослужбовців та членів їх сімей',
    href: 'https://zakon.rada.gov.ua/laws/show/2011-12#Text',
    category: 'соц. захист'
  },
  {
    name: 'Деякі питання декларування і реєстрації місця проживання та ведення реєстрів територіальних громад',
    href: 'https://zakon.rada.gov.ua/laws/show/265-2022-%D0%BF#Text',
    category: 'реєстрація м.п.'
  },
  {
    name: 'ЗАКОН УКРАЇНИ Про надання публічних (електронних публічних) послуг щодо декларування та реєстрації місця проживання в Україні',
    href: 'https://zakon.rada.gov.ua/laws/show/1871-20#Text',
    category: 'реєстрація м.п.'
  },
]