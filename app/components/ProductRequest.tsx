import data from "@/app/data.json";
import commentIcon from "@/public/comment.svg";
import Image from "next/image";
import Link from "next/link";
import { capitalize } from "../lib/helpers";
import { tw } from "../lib/tailwindest";
import { LinkButton } from "./LinkButton";

export type ProductRequest = (typeof data.productRequests)[number];
const productRequestContainer = tw.style({
  display: "grid",
  flexGrow: "grow",
  maxWidth: "max-w-[327px]",
  paddingX: "px-[32px]",
  paddingY: "py-[28px]",
  gridTemplateColumns: "grid-cols-[1fr]",
  gridTemplateRows: "grid-rows-[auto,auto,auto]",
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
      <div className="row-start-3 row-end-3 mt-[16px]">
        <LinkButton icon={true}>{productRequest.upvotes.toString()}</LinkButton>
      </div>
      <Link
        className="row-start-1 row-end-1 col-span-2"
        key={productRequest.id}
        href={`/product-request/${productRequest.id}`}
      >
        {" "}
        <div className="flex flex-col shrink items-start gap-1">
          <h2 className="text-blue-dark-2">{productRequest.title}</h2>
          <p>{productRequest.description}</p>
        </div>
      </Link>
      <div className="row-start-2 row-end-2 mt-[8px]">
        <LinkButton>{capitalize(productRequest.category)}</LinkButton>
      </div>
      <div className="flex justify-center items-center gap-1 justify-self-end row-start-3 row-end-3">
        <Image src={commentIcon} alt="comment icon" />
        <span>{productRequest.comments?.length ?? 0}</span>
      </div>
    </div>
  );
}
