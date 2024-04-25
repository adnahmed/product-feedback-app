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
  justifyContent: "justify-between",
  alignItems: "items-center",
  backgroundColor: "bg-blue-dark-2",
  borderRadius: "rounded-none",
  paddingX: "px-[16px]",
  "@tablet": {
    borderRadius: "tablet:rounded-md",
    marginX: "tablet:mx-[30px]",
  },
});
export function SuggestionsTitleBar() {
  return (
    <div className={titleBar.class}>
      <div className="flex justify-center items-center">
        <div className="md:flex gap-[16px] justify-center hidden items-center">
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
