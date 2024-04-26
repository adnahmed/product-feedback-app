import { tw } from "../lib/tailwindest";

const appName = tw.style({
  display: "flex",
  flexDirection: "flex-col",
  justifyContent: "justify-end",
  alignItems: "items-start",
  paddingX: "px-[24px]",
  paddingY: "py-[4px]",
  height: "h-[72px]",
  "@tablet": {
    width: "tablet:w-[223px]",
    height: "tablet:h-[178px]",
    paddingY: "tablet:py-[24px]",
    borderRadius: "tablet:rounded-lg",
  },
  "@desktop": {
    width: "desktop:w-[255px]",
    paddingY: "desktop:py-[24px]",
    borderRadius: "desktop:rounded-lg",
    height: "desktop:h-[137px]",
  },
});
export function FeedbackAppName() {
  return (
    <div
      className={`${appName.class}`}
      style={{
        background:
          "radial-gradient(128.88% 128.88% at 103.9% -10.39%, #E84D70 0%, #A337F6 53.09%, #28A7ED 100%)",
      }}
    >
      <h1 className="text-white font-bold text-[15px] tablet:text-[20px] leading-tight ">
        Frontend Mentor
      </h1>
      <h2 className="text-gray-light text-[13px] font-medium tablet:text-[15px]">
        Feedback Board
      </h2>
    </div>
  );
}
