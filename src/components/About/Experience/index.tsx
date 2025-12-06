"use client";

import { Divider } from "@components/Divider";
import { PortableTextBlock } from "sanity";
import RichText from "@components/RichText";
import { getImageUrl } from "@/src/sanity/lib/getImageUrl";
import { FALLBACK_IMAGE } from "@/src/constants/images";
import {
  AboutContainer,
  ElementsContainer,
  TextContainer,
  Heading,
  ItemContainer,
  CompanyContainer,
  LogoContainer,
  InfoContainer,
  CompanyName,
  Position,
  Duration,
} from "./styles";

type ExperienceItem = {
  type: string;
  isShown: boolean;
  icon: string;
  company: string;
  role: string;
  startDate: string;
  endDate: string;
};

interface ListItemProps {
  item?: ExperienceItem;
}

function ListItem({ item }: ListItemProps) {
  const iconUrl = getImageUrl(item?.icon);

  return (
    <>
      <ItemContainer>
        <LogoContainer $backgroundimage={iconUrl || FALLBACK_IMAGE} />
        <CompanyContainer>
          <InfoContainer>
            <CompanyName>{item?.role}</CompanyName>
            <Position>{item?.company}</Position>
          </InfoContainer>
          <Duration>{item && `${item.startDate} - ${item.endDate}`}</Duration>
        </CompanyContainer>
      </ItemContainer>
    </>
  );
}

type ExperienceProps = {
  experienceDividerTitle: string;
  experienceDividerButton: {
    label: string;
    path: string;
  };
  experienceHeader: PortableTextBlock[];
  educationDividerTitle: string;
  educationHeader: PortableTextBlock[];
  experience: ExperienceItem[];
};

export default function Experience({ data }: { data: ExperienceProps }) {
  const experienceItems =
    data.experience?.filter(
      (item) => item.isShown && item.type === "experience"
    ) ?? [];
  const educationItems =
    data.experience?.filter(
      (item) => item.isShown && item.type === "education"
    ) ?? [];

  return (
    <>
      {/* Experience Section */}
      <Divider
        type="black"
        ctaLabel={data.experienceDividerButton.label}
        href={data.experienceDividerButton.path}
      >
        {data.experienceDividerTitle}
      </Divider>
      <AboutContainer>
        <TextContainer>
          <Heading>
            <RichText value={data.experienceHeader ?? []} />
          </Heading>
        </TextContainer>
        <ElementsContainer>
          {experienceItems.map((item) => (
            <ListItem key={`${item.company}-${item.startDate}`} item={item} />
          ))}
        </ElementsContainer>
      </AboutContainer>

      {/* Education Section */}
      <Divider type="black">{data.educationDividerTitle}</Divider>
      <AboutContainer>
        <TextContainer>
          <Heading>
            <RichText value={data.educationHeader ?? []} />
          </Heading>
        </TextContainer>
        <ElementsContainer>
          {educationItems.length === 0 && <ListItem />}
          {educationItems.map((item) => (
            <ListItem key={`${item.company}-${item.startDate}`} item={item} />
          ))}
        </ElementsContainer>
      </AboutContainer>
    </>
  );
}
