import { ComponentProps } from 'react';
import { StoryFn } from '@storybook/react';
import Stack from './Stack';

export default {
  title: 'Stack',
  component: Stack,
  argTypes: {
    numberOfChildren: { type: 'number', defaultValue: 4 },
  },
};

const Template: StoryFn<
  ComponentProps<typeof Stack> & { numberOfChildren: number }
> = ({ numberOfChildren, ...args }) => {
  return (
    <Stack {...args}>
      {[...Array(numberOfChildren)].map((item, index) => (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'red',
            height: '50px',
            width: '50px',
          }}
        >
          {index + 1}
        </div>
      ))}
    </Stack>
  );
};

export const Horizontal = Template.bind({});
Horizontal.args = {
  direction: 'row',
  spacing: 2,
  wrap: true,
};

export const Vertical = Template.bind({});
Vertical.args = {
  direction: 'column',
  spacing: 2,
  wrap: false,
};
