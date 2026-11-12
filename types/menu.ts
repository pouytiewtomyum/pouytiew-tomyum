export type SpiceLevel = 0 | 1 | 2;

export interface MenuItem {
  id: string;
  name: string;
  nameTh: string;
  category: "noodle" | "rice" | "appetizers" | "drinks" | "desserts";
  description: string;
  descriptionTh: string;
  price: number;
  image: string;
  spiceLevel: SpiceLevel;
  badge?: "Bestseller" | "Chef Choice" | "Must Try" | "Signature" | "Popular";
  calories?: string;
  isVegetarian?: boolean;
}

export interface NoodleOption {
  id: string;
  name: string;
  nameTh: string;
  desc: string;
  icon: string;
}

export interface BrothOption {
  id: string;
  name: string;
  nameTh: string;
  desc: string;
  extraPrice: number;
  spiceDefault: SpiceLevel;
  color: string;
}

export interface ToppingOption {
  id: string;
  name: string;
  nameTh: string;
  price: number;
  category: "meat" | "seafood" | "crunchy" | "egg";
}

export interface CustomBowlOrder {
  noodle: string;
  broth: string;
  spiceLevel: SpiceLevel;
  toppings: string[];
}

export interface CartItem {
  id: string;
  title: string;
  titleTh?: string;
  price: number;
  quantity: number;
  image?: string;
  spiceLevel?: SpiceLevel;
  details?: string;
}

export interface ReviewItem {
  id: string;
  name: string;
  role: string;
  avatar: string;
  rating: number;
  comment: string;
  commentTh: string;
  dishLoved: string;
  verified: boolean;
}

export interface BranchInfo {
  id: string;
  name: string;
  nameTh: string;
  address: string;
  hours: string;
  phone: string;
  mapLink: string;
  status: "Open Now" | "Closing Soon";
}
