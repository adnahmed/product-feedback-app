"use client";
import BackButton from "@/app/components/BackButton";
import Button from "@/app/components/Button";
import { tw } from "@/app/lib/tailwindest";
import initial_data from "@/public/data.json";
import Link from "next/link";
import useLocalStorageState from "use-local-storage-state";
const navbar = tw.style({
  display: "flex",
  justifyContent: "justify-between",
  marginX: "mx-[24px]",
  marginBottom: "mb-[24px]",
  "@tablet": {
    marginX: "tablet:mx-[40px]",
  },
  "@desktop": {
    maxWidth: "desktop:max-w-[730px]",
  },
});
export function Navbar({ productRequestId }: { productRequestId: string }) {
  const [data, setData] = useLocalStorageState("data", {
    defaultValue: initial_data,
  });
  const productRequest = data.productRequests.find(
    (pr) => pr.id.toString() === productRequestId,
  );
  return (
    <div className={navbar.class}>
      <BackButton color="gray">Go Back</BackButton>
      {productRequest && (
        <Link href={`/edit-feedback/${productRequestId}`}>
          <Button color="blue">Edit Feedback</Button>
        </Link>
      )}
    </div>
  );
}
