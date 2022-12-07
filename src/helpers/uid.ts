import ShortUniqueId from 'short-unique-id'

/**
 * Generates a random unique ID of any length
 *
 * @example p0ZoB1FwH6
 * @param length
 */
export function uid(length: number = 6): string {
  return new ShortUniqueId({ length })()
}