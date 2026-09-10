import type { JSX } from "react/jsx-runtime";

export interface itechnology {
  map(arg0: (technology: any) => JSX.Element): import("react").ReactNode;
  id: string;
  name: string;
  category: string;
  description: string;
  icon: string;
  rating: number;
  difficulty: string;
  badge: string;
}