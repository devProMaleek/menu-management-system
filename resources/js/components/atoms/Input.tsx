import React, { ChangeEvent } from "react";
import classNames from "classnames";

interface InputProps {
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  className?: string;
}

const Input: React.FC<InputProps> = ({
  value,
  onChange,
  placeholder,
  className,
}) => (
  <input
    value={value}
    onChange={onChange}
    placeholder={placeholder}
    className={classNames(
      "border rounded-md px-3 py-2 focus:outline-none",
      className
    )}
  />
);

export default Input;
