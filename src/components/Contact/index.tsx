"use client";

import { PortableTextBlock } from "sanity";
import { Button } from "@components/Button";
import { Divider } from "@components/Divider";
import { Input } from "@components/Input";
import MarqueeText from "@components/MarqueeText";
import RichText from "@components/RichText";
import { getImageUrl } from "@/src/sanity/lib/getImageUrl";
import { FALLBACK_IMAGE } from "@/src/constants/images";
import {
  AboutContainer,
  TextContainer,
  Heading,
  Text,
  FormContainer,
  InputRow,
} from "./styles";

type ContactData = {
  dividerTitle?: string;
  marqueeText?: string;
  marqueeIcon?: string;
  header?: string;
  description?: PortableTextBlock[];
  formName?: {
    label?: string;
    placeholder?: string;
  };
  formEmail?: {
    label?: string;
    placeholder?: string;
  };
  formMessage?: {
    label?: string;
    placeholder?: string;
  };
  submitButtonLabel?: string;
};
export default function Contact({ data }: { data: ContactData }) {
  const marqueeIconUrl = getImageUrl(data?.marqueeIcon);
  return (
    <>
      <Divider type="black">{data?.dividerTitle}</Divider>
      <MarqueeText icon={marqueeIconUrl ?? FALLBACK_IMAGE}>
        {data?.marqueeText}
      </MarqueeText>
      <AboutContainer>
        <TextContainer>
          <Heading>{data?.header}</Heading>
          <Text>
            <RichText value={data?.description ?? []} />
          </Text>
        </TextContainer>
        <FormContainer>
          <InputRow>
            <Input
              label={data?.formName?.label ?? ""}
              placeholder={data?.formName?.placeholder ?? ""}
            />
            <Input
              label={data?.formEmail?.label ?? ""}
              placeholder={data?.formEmail?.placeholder ?? ""}
            />
          </InputRow>
          <Input
            label={data?.formMessage?.label ?? ""}
            placeholder={data?.formMessage?.placeholder ?? ""}
            type="textarea"
          />
          <Button type="black" size="auto" href="#">
            {data?.submitButtonLabel}
          </Button>
        </FormContainer>
      </AboutContainer>
    </>
  );
}
