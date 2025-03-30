import { User } from 'phosphor-react'
import { ComponentProps } from 'react'
import { AvatarContainer, AvatarImage, AvatarFallback } from './styles'

export interface AvatarProps extends ComponentProps<typeof AvatarImage> {
  variant?: 'primary' | 'secondary' | 'default'
  src?: string
  alt?: string
}

export function Avatar({ src, variant = 'default', ...props }: AvatarProps) {
  return (
    <AvatarContainer>
      {src ? (
        <AvatarImage src={src} alt={props.alt} />
      ) : (
        <AvatarFallback variant={variant} delayMs={600}>
          <User />
        </AvatarFallback>
      )}
    </AvatarContainer>
  )
}

Avatar.displayName = 'Avatar'