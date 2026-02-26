/* eslint-disable react/jsx-props-no-spreading */
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Avatar } from './Avatar';

export default {
  title: 'shared/Avatar',
  component: Avatar,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  size: 120,
  src: 'https://i.ibb.co/DHGRjZQ4/storybook.jpg',
};

export const Small = Template.bind({});
Small.args = {
  size: 60,
  src: 'https://i.ibb.co/DHGRjZQ4/storybook.jpg',
};
