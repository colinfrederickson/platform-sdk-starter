import { TextField } from '@flatfile/configure'
import * as chrono from 'chrono-node'
import * as dfns from 'date-fns'

export function DateField(options: any = {}) {
  return TextField({
    ...options,
    compute: (date?: string) => {
      const parsed = chrono.strict.parseDate(date)
      if (!parsed) {
        throw `Not a valid date.`
      }
      return dfns.format(parsed, 'yyyy-MM-dd')
    },
  })
}