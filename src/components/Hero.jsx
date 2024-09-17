import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { BackgroundBeamsWithCollision } from "./ui/background-beams-with-collision";
import { Download } from "lucide-react";

export default function Hero() {
  return (
    <BackgroundBeamsWithCollision>
      <section className="container py-24 md:py-32">
        <Card className="max-w-3xl mx-auto">
          <CardHeader className="flex flex-col items-center space-y-4">
            <Avatar className="w-32 h-32">
              <AvatarImage
                src="https://res.cloudinary.com/dq9phb7ge/image/upload/t_Profile/v1725103977/b1ctlnqgpen6fgcwhggp.jpg"
                alt="Your Name"
              />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <CardTitle className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center">
              Hi, I'm Jagdeep Choudhary
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-lg text-muted-foreground sm:text-xl">
              I'm a full-stack developer passionate about creating beautiful and
              functional web applications.
            </p>
          </CardContent>
          <CardFooter className="flex justify-center">
            <Button asChild size="lg" className="cursor-pointer">
              <a
                href="https://res.cloudinary.com/dq9phb7ge/raw/upload/v1726513794/Jagdeep-CV_bjwmxb.docx"
                download
              >
                Download CV <Download className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </CardFooter>
        </Card>
      </section>
    </BackgroundBeamsWithCollision>
  );
}
