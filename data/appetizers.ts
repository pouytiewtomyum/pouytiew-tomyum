import { MenuItem } from "../types/menu";

// รายการของทานเล่น (Appetizers for Menu Grid)
export const APPETIZER_ITEMS: MenuItem[] = [
  {
    id: "app-1",
    name: "Crispy Golden Prawn Wontons",
    nameTh: "เกี๊ยวกุ้งกรอบทองไส้ทะลัก (8 ชิ้น)",
    category: "appetizers",
    description: "Crispy fried golden wontons packed with juicy prawn and minced pork filling. Served with sweet plum chili dip.",
    descriptionTh: "แป้งเกี๊ยวบางกรอบ ไส้กุ้งและหมูสับแน่นๆ จิ้มน้ำจิ้มบ๊วยเจี่ยสูตรโบราณ",
    price: 89,
    image: "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?auto=format&fit=crop&w=800&q=80",
    spiceLevel: 0,
    badge: "Must Try",
  },
  {
    id: "app-2",
    name: "Garlic Pork Cracklings with Roasted Chili Dip",
    nameTh: "กากหมูเจียวโบราณ น้ำพริกเผาโฮมเมด",
    category: "appetizers",
    description: "Freshly rendered crispy pork cracklings with fried garlic shallots and our house-made spicy sweet chili jam.",
    descriptionTh: "กากหมูทอดใหม่ทุกวัน กรอบสนั่นไม่อมน้ำมัน พร้อมน้ำพริกเผารสเข้ม",
    price: 69,
    image: "https://images.unsplash.com/photo-1541544741938-0af808871cc0?auto=format&fit=crop&w=800&q=80",
    spiceLevel: 1,
  },
  {
    id: "app-3",
    name: "Steamed Pork Shumai Dumplings",
    nameTh: "ขนมจีบหมูกุ้งจักรพรรดิ (6 ชิ้น)",
    category: "appetizers",
    description: "Plump steamed dumplings with seasoned pork and whole prawns, topped with crispy garlic and soy vinegar dipping sauce.",
    descriptionTh: "ขนมจีบแป้งบาง ไส้หมูผสมกุ้งเนื้อเด้งฉ่ำ โรยกระเทียมเจียวหอมฟุ้ง",
    price: 99,
    image: "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=800&q=80",
    spiceLevel: 0,
  },
];
