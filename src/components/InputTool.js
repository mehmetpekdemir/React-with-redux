import React from "react";
import { FormGroup, Label, Input } from "reactstrap";

export const InputTool = (props) => {
  const { label, type, name, placeholder, onChange } = props;
  return (
    <div>
      <FormGroup>
        <Label for={name}>{label}</Label>
        <Input
          name={name}
          onChange={onChange}
          type={type}
          placeholder={placeholder}
        />
      </FormGroup>
    </div>
  );
};
