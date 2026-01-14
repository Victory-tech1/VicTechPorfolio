"use client";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState("");

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formRef.current) return;

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      setStatus("Message sent successfully ✅");
      formRef.current.reset();
    } catch (error) {
      console.error(error);
      setStatus("Failed to send message ❌");
    }
  };

  return (
		<form ref={formRef} onSubmit={sendEmail} className="flex flex-col items-center">
			<input className="bg-white text-black w-full px-3 py-2 rounded-sm" name="name" type="text" placeholder="Name:" required /><br/>
			<input className="bg-white text-black w-full px-3 py-2 rounded-sm" name="email" type="email" placeholder="Email:" required /><br/>
			<textarea className="bg-white text-black w-full h-30 px-3 py-2 rounded-sm" name="message" placeholder="Message:" required ></textarea><br/>
			<button className="bg-brand glass link-glow font-bold w-40 px-2 py-1.5 rounded-sm uppercase box-glow" type="submit">Send</button>
			{status && <p>{status}</p>}
		</form>
  );
}
