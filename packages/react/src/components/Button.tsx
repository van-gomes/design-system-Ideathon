import { ComponentProps, ElementType } from 'react'
import { styled } from '../styles'

export const Button = styled('button', {
  all: 'unset',
  borderRadius: '$sm',
  fontSize: '$sm',
  fontWeight: '$medium',
  fontFamily: '$default',
  textAlign: 'center',
  minWidth: 120,
  boxSizing: 'border-box',
  padding: '0 $4',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '$2',

  cursor: 'pointer',

  svg: {
    width: '$4',
    height: '$4',
  },

  '&:disabled': {
    cursor: 'not-allowed',
  },

  variants: {
    variant: {
      primary: {
        color: '$white',
        background: '$rocheBlue',

        '&:not(:disabled):hover': {
          background: '$darkBlue',
        },

        '&:disabled': {
          backgroundColor: '$gray200',
        },
      },

      secondary: {
        color: '$rocheBlue',
        border: '2px solid $darkBlue',

        '&:not(:disabled):hover': {
          background: '$darkBlue',
          color: '$white',
        },

        '&:disabled': {
          color: '$gray200',
          borderColor: '$gray200',
        },
      },

      tertiary: {
        color: '$gray400',
        border: '2px solid $gray400',

        '&:not(:disabled):hover': {
          color: '$rocheBlue',
          borderColor: '$rocheBlue',
        },

        '&:disabled': {
          color: '$gray600',
          borderColor: '$gray200',
        },
      },

      danger: {
        color: '$white',
        background: '$red500',

        '&:not(:disabled):hover': {
          background: '$red700',
        },

        '&:disabled': {
          backgroundColor: '$gray400',
        },
      },
    },

    size: {
      sm: {
        height: 38,
      },

      md: {
        height: 46,
      },
    },
  },

  defaultVariants: {
    variant: 'primary',
    size: 'md',
  },
})

export interface ButtonProps extends ComponentProps<typeof Button> {
  as?: ElementType
}

Button.displayName = 'Button'