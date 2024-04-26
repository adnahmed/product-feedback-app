"use client";
import data from "@/app/data.json";
import { useContext } from "react";
import { CategoriesContexts } from "../contexts/categoriesProvider";
import { SortOrderContexts } from "../contexts/SortProvider";
import { tw } from "../lib/tailwindest";
import { ProductRequest } from "./ProductRequest";
import {
  LEAST_COMMENTS,
  LEAST_UPVOTES,
  MOST_COMMENTS,
  MOST_UPVOTES,
} from "./SortBy";

const listContainer = tw.style({
  display: "flex",
  flexDirection: "flex-col",
  gap: "gap-[24px]",
  marginX: "mx-[24px]",
  "@tablet": {
    marginX: "tablet:mx-[41px]",
  },
  "@desktop": {
    marginX: "desktop:mx-[30px]",
    gridColumnStart: "desktop:col-start-2",
    gridColumnEnd: "desktop:col-end-2",
    gridRowStart: "desktop:row-start-2",
    gridRowEnd: "desktop:row-end-2",
  },
});

export function ProductRequestList() {
  const sortContext = useContext(SortOrderContexts);
  const { categories: selectedCategories } = useContext(CategoriesContexts);
  return (
    <section className="flex flex-col gap-[24px] mx-[24px] table:mx-[41px] desktop:mx-[30px] desktop:col-start-2 desktop:col-end-2">
      {data.productRequests
        .sort((a_pr, b_pr) => {
          switch (sortContext.order) {
            case MOST_UPVOTES:
              if (a_pr.upvotes > b_pr.upvotes) return -1;
              if (a_pr.upvotes < b_pr.upvotes) return 1;
              return 0;
            case LEAST_UPVOTES:
              if (a_pr.upvotes > b_pr.upvotes) return 1;
              if (a_pr.upvotes < b_pr.upvotes) return -1;
              return 0;
            case MOST_COMMENTS:
              if (
                (Array.isArray(a_pr.comments) ? a_pr.comments.length : 0) >
                (Array.isArray(b_pr.comments) ? b_pr.comments.length : 0)
              )
                return -1;
              if (
                (Array.isArray(a_pr.comments) ? a_pr.comments.length : 0) <
                (Array.isArray(b_pr.comments) ? b_pr.comments.length : 0)
              )
                return 1;
              return 0;
            case LEAST_COMMENTS:
              if (
                (Array.isArray(a_pr.comments) ? a_pr.comments.length : 0) >
                (Array.isArray(b_pr.comments) ? b_pr.comments.length : 0)
              )
                return 1;

              if (
                (Array.isArray(a_pr.comments) ? a_pr.comments.length : 0) <
                (Array.isArray(b_pr.comments) ? b_pr.comments.length : 0)
              )
                return -1;
              return 0;
          }
        })
        .map((productRequest) => {
          if (
            selectedCategories.includes("All") ||
            selectedCategories.includes(productRequest.category)
          )
            return (
              <ProductRequest
                productRequest={productRequest}
                key={productRequest.id}
              />
            );
        })}
    </section>
  );
}
