import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import '../src/wc-rating/wc-rating';

interface WcRatingArgs {
  value: number;
  max: number;
  readonly: boolean;
  size: string;
  tooltip: string;
}

const meta: Meta<WcRatingArgs> = {
  title: 'Components/WcRating',
  argTypes: {
    value: { control: { type: 'range', min: 0, max: 5 } },
    max: { control: 'number' },
    readonly: { control: 'boolean' },
    size: { control: 'select', options: ['small', 'medium', 'large'] },
    tooltip: { control: 'text' }
  },
  render: (args) => html`<wc-rating 
    .value=${args.value}
    .max=${args.max}
    ?readonly=${args.readonly}
    .size=${args.size}
    .tooltip=${args.tooltip}
  ></wc-rating>`,
};

export default meta;
type Story = StoryObj<WcRatingArgs>;

export const Default: Story = {
  args: {
    value: 3,
    max: 5,
    readonly: false,
    size: 'medium',
    tooltip: 'Rate this item'
  },
};