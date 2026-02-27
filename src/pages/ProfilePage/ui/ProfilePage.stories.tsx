/* eslint-disable react/jsx-props-no-spreading */
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Theme } from '@/app/providers/theme';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import ProfilePage from './ProfilePage';

const defaultProfileSchema = {
  form: {
    first: 'Иван',
    lastname: 'Иванов',
    age: 25,
    currency: Currency.RUB,
    country: Country.Russia,
    city: 'Moscow',
    username: 'admin',
  },
};

export default {
  title: 'pages/ProfilePage',
  component: ProfilePage,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ProfilePage>;

const Template: ComponentStory<typeof ProfilePage> = () => <ProfilePage />;

export const Light = Template.bind({});
Light.args = {};
Light.decorators = [StoreDecorator({ profile: defaultProfileSchema })];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({ profile: defaultProfileSchema })];
