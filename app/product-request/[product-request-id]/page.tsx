import data from "@/app/data.json";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return data.productRequests.map((productRequest) => ({
    "product-request-id": productRequest.id.toString(),
  }));
}

export default function ProductRequest({
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
    <main>
      <h2>{productRequest.title}</h2>
      <p>{productRequest.description}</p>
    </main>
  );
}
