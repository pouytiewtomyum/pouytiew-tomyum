import { MenuItem, ToppingOption } from "../types/menu";

// รายการท็อปปิ้งเพิ่มเติม (Add-on Items for Menu Grid)
export const ADDON_ITEMS: MenuItem[] = [
  {
    id: "addon-onsen",
    name: "Onsen Egg",
    nameTh: "ไข่ออนเซ็น",
    category: "add-ons",
    description: "Silky soft Japanese-style poached onsen egg with gooey yolk.",
    descriptionTh: "ไข่ออนเซ็นนุ่มละมุน ไข่แดงเยิ้ม เพิ่มความฟินกลมกล่อม",
    price: 10,
    image: "https://images.unsplash.com/photo-1582169296194-e4d644c48063?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "addon-boiled-egg",
    name: "Boiled Egg",
    nameTh: "ไข่ต้ม",
    category: "add-ons",
    description: "Freshly boiled chicken egg, tender and high in protein.",
    descriptionTh: "ไข่ต้มสุกกำลังดี เพิ่มโปรตีนเต็มคำเข้ากับน้ำต้มยำ",
    price: 10,
    image: "https://images.unsplash.com/photo-1506976785307-8732e854ad03?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "addon-fried-egg",
    name: "Crispy Fried Egg",
    nameTh: "ไข่ดาว",
    category: "add-ons",
    description: "Golden crispy fried egg with a rich soft center.",
    descriptionTh: "ไข่ดาวขอบกรอบฟู ไข่แดงเยิ้ม อร่อยฟินทั้งทานคู่ก๋วยเตี๋ยวและข้าวแกง",
    price: 10,
    image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "addon-cheese-sausage",
    name: "Cheese Sausage",
    nameTh: "ไส้กรอกชีส",
    category: "add-ons",
    description: "Tender savory sausage stuffed with melted rich cheese.",
    descriptionTh: "ไส้กรอกหนังกรอบ สอดไส้ชีสเยิ้มหอมมัน รสกลมกล่อม",
    price: 10,
    image: "https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?auto=format&fit=crop&w=800&q=80",
  },
];
