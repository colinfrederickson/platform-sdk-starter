import { Message } from '@flatfile/configure'

export function validateString(type: STRING_TYPE, min: number, max: number, level: 'error' | 'warn' = 'error') {
  const regexes = {
    [STRING_TYPE.ALPHA]: /^[a-zA-Z]+$/,
    [STRING_TYPE.AN]: /^[a-zA-Z0-9]+$/,
    [STRING_TYPE.NUM]: /^[0-9]+$/,
    [STRING_TYPE.CHAR]: /^.+$/,
  }
  const msgs = {
    [STRING_TYPE.ALPHA]: 'letter(s)',
    [STRING_TYPE.AN]: 'alpha-numeric characters',
    [STRING_TYPE.NUM]: 'numbers',
    [STRING_TYPE.CHAR]: 'character',
  }

  return (value: string) => {
    const formatValid = regexes[type].test(value)
    const minValid = value.length >= min
    const maxValid = value.length <= max

    let message =
      min === max
        ? 'Value must be exactly :max'
        : !min && max
        ? 'Value must be :max or fewer'
        : min && !max
        ? 'Value must be at least :min'
        : 'Value must be between :min and :max'

    if (!minValid || !maxValid || !formatValid) {
      return [
        new Message(
          [message, msgs[type]].join(' ').replace(':min', min.toString(10)).replace(':max', max.toString(10)),
          'error',
          'validate'
        ),
      ]
    }
  }
}

export enum STRING_TYPE {
  ALPHA,
  AN,
  NUM,
  CHAR,
}