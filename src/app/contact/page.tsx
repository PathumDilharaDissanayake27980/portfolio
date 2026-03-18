"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useForm, ValidationError } from "@formspree/react";
import { Mail, Phone } from "lucide-react";

export default function ContactPage() {
  const [state, handleSubmit] = useForm("YOUR_FORM_ID");

  if (state.succeeded) {
    return (
      <div className="container py-12 text-center">
        <h1 className="text-4xl font-bold">Thanks for your message!</h1>
      </div>
    );
  }

  return (
    <div className="container py-12">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl font-bold">Contact Me</h1>
        <p className="text-muted-foreground text-lg mt-2">
          I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
        </p>

        <div className="flex justify-center gap-8 mt-8">
            <div className="flex items-center gap-2">
                <Mail/>
                <p>pathumdilharadissanayake@gmail.com</p>
            </div>
            <div className="flex items-center gap-2">
                <Phone/>
                <p>0710758542</p>
            </div>
        </div>

      </div>
      <div className="max-w-xl mx-auto mt-8">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" name="name" placeholder="Your name" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" name="email" placeholder="Your email" />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea id="message" name="message" placeholder="Your message" />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>
          <div className="text-center">
            <Button type="submit" disabled={state.submitting}>
              Send Message
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
