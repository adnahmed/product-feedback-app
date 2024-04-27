"use client";
import data from "@/public/data.json";
import { useContext } from "react";
import { CategoriesContexts } from "../contexts/categoriesProvider";
import { capitalize } from "../lib/helpers";
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
  height: "h-max",
  gap: "gap-[8px]",
  flexWrap: "flex-wrap",
  paddingY: "py-[14px]",
  paddingX: "px-[18px]",
  borderRadius: "rounded-xl",
  justifyItems: "justify-items-start",
});
export function CategorySelection() {
  return (
    <div className="h-[178px] bg-white rounded-xl w-[223px] desktop:w-[255px] overflow-y-auto no-scrollbar">
      <div className={categoriesContainer.class}>
        {categories.map((category) => (
          <CategorySelector category={category} key={category} />
        ))}
      </div>
    </div>
  );
}

export function CategorySelector({ category }: { category: string }) {
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
    <LinkButton
      activated={selectedCategories.includes(category)}
      onClick={LinkButtonClick}
      key={category}
    >
      {capitalize(category)}
    </LinkButton>
  );
}
