import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import '../src/wc-icon/wc-icon';
import { icons } from '../src/wc-icon/icons';

interface WcIconArgs {
  name: string;
  size: string;
  spin: boolean;
  tooltip: string;
}

const meta: Meta<WcIconArgs> = {
  title: 'Components/WcIcon',
  argTypes: {
    name: { control: 'text' },
    size: { control: 'select', options: ['small', 'medium', 'large'] },
    spin: { control: 'boolean' },
    tooltip: { control: 'text' },
  },
  render: (args) => html`<wc-icon 
    .name=${args.name}
    .size=${args.size}
    ?spin=${args.spin}
    .tooltip=${args.tooltip}
  ></wc-icon>`,
};

export default meta;
type Story = StoryObj<WcIconArgs>;

export const Default: Story = {
  args: {
    name: 'star',
    size: 'large',
    spin: false,
    tooltip: 'You can edit this tooltip'
  }
};

export const AllIcons: Story = {
  render: () => html`
    <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(120px, 1fr)); gap: 16px; padding: 20px;">
      ${Object.keys(icons).map(iconName => html`
        <div style="display: flex; flex-direction: column; align-items: center; padding: 8px; border: 1px solid #e0e0e0; border-radius: 4px;">
          <wc-icon name="${iconName}" size="large"></wc-icon>
          <span style="font-size: 12px; margin-top: 4px; text-align: center;">${iconName}</span>
        </div>
      `)}
    </div>
  `,
};
