/* eslint-disable react/jsx-props-no-spreading */
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Theme } from '@/app/providers/theme';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Navbar } from './Navbar';

export default {
  title: 'widget/Navbar',
  component: Navbar,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Navbar>;

const Template: ComponentStory<typeof Navbar> = (args) => <Navbar {...args} />;

export const PrimaryNavbar = Template.bind({});
PrimaryNavbar.args = {};
PrimaryNavbar.decorators = [StoreDecorator({})];

export const PrimaryNavbarDark = Template.bind({});
PrimaryNavbarDark.args = {};
PrimaryNavbarDark.decorators = [StoreDecorator({}), ThemeDecorator(Theme.DARK)];

export const AuthNavbar = Template.bind({});
AuthNavbar.args = {};
AuthNavbar.decorators = [StoreDecorator({ user: { authData: { id: '1', username: 'username' } } })];

export const AuthNavbarDark = Template.bind({});
AuthNavbarDark.args = {};
AuthNavbarDark.decorators = [StoreDecorator({ user: { authData: { id: '1', username: 'username' } } }), ThemeDecorator(Theme.DARK)];
