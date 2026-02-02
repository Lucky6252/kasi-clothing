import { GroupContainer, FormInputs, FormInputLabel } from "./form-input.styles";

const FormInput = ({ label, ...otherProps }) => {
  return (
    <GroupContainer>
      <FormInputs className="form-input" {...otherProps} />

      {FormInputLabel && (
        <FormInputLabel
          className={`${
            otherProps.value.length ? "shrink" : ""
          } form-input-label`}
        >
          {label}
        </FormInputLabel>
      )}
    </GroupContainer>
  );
};

export default FormInput;
