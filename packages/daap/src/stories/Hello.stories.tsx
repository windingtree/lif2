import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Hello } from '../pages/Hello';

const Template: ComponentStory<typeof Hello> = args => (<Hello />);

export const HelloPrimary = Template.bind({});
HelloPrimary.args = {
  logIn: () => {}
};

export default {
  title: 'Pages/Hello',
  component: Hello,
} as ComponentMeta<typeof Hello>;
