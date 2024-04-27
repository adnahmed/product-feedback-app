"use client";
import { useRouter } from "next/navigation";
import { GetVariants } from "tailwindest";
import Button, { coloredButton } from "./Button";

function BackButton({
  color = "gray",
  children,
}: React.PropsWithChildren<{
  color: GetVariants<typeof coloredButton>;
  className?: string;
}>) {
  const router = useRouter();
  return (
    <Button color={color} icon onClick={() => router.back()}>
      {children}
    </Button>
  );
}

export default BackButton;
