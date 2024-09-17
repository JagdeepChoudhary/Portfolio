import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { PhoneIcon, MapPinIcon, CheckCircleIcon, MailIcon } from "lucide-react";

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically handle the form submission
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="container mx-auto py-24 sm:py-32">
      <div className="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#0000000a_1px,transparent_1px),linear-gradient(to_bottom,#0000000a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
      <div className="overflow-hidden rounded-lg border border-neutral-200 dark:bg-neutral-950 dark:border-neutral-800 p-1 mx-auto max-w-2xl lg:max-w-5xl xl:max-w-6xl">
        <div className="rounded-lg p-8">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center">
            Get in Touch
          </h2>
          <p className="mt-4 text-center max-w-lg mx-auto text-sm sm:text-base md:text-lg">
            We'd love to hear from you! Whether you have a question about our
            services, want to partner with us, or just want to say hello, we're
            here to listen.
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-12 mt-12 max-w-5xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-bold">
              Contact Information
            </CardTitle>
            <CardDescription>
              Reach out to us through any of these means
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center space-x-4 p-3 rounded-lg transition-all">
              <div className="border rounded-full p-2">
                <MailIcon className="h-6 w-6" />
              </div>
              <div>
                <p className="font-medium">Email</p>
                <p className="text-sm">jdchoudhary@gmail.com</p>
              </div>
            </div>
            <div className="flex items-center space-x-4 p-3 rounded-lg transition-all">
              <div className="border rounded-full p-2">
                <PhoneIcon className="h-6 w-6" />
              </div>
              <div>
                <p className="font-medium">Phone</p>
                <p className="text-sm">+91 99924-70576</p>
              </div>
            </div>
            <div className="flex items-center space-x-4 p-3 rounded-lg transition-all">
              <div className="border rounded-full p-2">
                <MapPinIcon className="h-6 w-6" />
              </div>
              <div>
                <p className="font-medium">Address</p>
                <p className="text-sm">Barahlu Bhiwani Haryana India 127201</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-bold">Send a Message</CardTitle>
            <CardDescription>
              Fill out the form below and we'll get back to you as soon as
              possible
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input placeholder="Name" />
              <Input type="email" placeholder="Email" />
              <Textarea placeholder="Message" />
              <Button type="submit" className="w-full">
                {isSubmitted ? (
                  <span className="flex items-center justify-center">
                    <CheckCircleIcon className="mr-2 h-4 w-4" /> Message Sent
                  </span>
                ) : (
                  "Send Message"
                )}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
