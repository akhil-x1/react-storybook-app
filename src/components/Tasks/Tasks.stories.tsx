import type { Meta, StoryObj } from "@storybook/react";
import Tasks from "./Tasks";

const meta = {
  component: Tasks,
  title: "Task",
  tags: ["autodocs"],
  args: {},
} satisfies Meta<typeof Tasks>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    task: {
      id: "1",
      title: "Test Task",
      state: "TASK_INBOX",
    },
  },
};

export const Pinned: Story = {
  args: {
    task: {
      ...Default.args.task,
      state: "TASK_PINNED",
    },
  },
};

export const Archived: Story = {
  args: {
    task: {
      ...Default.args.task,
      state: "TASK_ARCHIVED",
    },
  },
};
