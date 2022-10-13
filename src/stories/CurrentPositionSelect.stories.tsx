import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import CurrentPositionSelect from '../CurrentPositionSelect';

export default {
    title: 'Example/CurrentPositionSelect',
    component: CurrentPositionSelect,
} as ComponentMeta<typeof CurrentPositionSelect>;

const Template: ComponentStory<typeof CurrentPositionSelect> = () => <CurrentPositionSelect />

export const Primary = Template.bind({});