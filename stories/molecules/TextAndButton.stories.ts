import type { Meta, StoryObj } from '@storybook/react';
import { TextAndButton } from '../../index';


const meta: Meta<typeof TextAndButton> = {
  title: 'MOLECULES/TextAndButton',
  component: TextAndButton,
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
    label: 'My text',
    variant: 'contained',
    onClick: () => console.log("Hello from text and button"),
    text: 'Click me',
  },
};

