import data from "@/app/data.json";
import commentIcon from "@/public/comment.svg";
import Image from "next/image";
import Link from "next/link";
import { capitalize } from "../lib/helpers";
import { tw } from "../lib/tailwindest";
import { LinkButton } from "./LinkButton";

export type ProductRequest = (typeof data.productRequests)[number];
const productRequestContainer = tw.style({
  display: "flex",
  flexGrow: "grow",
  maxWidth: "max-w-[327px]",
  justifyContent: "justify-between",
  alignItems: "items-center",
  paddingX: "px-[32px]",
  paddingY: "py-[28px]",
  backgroundColor: "bg-white",
  borderRadius: "rounded-xl",
  "@mobile": {
    maxWidth: "mobile:max-w-[689px]",
  },
  "@tablet": {
    maxWidth: "tablet:max-w-[825px]",
  },
});

export function ProductRequest({
  productRequest,
}: {
  productRequest: ProductRequest;
}) {
  return (
    <div className={productRequestContainer.class}>
      <div className="flex flex-col-reverse tablet:flex-row justify-center items-start tablet:items-center gap-[16px] tablet:gap-[40px]">
        <LinkButton icon={true}>{productRequest.upvotes.toString()}</LinkButton>
        <Link
          key={productRequest.id}
          href={`/product-request/${productRequest.id}`}
        >
          {" "}
          <div className="flex flex-col items-start gap-1">
            <h2 className="text-blue-dark-2">{productRequest.title}</h2>
            <p>{productRequest.description}</p>
            <LinkButton>{capitalize(productRequest.category)}</LinkButton>
          </div>
        </Link>
      </div>
      <div className="flex justify-center items-center gap-1">
        <Image src={commentIcon} alt="comment icon" />
        <span>{productRequest.comments?.length ?? 0}</span>
      </div>
    </div>
  );
}
