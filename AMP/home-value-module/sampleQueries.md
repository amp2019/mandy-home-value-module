# Postgres
## Sample Query 1: GET a home based on ID
`SELECT * FROM homes2 WHERE id = 9000000;`

## Results:

```
homes=> SELECT * FROM homes2 WHERE id = 9000000;
-[ RECORD 1 ]-----------+-------------------------------------------------------------------------
id                      | 9000000
zestimationPrice        | 3,286,889
startPriceRange         | 3,928,155
endPriceRange           | 1,381,207
thirtyDayPriceChange    | 28,352
oneYearForcast          | 566,302
propertyLastSalePrice   | 437,146
propertLastSaleDate     | 1/14/2016
comparableHomePrice     | 596,923
marketAppreciationPrice | 310,679
localSalesAvg           | 481,927
sellDate                | 11/28/2019
sellPrice               | 2,740,867
beds                    | 4
baths                   | 4
sqft                    | 2,257
streetAddress           | 70678 Fay Vista
priceSqft               | 1,730
saleToList              | 104
url                     | https://s3-us-west-1.amazonaws.com/zillow-talk-home-component/large1.jpg

Time: 2.912 ms
```

## Sample Query 2 - UPDATE a home based on ID
`
UPDATE homes2 
SET "zestimationPrice" = '456,789',
    "startPriceRange" = '123,456',
    "endPriceRange" = '400,000',
    "thirtyDayPriceChange" = '100,000',
    "oneYearForcast" = '30,000',
    "propertyLastSalePrice" = '300,000',
    "propertLastSaleDate" = '9/1/2010',
    "comparableHomePrice" = '400,000',
    "marketAppreciationPrice" = '120,000',
    "localSalesAvg" = '200,000',
    "sellDate" = 'N/A',
    "sellPrice" = 'N/A',
    "beds" = 5,
    "baths" = 3,
    "streetAddress" = '400 Tesla Ave',
    "priceSqft" = '300',
    "saleToList" = 67,
    "url" = 'https://s3-us-west-1.amazonaws.com/zillow-talk-home-component/large1.jpg'
WHERE id = 9000000;
`
## Results

```
homes=> UPDATE homes2 
homes-> SET "zestimationPrice" = '456,789',
homes->     "startPriceRange" = '123,456',
homes->     "endPriceRange" = '400,000',
homes->     "thirtyDayPriceChange" = '100,000',
homes->     "oneYearForcast" = '30,000',
homes->     "propertyLastSalePrice" = '300,000',
homes->     "propertLastSaleDate" = '9/1/2010',
homes->     "comparableHomePrice" = '400,000',
homes->     "marketAppreciationPrice" = '120,000',
homes->     "localSalesAvg" = '200,000',
homes->     "sellDate" = 'N/A',
homes->     "sellPrice" = 'N/A',
homes->     "beds" = 5,
homes->     "baths" = 3,
homes->     "streetAddress" = '400 Tesla Ave',
homes->     "priceSqft" = '300',
homes->     "saleToList" = 67,
homes->     "url" = 'https://s3-us-west-1.amazonaws.com/zillow-talk-home-component/large1.jpg'
homes-> WHERE id = 9000000;
UPDATE 1
Time: 4.557 ms

homes=> SELECT * FROM homes2 WHERE id = 9000000;
-[ RECORD 1 ]-----------+-------------------------------------------------------------------------
id                      | 9000000
zestimationPrice        | 456,789
startPriceRange         | 123,456
endPriceRange           | 400,000
thirtyDayPriceChange    | 100,000
oneYearForcast          | 30,000
propertyLastSalePrice   | 300,000
propertLastSaleDate     | 9/1/2010
comparableHomePrice     | 400,000
marketAppreciationPrice | 120,000
localSalesAvg           | 200,000
sellDate                | N/A
sellPrice               | N/A
beds                    | 5
baths                   | 3
sqft                    | 2,257
streetAddress           | 400 Tesla Ave
priceSqft               | 300
saleToList              | 67
url                     | https://s3-us-west-1.amazonaws.com/zillow-talk-home-component/large1.jpg

Time: 0.347 ms
```

# MongoDB

## Sample Query 1: GET a home based on ID
`db.properties.find({id: 9000030}).pretty()`

## Results

```
db.properties.find({id: 9000030}).pretty()

{
	"_id" : ObjectId("5c7ac97675779ad8b4ad2493"),
	"id" : 9000030,
	"zestimationPrice" : "2,123,648",
	"startPriceRange" : "1,428,220",
	"endPriceRange" : "3,004,650",
	"thirtyDayPriceChange" : "48,711",
	"oneYearForcast" : "574,772",
	"propertyLastSalePrice" : "469,426",
	"propertLastSaleDate" : "8/7/2017",
	"comparableHomePrice" : "422,596",
	"marketAppreciationPrice" : "485,900",
	"localSalesAvg" : "426,065",
	"sellDate" : "11/23/2012",
	"sellPrice" : "3,064,604",
	"beds" : 3,
	"baths" : 2,
	"sqft" : "1,518",
	"streetAddress" : "01005 Carter Flat",
	"priceSqft" : "1,613",
	"saleToList" : 104,
	"url" : "https://s3-us-west-1.amazonaws.com/zillow-talk-home-component/large31.jpg"
}
```

## Execution stats (truncated for relevance)
```
db.properties.find({id: 9000030}).pretty().explain("executionStats")
{
	"executionStats" : {
		"executionSuccess" : true,
		"nReturned" : 1,
		"executionTimeMillis" : 0,
		"totalKeysExamined" : 1,
		"totalDocsExamined" : 1,
	},
}
```

db.properties.findOneAndUpdate({id: 9000030}, {
	"zestimationPrice" : "5,328,111",
	"startPriceRange" : "1,000,000",
	"endPriceRange" : "5,004,650",
	"thirtyDayPriceChange" : "30,711",
	"oneYearForcast" : "6,000,000",
	"propertyLastSalePrice" : "900,000",
	"propertLastSaleDate" : "8/7/1999",
	"comparableHomePrice" : "4,220,000",
	"marketAppreciationPrice" : "500,000",
	"localSalesAvg" : "2,000,000",
	"sellDate" : "N/A",
	"sellPrice" : "N/A",
	"beds" : 7,
	"baths" : 5,
	"sqft" : "8,000",
	"streetAddress" : "9871 Rich Ave",
	"priceSqft" : "2,000",
	"saleToList" : 91,
	"url" : "https://s3-us-west-1.amazonaws.com/zillow-talk-home-component/large31.jpg"
    }, {upsert: true})