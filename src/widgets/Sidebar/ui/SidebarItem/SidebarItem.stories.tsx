/* eslint-disable react/jsx-props-no-spreading */
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Theme } from '@/app/providers/theme';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { SidebarItem } from './SidebarItem';
import { sidebarItems } from '../../model';

export default {
  title: 'widget/SidebarItem',
  component: SidebarItem,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof SidebarItem>;

const Template: ComponentStory<typeof SidebarItem> = (args) => <SidebarItem {...args} />;

export const Light = Template.bind({});
Light.args = {
  item: sidebarItems[0],
  collapsed: false,
};
Light.decorators = [StoreDecorator({})];

export const LightCollapsed = Template.bind({});
LightCollapsed.args = {
  item: sidebarItems[1],
  collapsed: true,
};
LightCollapsed.decorators = [StoreDecorator({})];

export const Dark = Template.bind({});
Dark.args = {
  item: sidebarItems[1],
  collapsed: false,
};
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})];

export const DarkCollapsed = Template.bind({});
DarkCollapsed.args = {
  item: sidebarItems[1],
  collapsed: true,
};
DarkCollapsed.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})];
