import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge"; // merges tailwing classes so as to avoid duplicate classes etc

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
