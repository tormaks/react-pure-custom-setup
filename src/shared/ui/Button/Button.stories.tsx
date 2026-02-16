/* eslint-disable react/jsx-props-no-spreading */
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Theme } from '@/app/providers/theme';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Button } from './Button';

export default {
  title: 'shared/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'Text',
};

export const Clear = Template.bind({});
Clear.args = {
  children: 'Text',
  theme: 'clear',
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: 'Text',
  disabled: true,
};

export const ClearInverted = Template.bind({});
ClearInverted.args = {
  children: 'Text',
  theme: 'clearInverted',
};

export const Outline = Template.bind({});
Outline.args = {
  children: 'Text',
  theme: 'outline',
};

export const OutlineSizeMedium = Template.bind({});
OutlineSizeMedium.args = {
  children: 'Text',
  theme: 'outline',
  size: 'medium',
};

export const OutlineSizeLarge = Template.bind({});
OutlineSizeLarge.args = {
  children: 'Text',
  theme: 'outline',
  size: 'large',
};

export const OutlineDark = Template.bind({});
OutlineDark.args = {
  children: 'Text',
  theme: 'outline',
};
OutlineDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Background = Template.bind({});
Background.args = {
  children: 'Text',
  theme: 'background',
};

export const BackgroundInverted = Template.bind({});
BackgroundInverted.args = {
  children: 'Text',
  theme: 'backgroundInverted',
};

export const Square = Template.bind({});
Square.args = {
  children: '>',
  theme: 'backgroundInverted',
  square: true,
};

export const SquareSizeMedium = Template.bind({});
SquareSizeMedium.args = {
  children: '>',
  theme: 'backgroundInverted',
  square: true,
  size: 'medium',
};

export const SquareSizeLarge = Template.bind({});
SquareSizeLarge.args = {
  children: '>',
  theme: 'backgroundInverted',
  square: true,
  size: 'large',
};
