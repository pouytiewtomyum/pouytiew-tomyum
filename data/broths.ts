import {
  BrothOption,
  ServingStyleOption,
  YumFlavorOption,
  MeatBaseOption,
  WontonOption,
  NoodleOption
} from "../types/menu";

// ตัวเลือกเกี๊ยว (Wonton Options)
export const WONTON_OPTIONS: WontonOption[] = [
  {
    id: "wonton-tom-yum",
    name: "Tom Yum Wonton Soup",
    nameTh: "เกี๊ยวต้มยำ",
    desc: "Crispy golden wontons in our signature spicy & tangy tom yum broth",
    descTh: "เกี๊ยวกรอบทองไส้ทะลักในน้ำซุปต้มยำเข้มข้นถึงใจ",
    price: 20,
  },
  {
    id: "wonton-clear",
    name: "Clear Wonton Soup",
    nameTh: "เกี๊ยวน้ำใส",
    desc: "Crispy golden wontons in a light and aromatic clear broth",
    descTh: "เกี๊ยวกรอบทองไส้ทะลักในน้ำซุปใสหอมกลมกล่อม",
    price: 0,
  },
];


// รูปแบบการเสิร์ฟ: แห้ง / น้ำ
export const SOUP_STYLES: ServingStyleOption[] = [
  {
    id: "soup",
    name: "Soup (Nam)",
    nameTh: "น้ำ (ซดคล่องคอ)",
    desc: "Served with piping hot homemade pork bone & radish broth",
    descTh: "เสิร์ฟพร้อมน้ำซุปเคี่ยวกระดูกหมูและหัวไชเท้าร้อนๆ หอมหวานธรรมชาติ",
  },
  {
    id: "dry",
    name: "Dry (Haeng)",
    nameTh: "แห้ง (คลุกคลิก)",
    desc: "Tossed noodles with crispy garlic oil, seasoning, and crunchy toppings",
    descTh: "เสิร์ฟแบบแห้ง คลุกเคล้ากระเทียมเจียวหอมกรุ่นและซอสสูตรเด็ด",
  },
];

// การปรุงรส: ยำ / ไม่ยำ
export const YUM_OPTIONS: YumFlavorOption[] = [
  {
    id: "yum",
    name: "Tom Yum (Spicy & Tangy)",
    nameTh: "ยำ (ต้มยำมะนาวสดแท้)",
    desc: "Bold 4-flavor harmony: spicy, sour, sweet, salty with 100% fresh lime and roasted peanuts",
    descTh: "รสชาติครบ 4 รส เปรี้ยวมะนาวสดแท้ เผ็ด หวาน เค็ม พร้อมถั่วคั่วใหม่",
  },
  {
    id: "no-yum",
    name: "Original / Non-Spicy",
    nameTh: "ไม่ยำ (ธรรมดากลมกล่อม)",
    desc: "Mild, fragrant, and rich broth without chili heat, soothing and kid-friendly",
    descTh: "รสชาติน้ำซุปกลมกล่อมตามธรรมชาติ ไม่เผ็ด ซดง่าย เด็กทานได้",
  },
];

// เบสเนื้อสัตว์และน้ำซุป: หมู / ไก่ตุ๋น / เย็นตาโฟ
export const MEAT_BASES: MeatBaseOption[] = [
  {
    id: "pork",
    name: "Pork (Moo)",
    nameTh: "หมู (หมูสับ/หมูชิ้น/ลูกชิ้น)",
    desc: "Tender marinated pork, minced pork patty, and premium pork balls in rich pork bone & radish broth",
    descTh: "หมูสับนุ่ม หมูชิ้นหมัก และลูกชิ้นหมูแท้ ในน้ำซุปเคี่ยวกระดูกหมูและหัวไชเท้า",
    color: "from-rose-500 to-amber-500",
  },
  {
    id: "chicken",
    name: "Braised Chicken (Gai Tun)",
    nameTh: "ไก่ตุ๋น",
    desc: "Slow-braised chicken cooked with aromatic Thai-Chinese herbs until melt-in-your-mouth tender",
    descTh: "ไก่ตุ๋นยาจีนหอมกรุ่น เนื้อเปื่อยนุ่มร่อน ละมุนลิ้น",
    color: "from-amber-500 to-orange-600",
  },
  {
    id: "yentafo",
    name: "Yen Ta Fo (Pink Noodle)",
    nameTh: "เย็นตาโฟ",
    desc: "Classic pink fermented bean curd sauce, crispy squid, fish balls, and fresh morning glory",
    descTh: "ซอสเย็นตาโฟเต้าหู้ยี้สูตรเข้มข้น รสเปรี้ยวหวานกลมกล่อม เครื่องแน่นเต็มชาม",
    color: "from-pink-500 to-rose-600",
  },
];

// ตัวเลือกเส้น (Noodle Type Choices)
export const NOODLE_OPTIONS: NoodleOption[] = [
  { id: "sen-lek", name: "Sen Lek (Rice Stick Noodles)", nameTh: "เส้นเล็ก", desc: "Classic chewy noodles, absorbs maximum broth flavor", icon: "🍜" },
  { id: "bamee", name: "Bamee (Egg Noodle)", nameTh: "บะหมี่", desc: "Golden springy egg noodles with rich aroma", icon: "🥣" },
  { id: "sen-yai", name: "Sen Yai (Flat Noodles)", nameTh: "เส้นใหญ่", desc: "Silky flat ribbons, tender and smooth texture", icon: "🥢" },
  { id: "sen-mee", name: "Sen Mee (Rice Vermicelli)", nameTh: "เส้นหมี่", desc: "Delicate thin vermicelli noodles", icon: "🍜" },
  { id: "woon-sen", name: "Woon Sen (Glass Noodle)", nameTh: "วุ้นเส้น", desc: "Light, translucent, healthy & low calorie", icon: "✨" },
  { id: "mama", name: "Mama (Instant Noodle)", nameTh: "มาม่า", desc: "Iconic crimped street-food noodles, crispy bite", icon: "🔥" },
  { id: "kao-lhao", name: "Kao Lhao (Without Noodles)", nameTh: "เกาเหลา", desc: "No noodles, double portion of greens and savory broth", icon: "🥣" },
];

// รายการตัวเลือกน้ำซุปแบบละเอียด (12 รูปแบบผสมผสาน)

