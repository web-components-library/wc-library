import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import '../src/wc-button/WcButton';

interface WcButtonArgs {
  label: string;
  icon: string;
}

const meta: Meta<WcButtonArgs> = {
  title: 'Components/WcButton',
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    icon: { control: 'text' },
  },
  render: (args) => html`<wc-button .label=${args.label} .icon=${args.icon}></wc-button>`,
};

export default meta;
type Story = StoryObj<WcButtonArgs>;

export const Default: Story = {
  args: {
    label: 'Click me',
  },
};

export const WithIcon: Story = {
  args: {
    label: 'Save',
    icon: '💾',
  },
};

export const IconOnly: Story = {
  args: {
    label: '',
    icon: '⚙️',
  },
};