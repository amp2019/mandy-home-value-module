# C.R.U.D API DOCUMENTATION

## Table of Contents

1. [GET](#GET)
2. [POST](#POST)
3. [UPDATE](#UPDATE) 
4. [DELETE](#DELETE)

## GET
Endpoint: */api/properties/:propertyId*
<br>
Input: ID of home
<br>
Purpose: Returns object representing a single home. 
Object has the following properties: 
>{
  id: Number,
  zestimationPrice: String,
  startPriceRange: String,
  endPriceRange: String,
  thirtyDayPriceChange: String,
  oneYearForcast: String,
  propertyLastSalePrice: String, 
  propertLastSaleDate: String,
  comparableHomePrice: String,
  marketAppreciationPrice: String,
  localSalesAvg: String,
  sellDate: String, 
  sellPrice: String,
  beds: Number, 
  baths: Number,
  sqft: String, 
  streetAddress: String, 
  priceSqft: String,
  saleToList: Number,
  url: String
}
## POST
Endpoint: */post*
<br>
Input: a home object with all the properties above in GET
<br>
Purpose: finds home property by ID, if already exists, update all fields. Otherwise create a new entry and save it to the properties collection in Mongo

## UPDATE
Endpoint: */update*
<br>
Input: a home object with all the properties above in GET
<br>
Purpose: finds home property by ID, if already exists, update all fields. Other create a new entry and save it to the properties collection in Mongo

## DELETE
Endpoint: */delete/:propertyId*
<br>
Input: ID of home
<br>
Purpose: Delete a home record based on the passed in ID

