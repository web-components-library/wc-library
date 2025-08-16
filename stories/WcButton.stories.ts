import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import '../src/wc-button/WcButton';

interface WcButtonArgs {
  label: string;
  icon: string;
  disabled: boolean;
  variant: 'primary' | 'secondary' | 'danger' | 'default';
  size: 'small' | 'medium' | 'large';
  loading: boolean;
  fullWidth: boolean;
}

const meta: Meta<WcButtonArgs> = {
  title: 'Components/WcButton',
  parameters: {
    docs: {
      page: () => import('./WcButton.mdx')
    }
  },
  argTypes: {
    label: { control: 'text' },
    icon: { control: 'text' },
    disabled: { control: 'boolean' },
    variant: { control: 'select', options: ['primary', 'secondary', 'danger', 'default'] },
    size: { control: 'select', options: ['small', 'medium', 'large'] },
    loading: { control: 'boolean' },
    fullWidth: { control: 'boolean' }
  },
  render: (args) => html`<wc-button 
    .label=${args.label} 
    .icon=${args.icon}
    ?disabled=${args.disabled}
    .variant=${args.variant}
    .size=${args.size}
    ?loading=${args.loading}
    ?full-width=${args.fullWidth}
  ></wc-button>`,
};

export default meta;
type Story = StoryObj<WcButtonArgs>;

export const Default: Story = {
  args: {
    label: 'Button',
    icon: 'success',
    disabled: false,
    variant: 'default',
    size: 'medium',
    loading: false,
    fullWidth: false
  },
};