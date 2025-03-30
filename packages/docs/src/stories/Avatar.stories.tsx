import type { Meta, StoryObj } from '@storybook/react'
import { Avatar, AvatarProps } from '@roche-ui/react/src'

export default {
  title: 'Data display/Avatar',
  component: Avatar,
  args: {
    alt: 'Vânia Gomes',
  },
  argTypes: {
    src: {
      control: {
        type: 'text',
      },
    },
  },
} as Meta<AvatarProps>

export const WithImage: StoryObj<AvatarProps> = {
  args: {
    src: 'https://github.com/van-gomes.png',
  },
}

export const Primary: StoryObj<AvatarProps> = {
  args: {
    variant: 'primary',
  },
}

export const Secondary: StoryObj<AvatarProps> = {
  args: {
    variant: 'secondary',
  },
}

export const Default: StoryObj<AvatarProps> = {
  args: {
    variant: 'default',
  },
}

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    variant: 'primary',
  },
}