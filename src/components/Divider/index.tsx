import Link from "next/link";
import { DividerContainer, Title, Text, Button, Action } from "./styles";

interface DividerProps {
  type: "black" | "yellow";
  children: React.ReactNode;
  ctaLabel?: string;
  href?: string;
}

export function Divider({ type, children, ctaLabel, href }: DividerProps) {
  return (
    <DividerContainer>
      {/* Text */}
      <Title type={type}>
        <Text type={type}>{children}</Text>
      </Title>

      {/* Button */}
      {ctaLabel && href && (
        <Link href={href}>
          <Button>
            <Action>{ctaLabel}</Action>
          </Button>
        </Link>
      )}
    </DividerContainer>
  );
}
