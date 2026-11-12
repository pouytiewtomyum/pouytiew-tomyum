import { MenuItem } from "../types/menu";
import { NOODLE_ITEMS } from "./noodles";
import { RICE_ITEMS } from "./rice";
import { APPETIZER_ITEMS } from "./appetizers";
import { DRINK_ITEMS } from "./drinks";
import { ADDON_ITEMS } from "./addons";

// รวมรายการอาหารทั้งหมดสำหรับหน้าแสดงเมนู (Master Menu Items Array)
export const MENU_ITEMS: MenuItem[] = [
  ...NOODLE_ITEMS,
  ...RICE_ITEMS,
  ...APPETIZER_ITEMS,
  ...DRINK_ITEMS,
  ...ADDON_ITEMS,
];

// Re-export all sub-modules for convenience & backward compatibility
export * from "./noodles";
export * from "./broths";
export * from "./appetizers";
export * from "./rice";
export * from "./drinks";
export * from "./addons";
