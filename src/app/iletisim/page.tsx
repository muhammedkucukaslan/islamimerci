import type { Metadata } from "next";
import ContactContent from "./contact-content";

export const metadata: Metadata = {
  title: "İletişim - İslami Merci Hayır Kurumu",
  description: "İslami Merci Hayır Kurumu ile iletişime geçin",
};

export default function ContactPage() {
  return <ContactContent />;
}