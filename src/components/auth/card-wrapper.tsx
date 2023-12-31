"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Header from "@/components/auth/header";
import Social from "@/components/auth/social";
import BackButton from "@/components/auth/back-button";

interface Props {
  children: React.ReactNode;
  headerLabel: string;
  backButtonLabel: string;
  backButtonHref: string;
  showSocial?: boolean;
}

const CardWrapper = ({
  children,
  headerLabel,
  backButtonHref,
  backButtonLabel,
  showSocial,
}: Props) => {
  return (
    <Card className="w-[400px] shadow-md">
      <CardHeader>
        <Header label={headerLabel} /> 
        <CardContent className="px-0">{children}</CardContent>
        {
          showSocial && (
            <CardFooter className="px-0">
              <Social />
            </CardFooter>
          )
        }
        <CardFooter className="justify-center items-center p-0">
          <BackButton label={backButtonLabel} href={backButtonHref} />
        </CardFooter>
      </CardHeader>
    </Card>
  );
};
export default CardWrapper;
