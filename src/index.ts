/**
 * This is a scaffold for defining a Workbook with Sheets and Portals.
 * Test this scaffold using the sample file in examples/sample-uploads/my-sheet-sample.csv.
 *
 * See examples/workbooks/FullExample.ts for a full, working example of a Workbook.
 */

import {
  NumberField,
  Portal,
  Sheet,
  TextField,
  Workbook,
} from '@flatfile/configure'

/**
 * Sheets
 * Define your Sheet configuration and Fields here, or import them:
 * import { YourSheet } from './path-to-your-sheet/your-sheet.ts'
 */
const MySheet = new Sheet('MySheet', {
  
  age: NumberField({
    label: 'Age',
    required: false,
    primary: true,
    unique: true,
    description: 'Age of Person',
    annotations: {
      default: true,
      defaultMessage: 'This field was automatically given a default value of',
      compute: true,
      computeMessage: 'This value was automatically reformatted to two decimal places. Original value was: ',
    },
    stageVisibility: {
      mapping: true,
      review: true,
      export: true
    },
    default: 13,
    compute: (v: number) => {return Number(v.toFixed(2))},
  }),
})

/**
 * Portals
 * Define your Portals here, or import them:
 * import { YourPortal } from './path-to-your-portal/your-portal.ts'
 */
const MyPortal = new Portal({
  name: 'NumberFieldTesting',
  sheet: 'MySheet',
})

// Workbook  - Update to reference your Workbook with Sheet(s) and Portal(s)
export default new Workbook({
  name: 'NumberFieldTesting',
  namespace: 'NumberFieldTesting',
  portals: [MyPortal],
  sheets: {
    MySheet,
  },
})
