"use client";
import { useRouter } from "next/navigation";
import Button from "./Button";

function BackButton({
  className,
  children,
}: React.PropsWithChildren<{
  className?: string;
}>) {
  const router = useRouter();
  return (
    <Button color={"gray"} icon onClick={() => router.back()}>
      {children}
    </Button>
  );
}

export default BackButton;
