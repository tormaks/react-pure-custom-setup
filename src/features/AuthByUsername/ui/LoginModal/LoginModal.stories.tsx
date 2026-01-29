/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Theme } from '@/app/providers/theme';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { LoginModal } from './LoginModal';

export default {
  title: 'features/LoginModal',
  component: LoginModal,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof LoginModal>;

const Template: ComponentStory<typeof LoginModal> = (args) => <LoginModal {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  isOpen: true,
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
  isOpen: true,
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];
