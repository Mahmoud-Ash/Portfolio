import { ChangeEvent, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type InputProps = {
  label: ReactNode;
  type?: "text" | "email";
  required?: boolean;
  name: "fullname" | "email";
  onChange?: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  formData?: {
    fullname: string;
    email: string;
    message: string;
  };
};
const Input = ({
  label,
  type = "text",
  required = false,
  name,
  onChange,
  formData,
}: InputProps) => {
  // const [data, setData] = useState("");

  return (
    <div className='group flex items-center'>
      <label
        htmlFor={name}
        className={twMerge(
          "duration-300 absolute pl-8 text-primary/50 group-focus-within:-translate-y-12 group-focus-within:text-secondary",
          formData?.[name] ? "-translate-y-12 " : ""
        )}
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        onChange={onChange}
        className='p-5 rounded-full w-full max-w-md bg-bg4/20 shadow-lg outline-none focus:ring focus:ring-secondary'
      />
    </div>
  );
};

export default Input;
