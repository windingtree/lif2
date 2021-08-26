import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Account } from '../components/Account';

const Template: ComponentStory<typeof Account> = args => (<Account {...args} />);

export const DefinedAddress = Template.bind({});
DefinedAddress.args = {
  address: '0x70997970C51812dc3A010C7d01b50e0d17dc79C8'
};

export const UndefinedAddress = Template.bind({});
UndefinedAddress.args = {};

export default {
  title: 'Components/Account',
  component: Account,
} as ComponentMeta<typeof Account>;
