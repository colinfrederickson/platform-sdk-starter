import { FlatfileRecord } from '@flatfile/hooks'
import { postcodeValidator, postcodeValidatorExistsForCountry } from 'postcode-validator';


export default (record: FlatfileRecord<any>) => {
    const country = (record.get('Country') || '') as string
    const postalCode = (record.get('PostalCode') || '') as string
  
    
    if(postalCode) {
        if(country == "us") {
            if(!postcodeValidator(postalCode, 'US')) {
                record.addError('PostalCode', 'Not a valid postal code for United States')
            }
        } else if(country == "ca") {
            if(!postcodeValidator(postalCode, 'CA')) {
                record.addError('PostalCode', 'Not a valid postal code for Canada')
            }
        } else {
            record.addWarning('PostalCode', 'Not able to automatically validate this postal code for' + country)
        }
    }
    
  }