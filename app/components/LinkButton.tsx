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
    paddingY: "py-[4px]",
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

export function LinkButton({
  onClick,
  children,
  icon = false,
}: {
  onClick?: (value: string) => void;
  icon?: boolean;
  children: string;
}) {
  return (
    <button
      className={linkButton.class(!!icon)}
      onClick={(e) => {
        e.preventDefault();
        if (onClick) onClick(children);
      }}
    >
      {icon && <UpArrow />}
      <span>{children}</span>
    </button>
  );
}
