import * as Avatar from '@radix-ui/react-avatar'
import { styled } from '../../styles'

export const AvatarContainer = styled(Avatar.Root, {
  borderRadius: '$full',
  display: 'inline-block',
  width: '$12',
  height: '$12',
  overflow: 'hidden',
  border: '2px solid $neutral400',
})

export const AvatarImage = styled(Avatar.Image, {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  borderRadius: 'inherit',
})

export const AvatarFallback = styled(Avatar.Fallback, {
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  variants: {
    variant: {
      primary: {
        backgroundColor: '$lightBlue',
        color: '$extraLightBlue',
      },
      secondary: {
        backgroundColor: '$purple300',
        color: '$white',
      },
      default: {
        backgroundColor: '$extraLightBlue',
        color: '$lightBlue',
      },
    },
  },

  defaultVariants: {
    variant: 'default',
  },

  svg: {
    width: '$6',
    height: '$6',
  },
})