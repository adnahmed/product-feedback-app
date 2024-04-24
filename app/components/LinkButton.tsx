import { MouseEventHandler, ReactNode } from "react";
import { tw } from "../lib/tailwindest";
import { UpArrow } from "./UpArrow";

const linkButton = tw.toggle({
  truthy: {
    fontWeight: "font-bold",
    flexDirection: "flex-col",
    backgroundColor: "bg-blue-lightest",
    stroke: "stroke-blue",
    ":hover": {
      backgroundColor: "hover:bg-blue-lighter",
    },
    ":active": {
      backgroundColor: "active:bg-blue",
      color: "active:text-white",
      stroke: "active:stroke-gray",
    },
  },
  falsy: {
    fontWeight: "font-semibold",
    color: "text-blue",
    backgroundColor: "bg-blue-lightest",
    ":hover": {
      backgroundColor: "hover:bg-blue-lighter",
    },
    ":active": {
      backgroundColor: "active:bg-blue",
      color: "active:text-white",
    },
  },
  base: {
    display: "flex",
    marginX: "mx-auto",
    marginY: "my-4",
    paddingY: "py-[8px]",
    paddingX: "px-[14px]",
    borderRadius: "rounded-lg",
    alignItems: "items-center",
    gapY: "gap-y-2",
    justifyContent: "justify-center",
    transition: "transition ease-in-out",
    gap: "gap-4",
    fontSize: "text-[13px]",
    transitionDuration: "duration-300",
  },
});

const linkButtonIcon = tw.style({
  paddingTop: "pt-[8px]",
});

export function LinkButton({
  onClick,
  children,
  icon = false,
}: {
  onClick?: MouseEventHandler<HTMLButtonElement>;
  icon?: boolean;
  children: ReactNode;
}) {
  return (
    <button className={linkButton.class(!!icon)} onClick={onClick}>
      {icon && <UpArrow />}
      <span>{children}</span>
    </button>
  );
}
