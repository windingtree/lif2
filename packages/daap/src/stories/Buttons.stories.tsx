import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button } from '../components/Buttons';

const Template: ComponentStory<typeof Button> = args => (<Button {...args} />);

export const PurpleButton = Template.bind({});
PurpleButton.args = {
  color: 'purple',
  children: 'Click me'
};

export const GreenButton = Template.bind({});
GreenButton.args = {
  color: 'green',
  children: 'Click me'
};

export const LockedButton = Template.bind({});
LockedButton.args = {
  color: 'green',
  locked: true,
  children: 'Click me'
};

export const LockedProgressButton = Template.bind({});
LockedProgressButton.args = {
  color: 'green',
  locked: true,
  progress: true,
  children: 'Click me'
};

export const UnlockedButton = Template.bind({});
UnlockedButton.args = {
  color: 'green',
  locked: false,
  children: 'Click me'
};

export default {
  title: 'Components/Button',
  component: Button,
} as ComponentMeta<typeof Button>;
