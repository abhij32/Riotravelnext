import type { Meta, StoryObj } from "@storybook/react";
import { SectionWithCards } from "./SectionWithCards";

const defaultCards = [
  {
    title: "Luxury Travel",
    content:
      "Experience the finest in travel comfort with our premium fleet and professional chauffeurs.",
  },
  {
    title: "24/7 Service",
    content:
      "Round-the-clock availability to ensure your travel needs are met any time of day.",
  },
  {
    title: "Custom Tours",
    content:
      "Personalized travel packages tailored to your preferences and schedule.",
  },
];

const meta = {
  title: "Components/SectionWithCards",
  component: SectionWithCards,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof SectionWithCards>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    heading: "Why Choose Us",
    cards: defaultCards,
  },
};

export const WithMoreCards: Story = {
  args: {
    heading: "Our Services",
    cards: [
      ...defaultCards,
      {
        title: "Airport Transfers",
        content: "Reliable and punctual airport pickup and drop-off services.",
      },
      {
        title: "Corporate Travel",
        content:
          "Specialized services for business travelers with priority booking.",
      },
      {
        title: "Group Tours",
        content:
          "Organized group tours with experienced guides and planned itineraries.",
      },
    ],
  },
};

export const Mobile: Story = {
  parameters: {
    viewport: {
      defaultViewport: "mobile1",
    },
  },
  args: {
    heading: "Why Choose Us",
    cards: defaultCards,
  },
};

export const Tablet: Story = {
  parameters: {
    viewport: {
      defaultViewport: "tablet",
    },
  },
  args: {
    heading: "Why Choose Us",
    cards: defaultCards,
  },
};
