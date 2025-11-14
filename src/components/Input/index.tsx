import { InputContainer, InputLabel, InputField, TextArea } from "./styles";

interface InputProps {
  label: string;
  placeholder: string;
  type?: "text" | "email" | "textarea";
}

export function Input({ label, placeholder, type }: InputProps) {
  return (
    <InputContainer>
      <InputLabel>{label}</InputLabel>
      {type === "textarea" ? (
        <TextArea placeholder={placeholder} />
      ) : (
        <InputField type={type} placeholder={placeholder} />
      )}
    </InputContainer>
  );
}
