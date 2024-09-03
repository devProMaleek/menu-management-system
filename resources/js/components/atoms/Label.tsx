import React, { ReactNode } from "react";
import classNames from "classnames";

interface LabelProps {
  children: ReactNode;
  className?: string;
}

const Label: React.FC<LabelProps> = ({ children, className }) => (
  <label
    className={classNames("block text-gray-700 font-bold mb-2", className)}
  >
    {children}
  </label>
);

export default Label;
