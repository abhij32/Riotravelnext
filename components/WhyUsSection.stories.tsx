import type { Meta, StoryObj } from "@storybook/react";
import { WhyUsSection } from "./WhyUsSection";

const meta = {
  title: "Components/WhyUsSection",
  component: WhyUsSection,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof WhyUsSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const Mobile: Story = {
  parameters: {
    viewport: {
      defaultViewport: "mobile",
    },
  },
};

export const Tablet: Story = {
  parameters: {
    viewport: {
      defaultViewport: "tablet",
    },
  },
};

export const WithCustomBackground: Story = {
  args: {
    className: "bg-slate-100",
  },
};
