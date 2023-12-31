"sue client";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface Props {
  label: string;
  href: string;
}

const BackButton = ({ label, href }: Props) => {
  return (
    <Button
      variant={"link"}
      className="font-normal  w-ful"
      size={"sm"}
      asChild
    >
      <Link href={href}>{label}</Link>
    </Button>
  );
};
export default BackButton;
