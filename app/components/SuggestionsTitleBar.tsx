import data from "@/app/data.json";
import bulb from "@/public/bulb.svg";
import Image from "next/image";
import { tw } from "../lib/tailwindest";
import Button from "./Button";
import { SortBy } from "./SortBy";
const titleBar = tw.style({
  display: "flex",
  position: "relative",
  maxWidth: "max-w-[825px]",
  alignItems: "items-center",
  justifyContent: "justify-between",
  backgroundColor: "bg-blue-dark-2",
  paddingX: "px-[10px]",
  borderRadius: "rounded-none",
  "@tablet": {
    paddingX: "tablet:px-[20px]",
    borderRadius: "tablet:rounded-md",
    justifyContent: "tablet:justify-between",
    marginX: "tablet:mx-[24px]",
  },
});
export function SuggestionsTitleBar() {
  return (
    <div className={titleBar.class}>
      <div className="flex justify-center items-center">
        <div className="tablet:flex gap-[16px] justify-center hidden items-center">
          <Image src={bulb} alt="" />
          <div className="text-white font-bold text-[18px]">
            <span>
              {
                data.productRequests.filter((pr) => pr.status === "suggestion")
                  .length
              }
            </span>{" "}
            <span>Suggestions</span>
          </div>
        </div>
        <SortBy />
      </div>
      <Button color="purple">+ Add Feedback</Button>
    </div>
  );
}
