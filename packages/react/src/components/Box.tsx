import { ComponentProps, ElementType } from 'react'
import { styled } from '../styles'

export const Box = styled('div', {
  variants: {
    variant: {
      default: {
        backgroundColor: '$white',
        border: '1px solid #DBD6D1',
        boxShadow: 'none',
        borderRadius: '$md',
        padding: '$4',
      },
      secondary: {
        backgroundColor: '$gray500',
        border: '1px solid $gray400',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        borderRadius: '$md',
        padding: '$4',
      }, 
    },
  },

  defaultVariants: {
    variant: 'default',
  },
})

export interface BoxProps extends ComponentProps<typeof Box> {
  as?: ElementType
}

Box.displayName = 'Box'