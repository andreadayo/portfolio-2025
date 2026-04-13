import {
  ButtonContainerLink,
  ButtonContainerStatic,
  ButtonText,
  Text,
  IconContainer,
  Icon,
} from "./styles";

interface ButtonProps {
  icon?: string;
  iconSize?: "small" | "medium" | "large";
  type?: "black" | "yellow" | "default";
  size: "fill" | "auto";
  children: React.ReactNode;
  href?: string;
}

export function Button({
  icon,
  iconSize,
  type,
  size,
  children,
  href,
}: ButtonProps) {
  const content = (
    <>
      <ButtonText $type={type}>
        <Text $type={type}>{children}</Text>
      </ButtonText>

      {icon && iconSize && (
        <IconContainer>
          <Icon
            src={icon}
            alt="Button Icon"
            width={16}
            height={16}
            iconsize={iconSize}
          />
        </IconContainer>
      )}
    </>
  );

  if (href) {
    return (
      <ButtonContainerLink href={href} $size={size}>
        {content}
      </ButtonContainerLink>
    );
  }

  return <ButtonContainerStatic $size={size}>{content}</ButtonContainerStatic>;
}
