import * as React from 'react'

import { Check as CheckIcon } from 'lucide-react'

import * as CheckboxPrimitive from '@radix-ui/react-checkbox'

import { cn } from '~/lib/utils'

const Check = React.forwardRef(({ className, ...props }, ref) => (
  <CheckboxPrimitive.Root
    ref={ref}
    className={cn(
      'peer h-4 w-4 shrink-0 rounded-sm border-2 border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground',
      className,
    )}
    {...props}
  >
    <CheckboxPrimitive.Indicator
      className={cn('flex items-center justify-center text-current -mt-[2px]')}
    >
      <CheckIcon className="w-4 h-4" color="white" strokeWidth={3} />
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
))
Check.displayName = CheckboxPrimitive.Root.displayName

export { Check }
