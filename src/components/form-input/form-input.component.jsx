import {
  GroupContainer,
  FormInputs,
  FormInputLabel,
} from "./form-input.styles";

const FormInput = ({ label, ...otherProps }) => {
  return (
    <GroupContainer>
      <FormInputs className="form-input" {...otherProps} />

      {FormInputLabel && (
        <FormInputLabel shrink={otherProps.value.length}>
          {label}
        </FormInputLabel>
      )}
    </GroupContainer>
  );
};

export default FormInput;
