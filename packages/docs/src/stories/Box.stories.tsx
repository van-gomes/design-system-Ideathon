import type { Meta, StoryObj } from '@storybook/react'
import { Box, BoxProps, Text } from '@roche-ui/react/src'

export default {
  title: 'Surfaces/Box',
  component: Box,
  args: {
    children: <Text color="placeholder">This is the Box element.</Text>,
  },
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {
  args: {
    variant: 'default',
  },
}

export const Secondary: StoryObj<BoxProps> = {
  args: {
    variant: 'secondary',
  },
}
