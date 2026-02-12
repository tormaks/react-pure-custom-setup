/* eslint-disable react/jsx-props-no-spreading */
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Theme } from '@/app/providers/theme';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';
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
Primary.decorators = [StoreDecorator({ loginForm: { username: 'username', password: 'password', isLoading: false } })];

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
  isOpen: true,
};
PrimaryDark.decorators = [StoreDecorator({ loginForm: { username: 'username', password: 'password', isLoading: false } }), ThemeDecorator(Theme.DARK)];

export const Error = Template.bind({});
Error.args = {
  isOpen: true,
};
Error.decorators = [StoreDecorator({
  loginForm: {
    username: 'username', password: 'password', error: 'ERROR', isLoading: false,
  },
})];

export const Loading = Template.bind({});
Loading.args = {
  isOpen: true,
};
Loading.decorators = [StoreDecorator({
  loginForm: {
    username: 'username', password: 'password', isLoading: true,
  },
})];
