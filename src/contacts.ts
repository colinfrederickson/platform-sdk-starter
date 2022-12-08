import { BooleanField, Sheet, TextField } from '@flatfile/configure'
import { validatePhone } from './hooks/shared/clean.phone'
import { computeDefault } from './helpers/compute.default'
import { uid } from './helpers/uid'
import { EntityFragment } from './fragments/entity'
import { IndividualFragment } from './fragments/individual'

export const Contacts = new Sheet(
  'Contacts',
  {
    //isEntity: BooleanField({
      //label: 'Is Entity',
    //}),

    ContactID: TextField({
      label: 'Contact ID',
      unique: true,
      required: true,
      primary: true,
      //cast: computeDefault => uid(7),
    }),

    //EntityID: TextField({
      //label: 'Entity ID',
      //unique: true,
    //}),

    LegalName: TextField({
      label: 'Legal Name',
      description: 'This is a more detailed description of the field',
      required: true,
      //unique: true,
    }),

    /**
     * Entity fields
     */
    //...EntityFragment,

    /**
     * Individual fields
     */
    ...IndividualFragment,
  },
  {
    previewFieldKey: 'ContactID',
    recordCompute(record, _session, logger) {
      /**
       * Validate and format the phone format
       */
      validatePhone(record, 'Phone')

      /**
       * set isEntity if EntityID is provided
       * @todo verify this logic is right?
       */
      if (record.get('EntityID') && !record.get('isEntity')) {
        record.set('isEntity', true)
      }

      /**
       * If the user has indicated something is an entity, make sure the ID is set
       */
      //if (record.get('isEntity')) {
        //if (!record.get('EntityID')) {
          //record.set('EntityID', uid(7))
        //}

        //Object.keys(IndividualFragment).forEach((k) => {
          //record.addWarning(k, 'DISABLED')
        //})
      //} else {
        //Object.keys(EntityFragment).forEach((k) => {
          //record.addWarning(k, 'DISABLED')
        //})
      //}
    },
  }
)