import { useRef } from "react";
import { socials } from "../lib/constants";
import H1 from "./Heading";
import Input from "./Input";
import { IoSend } from "react-icons/io5";
import { twMerge } from "tailwind-merge";
import useSendEmail from "../hooks/useSendEmail";

const Contact = () => {
  const form = useRef<HTMLFormElement | null>(null);
  const { formData, handleChange, sendEmail } = useSendEmail(form.current);

  return (
    <section data-aos='flip-down' id='contact' className='pt-20'>
      <H1>
        get <span className='text-secondary'>in touch</span>
      </H1>
      <form
        ref={form}
        onSubmit={sendEmail}
        className='mx-auto flex flex-col max-w-md gap-10 mb-20'
      >
        <Input
          formData={formData}
          onChange={handleChange}
          label='Full Name'
          name='fullname'
          required
        />
        <Input
          formData={formData}
          onChange={handleChange}
          label='Your Email'
          name='email'
          required
        />
        <div className='flex group'>
          <label
            htmlFor='message'
            className={twMerge(
              "duration-300 absolute pl-8 pt-5 text-primary/50 group-focus-within:-translate-y-12 group-focus-within:text-secondary",
              formData.message ? "-translate-y-12 " : ""
            )}
          >
            Your Message
          </label>
          <textarea
            name='message'
            id='message'
            required
            rows={4}
            onChange={handleChange}
            className='p-5 w-full rounded-2xl max-w-md bg-bg4/20 shadow-lg outline-none focus:ring focus:ring-secondary '
          />
        </div>
        <button
          type='submit'
          className='max-w-fit px-10 gap-2 py-4 text-base font-semibold border-animated bg-secondary hover:bg-primary text-primary hover:text-secondary rounded-full cursor-pointer'
        >
          SEND <IoSend />
        </button>
      </form>
      <div className='flex gap-8 justify-center'>
        {socials.map((item, i) => (
          <a
            key={i}
            href={item.url}
            target='_blank'
            title={item.title}
            className='text-2xl duration-300 ring- ring-primary/80 hover:ring-0 text-primary/50 hover:text-secondary'
          >
            {item.icon}
          </a>
        ))}
      </div>
    </section>
  );
};

export default Contact;
