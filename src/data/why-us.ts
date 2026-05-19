import {
  Car,
  Cloud,
  GraduationCap,
  HeartPulse,
  Landmark,
  Leaf,
  Scale,
  ShoppingCart,
  Wallet,
  Users,
} from "lucide-react";

export const acrosticLetters = ["c", "o1", "d", "o2", "l", "i", "s"] as const;

export const industries = [
  { key: "energy", icon: Cloud },
  { key: "automotive", icon: Car },
  { key: "legal", icon: Scale },
  { key: "healthcare", icon: HeartPulse },
  { key: "business", icon: Users },
  { key: "education", icon: GraduationCap },
  { key: "smartCities", icon: Landmark },
  { key: "agriculture", icon: Leaf },
  { key: "retail", icon: ShoppingCart },
  { key: "finance", icon: Wallet },
] as const;

export const differences = [
  { key: "team", icon: "team" },
  { key: "agile", icon: "agile" },
  { key: "ai", icon: "ai" },
  { key: "partner", icon: "partner" },
] as const;
