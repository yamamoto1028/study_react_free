import React from "react";

export const FormWrap = (props) => {
  return (
    <div className={props.divClassName}>
      <label htmlFor={props.htmlFor} className={props.labelClassName}>
        {props.title}
      </label>
      <input
        type={props.text}
        className={props.inputClassName}
        name={props.name}
        id={props.id}
        required={props.required}
      />
    </div>
  );
};
