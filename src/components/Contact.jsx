import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

export default function Contact() {
  return (
    <section id="contact" className="container py-24 sm:py-32">
      <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">
        Get in Touch
      </h2>
      <Card className="max-w-3xl mx-auto">
        <CardHeader>
          <CardTitle> Fill out the form below to send me a message.</CardTitle>
          <CardDescription>
            Feel free to reach out if you have any questions or just want to say
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <Input placeholder="Your Name" />
            <Input type="email" placeholder="Your Email" />
            <Textarea placeholder="Your Message" />
            <Button type="submit" className="w-full">
              Send Message
            </Button>
          </form>
        </CardContent>
      </Card>
    </section>
  );
}
