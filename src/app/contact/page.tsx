import type { Metadata } from "next";
import ContactContent from "@/components/contact/ContactContent";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Muhammad Yaseen for senior AI roles, freelance projects, or collaboration opportunities.",
};

export default function ContactPage() {
  return <ContactContent />;
}
