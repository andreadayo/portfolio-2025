import Link from "next/link";
import { ButtonContainer, Text } from "./styles";

interface ButtonProps {
  icon?: string;
  type?: "black" | "yellow" | "default";
  size: "fill" | "auto";
  children: React.ReactNode;
  href?: string;
}

// TODO: Add icon

export function Button({ type, size, children, href }: ButtonProps) {
  if (href) {
    return (
      <Link href={href}>
        <ButtonContainer type={type} size={size}>
          <Text type={type}>{children}</Text>
        </ButtonContainer>
      </Link>
    );
  }

  return (
    <ButtonContainer type={type} size={size}>
      <Text type={type}>{children}</Text>
    </ButtonContainer>
  );
}
