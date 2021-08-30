import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Container } from '../components/Container';

const Template: ComponentStory<typeof Container> = args => (<Container {...args} />);

export const ContainerWithTitle = Template.bind({});
ContainerWithTitle.args = {
  title: 'Hello dude!'
};

export const ContainerWithPurpleTitle = Template.bind({});
ContainerWithPurpleTitle.args = {
  title: 'Hello dude!',
  titleStyle: 'purple'
};

export const ContainerWithoutTitle = Template.bind({});
ContainerWithoutTitle.args = {};

export default {
  title: 'Components/Container',
  component: Container,
} as ComponentMeta<typeof Container>;
