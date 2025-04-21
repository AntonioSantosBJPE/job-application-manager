import { cn } from '@/lib/utils'

interface LogoProps {
  className?: string
  size?: 'sm' | 'md' | 'lg'
}

export function Logo({ className, size = 'md' }: LogoProps) {
  const sizeClasses = {
    sm: 'h-6',
    md: 'h-8',
    lg: 'h-12',
  }

  return (
    <div className={cn('flex items-center gap-2', className)}>
      <div className="relative overflow-hidden rounded-md bg-primary p-1">
        <svg
          className={cn('aspect-square', sizeClasses[size])}
          fill="none"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className="fill-primary-foreground"
            d="M17 7.82L12 4L7 7.82V17.18L12 21L17 17.18V7.82Z"
          />
          <path
            className="fill-primary"
            d="M12 8L8 10.5V15.5L12 18L16 15.5V10.5L12 8Z"
            stroke="currentColor"
            strokeWidth="1"
          />
        </svg>
      </div>
      <div className="flex flex-col">
        <span
          className={cn(
            'font-bold leading-none tracking-tight text-foreground',
            {
              'text-sm': size === 'sm',
              'text-base': size === 'md',
              'text-xl': size === 'lg',
            },
          )}
        >
          Job Application
        </span>
        <span
          className={cn('font-medium leading-none text-muted-foreground', {
            'text-xs': size === 'sm',
            'text-sm': size === 'md',
            'text-base': size === 'lg',
          })}
        >
          Manager
        </span>
      </div>
    </div>
  )
}
