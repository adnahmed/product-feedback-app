import data from "@/app/data.json";
import Link from "next/link";

export type ProductRequest = (typeof data.productRequests)[number];
export function ProductRequest({
  productRequest,
}: {
  productRequest: ProductRequest;
}) {
  return (
    <Link
      key={productRequest.id}
      href={`/product-request/${productRequest.id}`}
    >
      <h2>{productRequest.title}</h2>
      <p>{productRequest.description}</p>
    </Link>
  );
}
