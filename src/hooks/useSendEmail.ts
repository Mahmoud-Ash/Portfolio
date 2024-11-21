import { ChangeEvent, FormEvent, useState } from "react";
import emailjs, { EmailJSResponseStatus } from "@emailjs/browser";


const useSendEmail = (form: HTMLFormElement | null) => {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const field = e.target.name;
    const value = e.target.value;
    setFormData(prev => ({
      ...prev,
      [field]: value,
    }));
  };

  const sendEmail = async (e: FormEvent) => {
    e.preventDefault();

    if (!form) return;
    try {
      const res = await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICEID!,
        import.meta.env.VITE_EMAILJS_TEMPLATEID!,
        form,
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLICKEY,
        }
      );
      console.log("SUCCESS!", res);
      alert("Message sent successfully!");
    } catch (err) {
      if (err instanceof EmailJSResponseStatus) {
        console.log("EMAILJS FAILED...", err);
        alert("Failed to send message.");
        return;
      }

      console.log("ERROR", err);
      alert("Failed to send message.");
    }
  };

  return { handleChange, sendEmail, formData }
}

export default useSendEmail
