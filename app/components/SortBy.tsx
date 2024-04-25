"use client";
import { useState } from "react";
import { tw } from "../lib/tailwindest";

export const MOST_UPVOTES = "most_upvotes";
export const LEAST_UPVOTES = "least_upvotes";
export const MOST_COMMENTS = "most_comments";
export const LEAST_COMMENTS = "least_comments";
const select = tw.style({
  color: "text-gray",
  fontSize: "text-sm",
  outlineStyle: "outline-none",
  width: "w-max",
  gap: "gap-2",
  paddingY: "py-[26px]",
  paddingX: "px-[18px]",
  display: "flex",
  justifyContent: "justify-between",
  alignItems: "items-center",
  borderRadius: "rounded-md",
  backgroundColor: "bg-blue-dark-2",
});

const selectedItem = tw.style({
  fontWeight: "font-bold",
});

const arrow = tw.toggle({
  truthy: {
    transformRotate: "rotate-180",
  },
  falsy: {},
  base: {
    stroke: "stroke-gray",
    transition: "transition ease-out",
    width: "w-2.5",
    height: "h-2.5",
  },
});
const dropdown = tw.toggle({
  truthy: {
    opacity: "opacity-100",
  },
  falsy: {
    opacity: "opacity-0",
    position: "relative",
    zIndex: "-z-50",
  },
  base: {
    transition: "transition ease-in-out",
    maxWidth: "max-w-[250px]",
    backgroundColor: "bg-white",
    boxShadow: "shadow-lg",
    filterDropShadow: "drop-shadow-md",
    borderRadius: "rounded-lg",
    "@dark": {
      backgroundColor: "dark:bg-gray",
      divideColor: "dark:divide-gray-light",
    },
  },
});

const dropdownList = tw.style({
  divideY: "divide-y",
  divideColor: "divide-gray",
  paddingY: "py-2",
  color: "text-gray-dark",
  "@dark": {
    color: "dark:text-gray-light",
  },
});

export type option =
  | typeof MOST_UPVOTES
  | typeof LEAST_UPVOTES
  | typeof MOST_COMMENTS
  | typeof LEAST_COMMENTS;

export type options = option[];

const dropdownListItem = tw.style({
  ":hover": {
    color: "hover:text-purple",
  },
  display: "flex",
  justifyContent: "justify-between",
  alignItems: "items-center",
  paddingX: "px-[24px]",
});

const selectContainer = tw.style({
  display: "flex",
  flexDirection: "flex-col",
  gap: "gap-[16px]",
});

export function SortBy({
  onChange,
  defaultOption = MOST_UPVOTES,
}: {
  onChange?: (option: option) => void;
  defaultOption?: option;
}) {
  const [selected, setSelected] = useState<option>(defaultOption);
  const [showDropdown, setShowDropdown] = useState<boolean>(false);
  const handleClickItem = (selected: option) => {
    setShowDropdown(false);
    setSelected(selected);
    if (onChange) onChange(selected);
  };
  return (
    <div className={selectContainer.class}>
      <button
        onClick={() => setShowDropdown(!showDropdown)}
        className={select.class}
      >
        <div>
          <span>Sort by : </span>
          <span className={selectedItem.class}>
            {selected
              .split("_")
              .map((w) => `${w[0].toUpperCase()}${w.slice(1, w.length)}`)
              .join(" ")}
          </span>
        </div>
        <svg
          className={arrow.class(showDropdown)}
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>

      <div className={dropdown.class(showDropdown)}>
        <ul className={dropdownList.class}>
          {(
            [
              MOST_UPVOTES,
              LEAST_UPVOTES,
              MOST_COMMENTS,
              LEAST_COMMENTS,
            ] as options
          ).map((o) => (
            <li
              onClick={(e) => {
                e.preventDefault();
                handleClickItem(o);
              }}
              className={dropdownListItem.class}
              key={o}
            >
              <a className="block py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                {o
                  .split("_")
                  .map((w) => `${w[0].toUpperCase()}${w.slice(1, w.length)}`)
                  .join(" ")}
              </a>
              <svg
                width="13"
                height="10"
                viewBox="0 0 13 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.96875 4.85894L4.50044 8.39062L12.0004 0.890625"
                  stroke="#AD1FEA"
                  strokeWidth={o === selected ? "2" : "0"}
                />
              </svg>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}