import commentIcon from "@/public/comment.svg";
import initital_data from "@/public/data.json";
import Image from "next/image";
import Link from "next/link";
import { tw } from "../lib/tailwindest";
import { CategorySelector } from "./CategorySelection";
import { LinkButton } from "./LinkButton";

export type ProductRequest = (typeof initital_data.productRequests)[number];
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
    gridTemplateColumns: "tablet:grid-cols-[max-content,auto,max-content]",
    gridTemplateRows: "tablet:grid-rows-[1fr, 1fr]",
  },
});

const upvote = tw.style({
  gridRowStart: "row-start-3",
  gridRowEnd: "row-end-3",
  "@tablet": {
    marginRight: "tablet:mr-[40px]",
    gridRow: "tablet:row-span-2",
    gridColumnStart: "tablet:col-start-1",
    gridColumnEnd: "tablet:col-end-1",
    justifySelf: "tablet:justify-self-start",
  },
});

const requestLink = tw.style({
  gridRowStart: "row-start-1",
  gridRowEnd: "row-end-1",
  gridColumn: "col-span-2",

  "@tablet": {
    gridColumn: "tablet:col-span-1",
    gridColumnStart: "tablet:col-start-2",
    gridColumnEnd: "tablet:col-end-2",
  },
});

const category = tw.style({
  gridRowStart: "row-start-2",
  gridRowEnd: "row-end-2",
  marginTop: "mt-[8px]",
  marginBottom: "mb-[16px]",
  "@tablet": {
    gridRowStart: "tablet:row-start-2",
    gridRowEnd: "tablet:row-end-2",
    gridColumnStart: "tablet:col-start-2",
    gridColumnEnd: "tablet:col-end-2",
    marginBottom: "tablet:mb-[0px]",
  },
});

const commentIconContainer = tw.style({
  display: "flex",
  justifyContent: "justify-center",
  alignItems: "items-center",
  gap: "gap-1",
  placeSelf: "place-self-center",
  gridRowStart: "row-start-3",
  gridRowEnd: "row-end-3",
  "@tablet": {
    gridRow: "tablet:row-span-2",
  },
});

const titleLink = tw.style({
  color: "text-blue-dark-2",
  display: "flex",
  flexDirection: "flex-col",
  gap: "gap-1",
  flexShrink: "shrink",
  alignItems: "items-start",
  ":hover": {
    color: "hover:text-blue",
  },
});

export function ProductRequest({
  productRequest,
}: {
  productRequest: ProductRequest;
}) {
  return (
    <div className={productRequestContainer.class}>
      <div className={upvote.class}>
        <LinkButton icon={true}>{productRequest.upvotes.toString()}</LinkButton>
      </div>
      <Link
        className={requestLink.class}
        key={productRequest.id}
        href={`/product-request/${productRequest.id}`}
      >
        <div className={titleLink.class}>
          <h2>{productRequest.title}</h2>
          <p className="text-gray-dark">{productRequest.description}</p>
        </div>
      </Link>
      <div className={category.class}>
        <CategorySelector category={productRequest.category} />
      </div>
      <div className={commentIconContainer.class}>
        <Image src={commentIcon} alt="comment icon" />
        <span>{productRequest.comments?.length ?? 0}</span>
      </div>
    </div>
  );
}
