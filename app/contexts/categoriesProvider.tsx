"use client";

import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";
import type { Categories } from "../components/CategorySelection";

export const CategoriesContexts = createContext<{
  categories: Categories;
  setCategories?: Dispatch<SetStateAction<{ categories: Categories }>>;
}>({
  categories: ["All"],
});

export default function CategoriesProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [categories, setCategories] = useState<{
    categories: Categories;
  }>({
    categories: ["All"],
  });
  return (
    <CategoriesContexts.Provider value={{ ...categories, setCategories }}>
      {children}
    </CategoriesContexts.Provider>
  );
}
