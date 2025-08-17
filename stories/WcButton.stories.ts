import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import '../src/wc-button/wc-button';

interface WcButtonArgs {
  label: string;
  icon: string;
  disabled: boolean;
  variant: string;
  size: string;
  loading: boolean;
  fullWidth: boolean;
  tooltip: string;
}

const meta: Meta<WcButtonArgs> = {
  title: 'Components/WcButton',
  argTypes: {
    label: { control: 'text' },
    icon: { control: 'text' },
    disabled: { control: 'boolean' },
    variant: { control: 'select', options: ['default', 'primary', 'secondary', 'success', 'warning', 'error'] },
    size: { control: 'select', options: ['small', 'medium', 'large'] },
    loading: { control: 'boolean' },
    fullWidth: { control: 'boolean' },
    tooltip: { control: 'text' }
  },
  render: (args) => html`<wc-button 
    .label=${args.label}
    .icon=${args.icon}
    ?disabled=${args.disabled}
    .variant=${args.variant}
    .size=${args.size}
    ?loading=${args.loading}
    ?full-width=${args.fullWidth}
    .tooltip=${args.tooltip}
  ></wc-button>`,
};

export default meta;
type Story = StoryObj<WcButtonArgs>;

export const Default: Story = {
  args: {
    label: 'Click me',
    icon: 'star',
    disabled: false,
    variant: 'default',
    size: 'medium',
    loading: false,
    fullWidth: false,
    tooltip: 'You can edit this tooltip'
  },
};