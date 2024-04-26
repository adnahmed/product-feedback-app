import PlusIcon from "@/public/plus.svg";
import Image from "next/image";
import BackButton from "../components/BackButton";
import Button from "../components/Button";
import { Dropdown } from "../components/Dropdown";
import { TextField } from "../components/TextField";
import { tw } from "../lib/tailwindest";
const formPage = tw.style({
  marginX: "mx-[25px]",
  marginTop: "mt-[35px]",
  marginBottom: "mb-[77px]",
});
const form = tw.style({
  borderRadius: "rounded-lg",
  backgroundColor: "bg-white",
  position: "relative",
  padding: "p-[24px]",
  zIndex: "z-10",
  display: "flex",
  flexDirection: "flex-col",
  gap: "gap-[24px]",
});

const back = tw.style({
  marginBottom: "mb-[35px]",
});

const heading = tw.style({});

export default function NewFeedback() {
  return (
    <div className={formPage.class}>
      <div className={back.class}>
        <BackButton>Go Back</BackButton>
      </div>
      <div className={form.class}>
        <Image className="absolute -top-5 left-5" src={PlusIcon} alt="+ icon" />
        <span className={heading.class}>Create New Feedback</span>
        <div>
          <span>Feedback Title</span>
          <span>Add a short, descriptive headline</span>
          <TextField />
        </div>
        <div>
          <span>Category</span>
          <span>Choose a category for your feedback</span>
          <Dropdown options={["Feature", "UI", "UX", "Enhancement", "Bug"]} />
        </div>
        <div>
          <span>Feedback Detail</span>
          <span>
            Include any specific comments on what should be improved, added,
            etc.
          </span>
          <textarea name="" id="" cols={30} rows={10} />
        </div>
        <Button color="purple">Add Feedback</Button>
        <Button color="dark-blue">Cancel</Button>
      </div>
    </div>
  );
}
