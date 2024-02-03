import type { SVGProps } from 'react'

import { withMemoizedForwardRef } from '@/shared/lib/HOC'

const svgWrapper = withMemoizedForwardRef<SVGSVGElement, SVGProps<SVGSVGElement>>

export const Icons = {
  ArrowDown: svgWrapper((props, ref) => (
    <svg
      fill={'currentColor'}
      height={16}
      ref={ref}
      viewBox={'0 0 24 24'}
      width={16}
      xmlns={'http://www.w3.org/2000/svg'}
      {...props}
    >
      <path
        d={
          'M5.51 9.46a1 1 0 0 1 1.64-.77l5.36 4.48 5.37-4.32A1 1 0 0 1 19.3 9a1 1 0 0 1-.15 1.46l-6 4.83a1 1 0 0 1-1.27 0l-6-5a1 1 0 0 1-.36-.83Z'
        }
      />
    </svg>
  )),
  ArrowUp: svgWrapper((props, ref) => (
    <svg
      fill={'currentColor'}
      height={16}
      ref={ref}
      viewBox={'0 0 24 24'}
      width={16}
      xmlns={'http://www.w3.org/2000/svg'}
      {...props}
    >
      <path
        d={
          'M19.542 14.514a1.001 1.001 0 0 1-1.64.77l-5.36-4.48-5.37 4.32a1 1 0 0 1-1.41-.15 1 1 0 0 1 .15-1.46l6-4.83a1 1 0 0 1 1.27 0l6 5a1 1 0 0 1 .36.83Z'
        }
      />
    </svg>
  )),
}

// ==============================================================================

if (process.env.NODE_ENV === 'development') {
  for (const iconsKey in Icons) {
    Icons[iconsKey as keyof typeof Icons].displayName = `Icons.${iconsKey}`
  }
}

// ==============================================================================
