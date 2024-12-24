import { ChangeEvent, FC } from "react";

interface InputFieldProps {
  label?: string;
  id?: string;
  extra?: string;
  value?: string;
  placeholder: string;
  disabled?: boolean;
  rows: number; // Asegúrate de que rows sea de tipo number
  onChange?: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

const TextArea: FC<InputFieldProps> = ({
  label,
  id,
  extra,
  value,
  placeholder,
  disabled,
  rows,
  onChange
}) => {
  return (
    <div className={"bg-black-50 rounded-2xl w-full" + `${extra}`}>
      {label && (
        <div className="pt-1.5">
          <label
            className={`font-normal text-sm text-primary-700/70 mx-2 p-2 t-4 w-full`}
            htmlFor={id}
          >
            {label}
          </label>
        </div>
      )}
      <textarea
        autoComplete="off"
        value={value}
        disabled={disabled}
        id={id}
        name={id}
        placeholder={placeholder}
        className={"focus:ring-0 bg-black-50 text-black-600 mt-0 flex w-full border-none   items-center justify-center rounded-2xl px-4 text-sm outline-none"}
        rows={rows}
        onChange={onChange}
      />
    </div>
  );
};

export default TextArea;
