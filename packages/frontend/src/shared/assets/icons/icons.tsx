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
  Check: svgWrapper((props, ref) => (
    <svg
      fill={'currentColor'}
      height={16}
      ref={ref}
      stroke={'currentColor'}
      viewBox={'0 0 448 512'}
      width={16}
      xmlns={'http://www.w3.org/2000/svg'}
      {...props}
    >
      <path
        d={
          'M438.6 105.4a32.05 32.05 0 0 1 0 45.3l-256 256a32.05 32.05 0 0 1-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7l233.4-233.3a32.05 32.05 0 0 1 45.3 0z'
        }
        stroke={'none'}
      />
    </svg>
  )),
  Spinner: svgWrapper((props, ref) => (
    <svg
      fill={'currentColor'}
      height={24}
      ref={ref}
      viewBox={'0 0 24 24'}
      width={24}
      xmlns={'http://www.w3.org/2000/svg'}
      {...props}
    >
      <path
        d={'M12 1a11 11 0 1 0 11 11A11 11 0 0 0 12 1Zm0 19a8 8 0 1 1 8-8 8 8 0 0 1-8 8Z'}
        opacity={0.25}
      />
      <path
        d={
          'M12 4a8 8 0 0 1 7.89 6.7 1.53 1.53 0 0 0 1.49 1.3 1.5 1.5 0 0 0 1.48-1.75 11 11 0 0 0-21.72 0A1.5 1.5 0 0 0 2.62 12a1.53 1.53 0 0 0 1.49-1.3A8 8 0 0 1 12 4Z'
        }
      >
        <animateTransform
          attributeName={'transform'}
          dur={'0.75s'}
          repeatCount={'indefinite'}
          type={'rotate'}
          values={'0 12 12;360 12 12'}
        />
      </path>
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
