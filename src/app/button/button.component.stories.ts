import { Meta, StoryFn } from '@storybook/angular';
import { ButtonComponent } from './button.component';

export default {
  title: 'Components/Button',
  component: ButtonComponent,
  args: {
    label: 'Button',
  },
} as Meta;

const Template: StoryFn<ButtonComponent> = (args: ButtonComponent) => ({
  props: args,
});

export const Primary = Template.bind({});

export const Secondary = Template.bind({});

Secondary.args = {
  type: 'secondary',
};

export const Tertiary = Template.bind({});

Tertiary.args = {
  type: 'tertiary',
};
