"use client";

import { Button } from "@components/Button";
import { Divider } from "@components/Divider";
import { Input } from "@components/Input";
import MarqueeText from "@components/MarqueeText";
import {
  AboutContainer,
  TextContainer,
  Heading,
  Text,
  Highlight,
  FormContainer,
  InputRow,
} from "./styles";

export default function Contact() {
  return (
    <>
      <Divider type="black">Let&#39;s Collaborate</Divider>
      <MarqueeText>Contact</MarqueeText>
      <AboutContainer>
        <TextContainer>
          <Heading>Get in touch</Heading>
          <Text>
            I&#39;m always excited to connect — whether it&#39;s about a
            project, partnership, or just to say hi.
            <br />
            <br />
            Or you may reach me at{" "}
            <Highlight>andrealouisedayo@gmail.com</Highlight>.
          </Text>
        </TextContainer>
        <FormContainer>
          <InputRow>
            <Input label="What's your name" placeholder="Your name" />
            <Input
              label="What's your email address"
              placeholder="Your email address"
            />
          </InputRow>
          <Input
            label="What did you want to talk about?"
            placeholder="Your message"
            type="textarea"
          />
          <Button type="black" size="auto" href="#">
            Submit message
          </Button>
        </FormContainer>
      </AboutContainer>
    </>
  );
}
