import BackButton from "@/app/components/BackButton";
import Button from "@/app/components/Button";
import data from "@/app/data.json";
import { tw } from "@/app/lib/tailwindest";
import Link from "next/link";
import { ReactNode } from "react";
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

const formPage = tw.style({
  // marginX: "mx-[25px]",
  marginTop: "mt-[35px]",
  marginBottom: "mb-[77px]",
  "@desktop": {
    marginX: "desktop:mx-auto",
    maxWidth: "desktop:max-w-[730px]",
  },
  "@tablet": {
    marginBottom: "tablet:mb-[120px]",
    // maxWidth: "tablet:max-w-[540px]",
  },
});

export default function Layout({
  children,
  params: { "product-request-id": productRequestId },
}: {
  children: ReactNode;
  params: { "product-request-id": string };
}) {
  const productRequest = data.productRequests.find(
    (pr) => pr.id.toString() === productRequestId,
  );
  return (
    <div className={formPage.class}>
      <div className={navbar.class}>
        <BackButton>Go Back</BackButton>
        {productRequest && (
          <Link href={`/edit-feedback/${productRequestId}`}>
            <Button color="blue">Edit Feedback</Button>
          </Link>
        )}
      </div>
      {children}
    </div>
  );
}
