import { NumberField, OptionField, TextField, BooleanField } from "@flatfile/configure";
//import { MonthDayField } from "../fields/monthday.field";
import { STRING_TYPE, validateString } from "../hooks/shared/validate.string";
import { SmartDateField } from "../SmartDateField";

export const EntityFragment = {
  Number: TextField({
    label: "Number"
  }),
  AccountingNumber: TextField({
    label: "AccountingNumber"
  }),
  AlternateName: TextField({
    label: "Alternate Name",
    validate: validateString(STRING_TYPE.CHAR, 0, 100)
  }),
  AuditExemption: BooleanField({
    label: "Audit Exemption"
  }),
  BusinessType: OptionField({
    label: "Business Type",
    options: {
      soleprop: "Sole-proprietorship",
      corp: "C-Corporation",
      scorp: "S-Corporation",
      llc: "LLC"
    }
  }),
  ChairVote: TextField({
    label: "Chair Vote"
  }),
  ClientPersonId: TextField({
    label: "Client Person ID"
  }),
  ClientStanding: TextField({
    label: "Client Standing"
  }),
  ComplianceStartDate: TextField({
    label: "Compliance Start Date"
  }),
  ContractAuthority: TextField({
    label: "Contract Authority"
  }),
  DirectoryChairVote: TextField({
    label: "Director Chair Vote"
  }),
  DirectorQuorum: TextField({
    label: "Director Quorum"
  }),
  DirectorsMax: NumberField({
    label: "Directors Maximum"
  }),
  DirectorsMin: NumberField({
    label: "Directors Minimum"
  }),
  EntityGroup: TextField({
    label: "Entity Group"
  }),
  EntityLifecycleStatus: TextField({
    label: "Entity Lifecycle Status"
  }),
  EntityStatus: OptionField({
    label: "EntityStatus",
    options: {
      active: "Active",
      inactive: "Inactive"
    },
    default: "active"
  }),
  EntityType: TextField({
    label: "EntityType"
  }),
  FiscalYearEnd: SmartDateField({
    label: "Fiscal Year End",
    fString: "MM-dd"
  }),
  GoverningStatute: TextField({
    label: "Governing Statute"
  }),
  IncDate: TextField({
    label: "Incorporation Date"
  }),
  Jurisdiction: TextField({
    label: "Jurisdiction"
  }),
  MatterNumber: TextField({
    label: "Matter Number"
  }),
  ShareholderQuorum: TextField({
    label: "Shareholder Quorum"
  }),
  SigningAuthority: TextField({
    label: "Signing Authority"
  }),
  Tags: TextField({
    label: "Tags"
  })
};