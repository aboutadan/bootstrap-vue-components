let counter = 0

export function useId(prefix = 'v'): string {
  return `${prefix}-${++counter}`
}
