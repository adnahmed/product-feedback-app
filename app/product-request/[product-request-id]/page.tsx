import { Comment, CommentArea } from "@/app/components/Comment & Reply";
import { ProductRequest } from "@/app/components/ProductRequest";
import data from "@/app/data.json";
import { tw } from "@/app/lib/tailwindest";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return data.productRequests.map((productRequest) => ({
    "product-request-id": productRequest.id.toString(),
  }));
}

const form = tw.style({
  borderRadius: "rounded-lg",
  position: "relative",
  display: "flex",
  flexDirection: "flex-col",
  paddingX: "px-[24px]",
  gap: "gap-[24px]",
  "@tablet": {
    paddingX: "tablet:px-[40px]",
    paddingBottom: "tablet:pb-[40px]",
  },
  "@desktop": {
    maxWidth: "desktop:max-w-[730px]",
  },
});

const comments = tw.style({
  borderRadius: "rounded-lg",
  paddingX: "px-[28px]",
  backgroundColor: "bg-white",
});

export default function ProductRequestDetail({
  params: { "product-request-id": productRequestId },
}: {
  params: { "product-request-id": string };
}) {
  const productRequest = data.productRequests.find(
    (pr) => pr.id.toString() === productRequestId,
  );
  if (!productRequest) {
    notFound();
  }

  return (
    <section className={form.class}>
      <ProductRequest productRequest={productRequest} />
      <div className={comments.class}>
        <p className="text-blue-dark-2 font-bold pt-[24px] pb-[28px]">
          {productRequest.comments?.length} Comments
        </p>
        {productRequest.comments?.map((comment, index) => (
          <div key={comment.id}>
            <Comment comment={comment} />
            {index !== productRequest.comments.length - 1 && (
              <hr className="mb-[32px] border-gray" />
            )}
          </div>
        ))}
      </div>
      <CommentArea />
    </section>
  );
}
