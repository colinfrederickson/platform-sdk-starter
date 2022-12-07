import { Sheet, TextField, LinkedField, OptionField } from '@flatfile/configure'
import setAddressId from './hooks/addresses/set.addressid'
import validatePostcode from './hooks/addresses/validate.postcode'
import { Contacts } from './contacts'
//import { DateField } from './fields/date.field'
import { ListCountriesFragment } from './fragments/list_countries'
import { ListStatesProvincesFragment } from './fragments/list_stateprovince'
import { SmartDateField } from './SmartDateField'
import { uid } from './helpers/uid'


export const Addresses = new Sheet(
  'Addresses',
  {
    ContactAddressID: TextField({
      label: 'Contact Address ID',
      //required: true,
      unique: true,
      primary: true
    }),
    EntityID: LinkedField({
      label: 'Entity ID',
      sheet: Contacts,
      required: false,
      upsert: false,
    }),
    ContactID: LinkedField({
      label: 'Contact ID',
      sheet: Contacts,
      required: false,
      upsert: false,
    }),
    Title: TextField({
      label: 'Title',
      // unique: true,
      // required: true,
    }),
    StreetNumber: TextField({
      label: 'Street Number',
    }),
    StreetName: TextField({
      label: 'Street Name',
    }),
    SuitePOBox: TextField({
      label: 'Suite/PO Box',
    }),
    City: TextField({
      label: 'City',
    }),
    StateProvince: OptionField({
      label: 'State/Province',
      options: {
        ...ListStatesProvincesFragment,
      }
    }),
    PostalCode: TextField({
      label: 'Postal Code',
    }),
    Country: OptionField({
      label: "Country",
      options: {
        ...ListCountriesFragment,
      }
    }),
    CareOf: TextField({
      label: 'Care Of',
    }),
    MoreInfo: TextField({
      label: 'More Info',
    }),
    StartDate: SmartDateField({
      label: 'Start Date',
      fString: 'yyyy-MM-dd'
    }),
    EndDate: SmartDateField({
      label: 'End Date',
      fString: 'yyyy-MM-dd'
    }),


  },
  {
    recordCompute(record, logger) {
      if (record.get('StreetName')) {
        if (!record.get('ContactAddressID')) {
          record.set('ContactAddressID', uid(7))
        }
    }
  }
}
)