/* eslint-disable react/jsx-props-no-spreading */
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ProfileCard } from './ProfileCard';
import { Country } from '../../../Country';
import { Currency } from '../../../Currency';

export default {
  title: 'entities/ProfileCard',
  component: ProfileCard,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => <ProfileCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  data: {
    first: 'Максим',
    lastname: 'Иванов',
    age: 25,
    currency: Currency.USD,
    country: Country.Russia,
    city: 'Moscow',
    username: 'admin',
    avatar: 'https://i.ibb.co/DHGRjZQ4/storybook.jpg',
  },
};

export const WithError = Template.bind({});
WithError.args = {
  error: 'error',
};

export const WithLoading = Template.bind({});
WithLoading.args = {
  isLoading: true,
};
