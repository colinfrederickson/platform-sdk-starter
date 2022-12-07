/**
 * Generate a default value dynamically
 *
 * @param fn
 */
 export function computeDefault<T>(fn: () => T): (v: T) => T {
    return (value: T) => {
      return value ? value : fn()
    }
  }