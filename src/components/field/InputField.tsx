import { ChangeEvent, FC, useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";

interface InputFieldProps {
  inline?: boolean;
  mode?: "search" | "text" | "none" | "tel" | "url" | "email" | "numeric" | "decimal" | undefined;
  label?: string;
  id?: string;
  extra?: string;
  value?: string;
  type?: string;
  placeholder?: string;
  variant?: string;
  disabled?: boolean;
  accept?: string;
  readOnly?: boolean;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

const InputField: FC<InputFieldProps> = ({
  inline,
  mode,
  label,
  id,
  extra,
  value,
  type,
  placeholder,
  variant,
  disabled,
  accept,
  readOnly,
  onChange
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className={`${extra == null ? "" : extra}`}>
      {inline && label ? (
        <div className="flex bg-black-50 w-full rounded-xl items-center">
          <label
            htmlFor={id}
            className={`font-normal text-nowrap text-sm pl-2 my-auto text-primary-700/70 ${variant === "auth" ? "ml-1.5 font-medium" : "ml-1.5 font-bold"}`}
          >
            {label}
          </label>
          <div className="w-full relative flex items-center">
            <input
              inputMode={`${mode || "text" || null}`}
              autoComplete="false"
              value={value}
              disabled={disabled}
              type={showPassword ? "text" : type}
              id={id}
              name={id}
              accept={accept}
              placeholder={placeholder}
              onChange={onChange}
              readOnly={readOnly}
              className={`focus:ring-0 no-zoom mt-0 text-right bg-black-50 flex w-full border-none text-black-600 items-center justify-center rounded-2xl py-3 ps-1 pe-4 text-sm outline-none ${type === "password"&& " pr-8"}`} // Added padding-right for inline mode
            />
            {type === "password" && (
              <button
                type="button"
                className="absolute inset-y-0 right-0 flex items-center pr-3 text-black-600"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? <FiEyeOff /> : <FiEye />}
              </button>
            )}
          </div>
        </div>
      ) : (
        <div>
          {label && (
            <label
              htmlFor={id}
              className={`font-normal text-sm text-primary-700/70 ${variant === "auth" ? "ml-1.5 font-medium" : "ml-1.5 font-bold"}`}
            >
              {label}
            </label>
          )}
          <div className="relative flex items-center">
            <input
              inputMode={`${mode || "text" || null}`}
              autoComplete="off"
              value={value}
              disabled={disabled}
              type={showPassword ? "text" : type}
              id={id}
              name={id}
              accept={accept}
              placeholder={placeholder}
              onChange={onChange}
              readOnly={readOnly}
              className={`focus:ring-0 no-zoom mt-0 flex w-full border-none bg-black-50 text-black-600 items-center justify-center rounded-2xl p-4 text-sm outline-none pr-10`} // Added padding-right for non-inline mode
            />
            {type === "password" && (
              <button
                type="button"
                className="absolute inset-y-0 right-0 flex items-center pr-3 text-black-600"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? <FiEyeOff /> : <FiEye />}
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default InputField;
