"use client";

import { Send } from "lucide-react";
import { FormEvent, useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { profile } from "@/lib/portfolio-data";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") ?? "");
    const email = String(form.get("email") ?? "");
    const message = String(form.get("message") ?? "");
    const subject = encodeURIComponent(`Portfolio enquiry from ${name}`);
    const body = encodeURIComponent(`${message}\n\nFrom: ${name}\nEmail: ${email}`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <form className="grid gap-4" onSubmit={handleSubmit}>
      <div className="grid gap-4 sm:grid-cols-2">
        <Input name="name" placeholder="Your name" aria-label="Your name" required />
        <Input
          name="email"
          type="email"
          placeholder="Email address"
          aria-label="Email address"
          required
        />
      </div>
      <Textarea
        name="message"
        placeholder="Share an opportunity, internship, collaboration, or professional enquiry."
        aria-label="Message"
        required
      />
      <div className="flex flex-wrap items-center gap-3">
        <Button type="submit">
          <Send className="h-4 w-4" />
          Send Message
        </Button>
        {sent && (
          <p className="text-sm text-muted-foreground">
            Your email app should open with a prepared message.
          </p>
        )}
      </div>
    </form>
  );
}
