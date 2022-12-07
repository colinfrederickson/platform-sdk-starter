import { Workbook } from '@flatfile/configure'
import { Contacts } from './contacts'
import { Addresses } from './addresses'
// import { AnnualMatters } from './annualmatters'
// import { AssetsLiabilities } from './assetsliabilities'
// import { Assignments } from './assignments'
// import { AuthorizedToInstruct } from './authorizedtoinstruct'
// import { Beneficiaries } from './beneficiaries'
//import { BookLocations } from './booklocations'
// import { BusinessNumbers } from './businessnumbers'
// import { PPSAUnit } from './ppsaunit'
// import { Committees } from './committees'
// import { ConstatingEvents } from './constatingevents'
// import { CustomDates } from './customdates'
//import { Directors } from './directors'
// import { DomainNames } from './domainnames'
// import { EmploymentMatters } from './employmentmatters'
// import { ExchangesFilings } from './exchangesfilings'
// import { ExtrajurisdictionalRegistration } from './extrajurisdictionalreg'
// import { GovernanceWaivers } from './governancewaivers'
// import { GoverningDocuments } from './governingdocs'
// import { Incorporators } from './incorporators'
// import { LandRegistrations } from './landregistrations'
// import { Managers } from './managers'
// import { Members } from './members'
// import { MunicipalLicenses } from './municipallicenses'
// import { Notes } from './notes'
//import { Officers } from './officers'
// import { OtherNames } from './othernames'
// import { Partners } from './partners'
// import { Patents } from './patents'
// import { RegulatoryLicenses } from './regulatorylicenses'
// import { Responsible } from './responsible'
// import { Services } from './services'
// import { ServiceAgreements } from './serviceagreements'
// import { ServiceProviders } from './serviceproviders'
// import { Settlors } from './settlors'
// import { SignificantControlSteps } from './significantcontrolsteps'
// import { SignificantControl } from './significantcontrol'
// import { TradeNames } from './tradenames'
// import { Trademarks } from './trademarks'
// import { Trustees } from './trustees'





export default new Workbook({
  name: 'Relational Demo 1',
  namespace: 'Relational Demo 1',
  sheets: {
    // Entities,
    Contacts,
   Addresses,
  },
})