/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Theme } from '@/app/providers/theme';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Input } from './Input';

export default {
  title: 'shared/Input',
  component: Input,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  value: '123123',
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
  value: '123123',
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const PrimaryWithPlaceholder = Template.bind({});
PrimaryWithPlaceholder.args = {
  placeholder: 'Введите 123123',
};

export const PrimaryWithPlaceholderDark = Template.bind({});
PrimaryWithPlaceholderDark.args = {
  placeholder: 'Введите 123123',
};
PrimaryWithPlaceholderDark.decorators = [ThemeDecorator(Theme.DARK)];
