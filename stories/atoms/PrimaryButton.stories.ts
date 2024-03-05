import type { Meta, StoryObj } from '@storybook/react';
import { PrimaryButton } from '../../lib/main';


const meta: Meta<typeof PrimaryButton> = {
  title: 'ATOMS/Button',
  component: PrimaryButton,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    variant: 'contained',
    onClick: () => console.log("Hello from button"),
    text: 'Button',
  },
};

