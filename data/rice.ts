import { MenuItem } from "../types/menu";

// รายการเมนูข้าว (Rice Dishes for Menu Grid)
export const RICE_ITEMS: MenuItem[] = [
  {
    id: "rice-1",
    name: "Daily Rotating Spicy Curry with Rice",
    nameTh: "ข้าวราดแกงรสจัดจ้าน (เปลี่ยนเมนูทุกวัน)",
    category: "rice",
    description: "Authentic, intensely flavored daily rotating Thai curries and stir-fries served over steaming Jasmine rice.",
    descriptionTh: "แกงไทยรสเด็ดสูตรเข้มข้น ผลัดเปลี่ยนหมุนเวียนทุกวัน อร่อยจัดจ้านถึงเครื่อง",
    price: 50,
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
    spiceLevel: 2,
    badge: "Popular",
  },
];
