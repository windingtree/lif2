import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Main } from '../pages/Main';
import * as HeaderStories from './Header.stories';

export default {
  title: 'Page/Main',
  component: Main,
} as ComponentMeta<typeof Main>;

const Template: ComponentStory<typeof Main> = (args) => <Main />;

// export const LoggedIn = Template.bind({});
// LoggedIn.args = {
//   ...HeaderStories.LoggedIn.args,
// };

// export const LoggedOut = Template.bind({});
// LoggedOut.args = {
//   ...HeaderStories.LoggedOut.args,
// };
