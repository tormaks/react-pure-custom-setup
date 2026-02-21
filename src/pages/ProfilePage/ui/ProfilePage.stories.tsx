/* eslint-disable react/jsx-props-no-spreading */
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Theme } from '@/app/providers/theme';
import { IProfileSchema } from '@/features/EditableProfileCard';
import { Currency } from '@/entities/Currency';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Country } from '@/shared/constants';
import ProfilePage from './ProfilePage';

const defaultProfileSchema: IProfileSchema = {
  data: {
    first: 'Иван',
    lastname: 'Иванов',
    age: 25,
    currency: Currency.RUB,
    country: Country.Russia,
    city: 'Moscow',
    username: 'admin',
    avatar: 'https://habrastorage.org/web/d18/55d/17d/d1855d17df684fa19c6cb1bbf546d49d.jpg',
  },
  isLoading: false,
  error: undefined,
  readonly: true,
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
