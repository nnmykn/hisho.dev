import { type ClassValue, clsx } from 'clsx'
import {
  createTailwindMerge,
  getDefaultConfig,
  mergeConfigs,
  validators,
} from 'tailwind-merge'

const twMerge = createTailwindMerge(getDefaultConfig, (config) =>
  mergeConfigs(config, {
    extend: {
      classGroups: {
        'font-size': [
          {
            text: [validators.isArbitraryLength, validators.isNumber],
          },
        ],
        leading: [
          {
            leading: [validators.isArbitraryLength, validators.isNumber],
          },
        ],
      },
    },
  })
)

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
