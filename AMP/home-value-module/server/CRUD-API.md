# C.R.U.D API DOCUMENTATION

## Table of Contents

1. [GET](#GET)
2. [POST](#POST)
3. [PUT/UPDATE](#UPDATE) 
4. [DELETE](#DELETE)

## 
**Endpoint:** */api/properties/:propertyId*
<br>
**Params:** ID of home
<br>
**Purpose:** Returns object representing a single home. 
<br>
**Success Response** `Code: 200` Object with the following properties: 
```{
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
```
<br>

**Sample Call** `http://localhost:8081/api/properties/2`

## Create / POST
**Endpoint:** */post*
<br>
**Params:** a home object with all the properties above in GET
<br>
**Purpose:** finds home property by ID, if already exists, update all fields. Otherwise create a new entry and save it to the properties collection in Mongo
<br>
**Sample Call** `http://localhost:8081/post`
<br>
**Sample Passed in Object**
```
{
  "id": 20,       
  "zestimationPrice": "1,313,187",
  "startPriceRange": "11,231",
	"endPriceRange": "870,926",
	"thirtyDayPriceChange": "46,626",
	"oneYearForcast": "520,879",
	"propertyLastSalePrice": "439,923",
	"propertLastSaleDate": "7/27/2001",
	"comparableHomePrice": "544,591",
	"marketAppreciationPrice": "358,819",
	"localSalesAvg": "525,552",
	"sellDate": "12/26/2012",
	"sellPrice": "2,114,738",
	"beds": 4,
	"baths": 3,
	"sqft": "2,873",
	"streetAddress": "8199 Upton Forge",
	"priceSqft": "1,971",
	"saleToList": 14,
	"url": "https://s3-us-west-1.amazonaws.com/zillow-talk-home-component/large20.jpg"
}
```

<br>

**Success Response** `Code 201`


## Update / PUT
**Endpoint:** */update*
<br>
**Params:** a home object with all the properties above in GET
<br>
**Purpose:** finds home property by ID, if already exists, update all fields. Other create a new entry and save it to the properties collection in Mongo
<br>
**Sample Call** `http://localhost:8081/update`
<br>
**Sample Passed in Object** Same as POST
<br>
**Success Response** `Code 202`

## DELETE
**Endpoint:** */delete/:propertyId*
<br>
**Params:** ID of home
<br>
**Purpose:** Delete a home record based on the passed in ID
<br>
**Sample Call** `http://localhost:8081/delete/99`


