import React from "react";
export interface ButtonProps {
  label: string;
}

const Button = (props: ButtonProps) => {
  return (
    <button className="border border-red-800 px-4 py-2 text-lg">
      {props.label}
    </button>
  );
};

export default Button;
