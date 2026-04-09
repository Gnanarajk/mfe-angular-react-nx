import type { Meta, StoryObj } from '@storybook/angular';
import { ReactWrapper } from './react-wrapper';
import { expect } from 'storybook/test';

const meta: Meta<ReactWrapper> = {
  component: ReactWrapper,
  title: 'ReactWrapper',
};
export default meta;

type Story = StoryObj<ReactWrapper>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvas }) => {
    await expect(canvas.getByText(/react-wrapper/gi)).toBeTruthy();
  },
};
