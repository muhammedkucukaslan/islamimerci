import type { Metadata } from "next";
import ContactContent from "./contact-content";

export const metadata: Metadata = {
  title: "İletişim - İslami Merci Yolumuz Tebliğ",
  description: "İslami Merci Derneği ile iletişime geçin",
};

export default function ContactPage() {
  return <ContactContent />;
}