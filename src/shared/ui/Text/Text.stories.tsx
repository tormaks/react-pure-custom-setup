/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Theme } from '@/app/providers/theme';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Text } from './Text';

export default {
  title: 'shared/Text',
  component: Text,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  title: 'Title',
  description: 'Description',
};

export const Error = Template.bind({});
Error.args = {
  title: 'Title',
  description: 'Description',
  theme: 'error',
};

export const OnlyTitle = Template.bind({});
OnlyTitle.args = {
  title: 'Title',
};

export const OnlyDescription = Template.bind({});
OnlyDescription.args = {
  description: 'Description',
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
  title: 'Title',
  description: 'Description',
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const ErrorDark = Template.bind({});
ErrorDark.args = {
  title: 'Title',
  description: 'Description',
  theme: 'error',
};
ErrorDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OnlyTitleDark = Template.bind({});
OnlyTitleDark.args = {
  title: 'Title',
};
OnlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OnlyDescriptionDark = Template.bind({});
OnlyDescriptionDark.args = {
  description: 'Description',
};
OnlyDescriptionDark.decorators = [ThemeDecorator(Theme.DARK)];
