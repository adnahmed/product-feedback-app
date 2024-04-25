"use client";
import data from "@/app/data.json";
import { useContext } from "react";
import { CategoriesContexts } from "../contexts/categoriesProvider";
import { tw } from "../lib/tailwindest";
import { LinkButton } from "./LinkButton";
export const categories = ["All"].concat([
  ...new Set(
    data.productRequests.map((productRequest) => productRequest.category),
  ),
]);
export type Categories = typeof categories;
const categoriesContainer = tw.style({
  display: "flex",
  maxWidth: "max-w-[223px]",
  gap: "gap-[8px]",
  flexWrap: "flex-wrap",
  paddingY: "py-[24px]",
  paddingX: "px-[18px]",
  borderRadius: "rounded-md",
});
export function CategorySelection() {
  const { categories: selectedCategories, setCategories } =
    useContext(CategoriesContexts);
  const LinkButtonClick = (category: string) => {
    if (!setCategories) return;
    if (category === "All") {
      setCategories({ categories: ["All"] });
      return;
    } else {
      if (selectedCategories.includes(category.toLowerCase())) {
        const new_categories = selectedCategories.filter(
          (c) => c !== category.toLowerCase(),
        );
        setCategories({
          categories: new_categories.length === 0 ? ["All"] : new_categories,
        });
      } else {
        setCategories({
          categories: [
            ...selectedCategories.filter((c) => c !== "All"),
            category.toLowerCase(),
          ],
        });
      }
    }
  };
  return (
    <div className={categoriesContainer.class}>
      {categories.map((category) => (
        <LinkButton
          activated={selectedCategories.includes(category)}
          onClick={LinkButtonClick}
          key={category}
        >{`${category[0].toUpperCase()}${category.slice(1, category.length)}`}</LinkButton>
      ))}
    </div>
  );
}
