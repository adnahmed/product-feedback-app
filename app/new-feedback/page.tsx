import PlusIcon from "@/public/plus.svg";
import Image from "next/image";
import BackButton from "../components/BackButton";
import Button from "../components/Button";
import { Dropdown } from "../components/Dropdown";
import { TextField } from "../components/TextField";
import { tw } from "../lib/tailwindest";

const actions = tw.style({});

const formPage = tw.style({
  marginX: "mx-[25px]",
  marginTop: "mt-[35px]",
  marginBottom: "mb-[77px]",
  "@tablet": {
    marginX: "tablet:mx-auto",
    maxWidth: "tablet:max-w-[540px]",
  },
});

const form = tw.style({
  borderRadius: "rounded-lg",
  backgroundColor: "bg-white",
  position: "relative",
  padding: "p-[24px]",
  display: "flex",
  flexDirection: "flex-col",
  gap: "gap-[24px]",
  "@tablet": {
    paddingX: "tablet:px-[42px]",
    paddingBottom: "tablet:pb-[40px]",
  },
});

const back = tw.style({
  marginBottom: "mb-[35px]",
});

const heading = tw.style({
  paddingTop: "pt-[24px]",
  color: "text-blue-dark-2",
  fontWeight: "font-bold",
  fontSize: "text-[18px]",
});

const section = tw.style({
  display: "flex",
  flexDirection: "flex-col",
  gap: "gap-[8px]",
});

const sectionTitle = tw.style({
  color: "text-blue-dark-2",
  fontWeight: "font-bold",
  fontSize: "text-[13px]",
});

const sectionDesc = tw.style({
  fontSize: "text-[13px]",
  color: "text-gray-dark",
});

export default function NewFeedback() {
  return (
    <div className={formPage.class}>
      <div className={back.class}>
        <BackButton>Go Back</BackButton>
      </div>
      <div className={form.class}>
        <Image className="absolute -top-5 left-5" src={PlusIcon} alt="+ icon" />
        <div className={heading.class}>Create New Feedback</div>
        <div className={section.class}>
          <span className={sectionTitle.class}>Feedback Title</span>
          <span className={sectionDesc.class}>
            Add a short, descriptive headline
          </span>
          <TextField />
        </div>
        <div className={`${section.class} static `}>
          <span className={sectionTitle.class}>Category</span>
          <span className={sectionDesc.class}>
            Choose a category for your feedback
          </span>
          <div className="relative">
            <Dropdown options={["Feature", "UI", "UX", "Enhancement", "Bug"]} />
          </div>
        </div>
        <div className={`static ${section.class}`}>
          <span className={sectionTitle.class}>Feedback Detail</span>
          <span className={sectionDesc.class}>
            Include any specific comments on what should be improved, added,
            etc.
          </span>
          <textarea
            className="h-[120px] resize-none bg-gray  p-4 rounded-lg active:outline-blue focus:outline-blue"
            name=""
            id=""
            cols={5}
            rows={10}
          />
        </div>
        <div className="flex flex-col gap-[16px] tablet:flex-row-reverse tablet:justify-start">
          <Button color="purple">Add Feedback</Button>
          <Button color="dark-blue">Cancel</Button>
        </div>
      </div>
    </div>
  );
}
