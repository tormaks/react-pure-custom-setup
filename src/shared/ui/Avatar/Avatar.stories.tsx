/* eslint-disable react/jsx-props-no-spreading */
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Avatar } from './Avatar';
import avatar from '../../assets/tests/avatar.jpeg';

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
  src: avatar,
};

export const Small = Template.bind({});
Small.args = {
  size: 60,
  src: avatar,
};
