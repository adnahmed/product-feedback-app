"use client";
import initial_data from "@/public/data.json";
import Link from "next/link";
import { useState } from "react";
import useLocalStorageState from "use-local-storage-state";
import BackButton from "../components/BackButton";
import Button from "../components/Button";

export default function Roadmap() {
  const [data] = useLocalStorageState("data", { defaultValue: initial_data });
  const [tab, setTab] = useState(0);
  const tab_data = {
    Planned: data.productRequests.filter((pr) => pr.status === "planned"),
    "In-Progress": data.productRequests.filter(
      (pr) => pr.status === "in-progress",
    ),
    Live: data.productRequests.filter((pr) => pr.status === "live"),
  };
  const indexToColor = (index: number) => {
    switch (index) {
      case 0:
        return "orange-light";
      case 1:
        return "purple";
      case 2:
        return "blue";
    }
  };
  return (
    <div className="max-w-[1110px] desktop:mx-auto tablet:mt-[56px] tablet:mx-[40px]">
      <div className="flex tablet:rounded-lg  justify-between items-center p-[24px] bg-blue-dark-2">
        <div className="flex flex-col items-center gap-0">
          <BackButton color="dark-blue">Go Back</BackButton>
          <span className="font-bold text-white">Roadmap</span>
        </div>
        <Link href={"/new-feedback"}>
          <Button color="purple">+ Add Feedback</Button>
        </Link>
      </div>
      {/* Mobile Tabs */}
      <div className="flex w-full justify-evenly tablet:hidden">
        {Object.keys(tab_data).map((key, index) => (
          <button
            key={key}
            onClick={() => setTab(index)}
            className={`${
              tab === index
                ? `border-b-[6px] border-${indexToColor(index)}`
                : "border-b-[1px] border-gray-dark text-gray-dark"
            } font-bold  w-full gap-0 py-[26px]  `}
          >
            {key} ({tab_data[key].length})
          </button>
        ))}
      </div>
    </div>
  );
}
