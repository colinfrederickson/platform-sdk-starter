import { OptionField, TextField } from '@flatfile/configure'
import { STRING_TYPE, validateString } from '../hooks/shared/validate.string'
//import { DateField } from '../fields/date.field'
import { SmartDateField } from '../SmartDateField'

export const IndividualFragment = {
  Email: TextField({
    label: 'Email',
    validate: validateString(STRING_TYPE.CHAR, 0, 100),
  }),
  Phone: TextField({
    label: 'Phone',
  }),
  Citizenship: TextField({
    label: 'Citizenship',
  }),
  Diversity: TextField({
    label: 'Diversity',
  }),
  DOB: SmartDateField({
    label: 'DOB',
    fString: 'yyyy-MM-dd'
  }),
  Ethnicity: TextField({
    label: 'Ethnicity',
  }),
  Gender: OptionField({
    label: 'Gender',
    options: {
      M: 'M',
      F: 'F',
      U: 'U',
    },
  }),
  Nickname: TextField({
    label: 'Nickname',
  }),
  Residency: TextField({
    label: 'Residency',
  }),
}