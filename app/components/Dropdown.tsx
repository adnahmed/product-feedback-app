"use client";
import { useState } from "react";
import { tw } from "../lib/tailwindest";
const select = tw.style({
  ":active": {
    borderColor: "active:border-blue",
    borderWidth: "active:border-[1.5px]",
    borderStyle: "active:border-solid",
  },
  ":focus": {
    borderColor: "focus:border-blue",
    borderWidth: "focus:border-[1.5px]",
    borderStyle: "focus:border-solid",
  },
  position: "relative",
  color: "text-blue-dark-2",
  outlineStyle: "outline-none",
  fontSize: "text-sm",
  paddingY: "py-[13px]",
  paddingX: "px-[24px]",
  display: "flex",
  justifyContent: "justify-between",
  maxWidth: "max-w-[255px]",
  alignItems: "items-center",
  borderRadius: "rounded-md",
  backgroundColor: "bg-gray",
});

const selectedItem = tw.style({
  fontSize: "text-[15px]",
  paddingLeft: "pl-1",
});

const arrow = tw.toggle({
  truthy: {
    transformRotate: "rotate-180",
  },
  falsy: {},
  base: {
    stroke: "stroke-blue-dark-2",
    transition: "transition ease-out",
    width: "w-2.5",
    height: "h-2.5",
    marginLeft: "ml-1",
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
    top: "-top-[50px]",
    zIndex: "z-10",
    position: "relative",
    transition: "transition ease-in-out",
    maxWidth: "max-w-[255px]",
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
  paddingX: "px-4",
  color: "text-gray-dark",
  "@dark": {
    color: "dark:text-gray-light",
  },
});

const dropdownListItem = tw.style({
  ":hover": {
    color: "hover:text-purple",
  },
  display: "flex",
  justifyContent: "justify-between",
  alignItems: "items-center",
});

const selectContainer = tw.style({
  display: "flex",
  flexDirection: "flex-col",
});

export function Dropdown({
  onChange,
  options,
  defaultOption,
}: {
  onChange?: (option: string) => void;
  defaultOption?: string;
  options: string[];
}) {
  const [selected, setSelected] = useState<string>(defaultOption ?? options[0]);
  const [showDropdown, setShowDropdown] = useState<boolean>(false);
  const handleClickItem = (selected: string) => {
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
        <span className={selectedItem.class}>
          {selected
            .split("_")
            .map((w) => `${w[0].toUpperCase()}${w.slice(1, w.length)}`)
            .join(" ")}
        </span>
        <svg
          className={arrow.class(showDropdown)}
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>

      <div className={dropdown.class(showDropdown)}>
        <ul className={dropdownList.class}>
          {options.map((o) => (
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