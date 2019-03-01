DROP DATABASE if EXISTS homes;
CREATE DATABASE homes;

\c homes;

CREATE TABLE homes (
  id SERIAL PRIMARY KEY,
  "zestimationPrice" VARCHAR(20),
  "startPriceRange" VARCHAR(20),
  "endPriceRange" VARCHAR(20),
  "thirtyDayPriceChange" VARCHAR(20),
  "oneYearForcast" VARCHAR(20),
  "propertyLastSalePrice" VARCHAR(20),
  "propertLastSaleDate" VARCHAR(20),
  "comparableHomePrice" VARCHAR(20),
  "marketAppreciationPrice" VARCHAR(20),
  "localSalesAvg" VARCHAR(20),
  "sellDate" VARCHAR(20),
  "sellPrice" VARCHAR(20),
  "beds" INTEGER,
  "baths" INTEGER,
  "sqft" VARCHAR(20),
  "streetAddress" VARCHAR(200),
  "priceSqft" VARCHAR(20),
  "saleToList" INTEGER,
  "url" VARCHAR(200)
);

INSERT INTO homes ("zestimationPrice", "startPriceRange", "endPriceRange", "thirtyDayPriceChange", "oneYearForcast", "propertyLastSalePrice", "propertLastSaleDate", "comparableHomePrice", "marketAppreciationPrice", "localSalesAvg", "sellDate", "sellPrice", "beds", "baths", "sqft", "streetAddress", "priceSqft", "saleToList", "url") VALUES ('123,456', '110,000', '120,000', '20,000', '200,000', '100,000', '2/1/1990', '120,000', '50,000', '120,000', 'N/A', 'N/A', 2, 2, '1000', '2222 Woohoo Ave', '200', 91, 'https://s3-us-west-1.amazonaws.com/zillow-talk-home-component/large20.jpg');

INSERT INTO homes ("zestimationPrice", "startPriceRange", "endPriceRange", "thirtyDayPriceChange", "oneYearForcast", "propertyLastSalePrice", "propertLastSaleDate", "comparableHomePrice", "marketAppreciationPrice", "localSalesAvg", "sellDate", "sellPrice", "beds", "baths", "sqft", "streetAddress", "priceSqft", "saleToList", "url") VALUES ('123,456', '110,000', '220,000', '30,000', '300,000', '100,000', '2/1/1990', '120,000', '50,000', '120,000', 'N/A', 'N/A', 2, 2, '5000', '2222 Yayyay Ave', '200', 91, 'https://s3-us-west-1.amazonaws.com/zillow-talk-home-component/large20.jpg');

INSERT INTO homes ("zestimationPrice", "startPriceRange", "endPriceRange", "thirtyDayPriceChange", "oneYearForcast", "propertyLastSalePrice", "propertLastSaleDate", "comparableHomePrice", "marketAppreciationPrice", "localSalesAvg", "sellDate", "sellPrice", "beds", "baths", "sqft", "streetAddress", "priceSqft", "saleToList", "url") VALUES ('523,456', '170,000', '320,000', '10,000', '100,000', '800,000', '2/1/1990', '120,000', '50,000', '120,000', 'N/A', 'N/A', 4, 2, '5000', '2222 Yayyay Ave', '300', 99, 'https://s3-us-west-1.amazonaws.com/zillow-talk-home-component/large20.jpg');

INSERT INTO homes ("id", "zestimationPrice", "startPriceRange", "endPriceRange", "thirtyDayPriceChange", "oneYearForcast", "propertyLastSalePrice", "propertLastSaleDate", "comparableHomePrice", "marketAppreciationPrice", "localSalesAvg", "sellDate", "sellPrice", "beds", "baths", "sqft", "streetAddress", "priceSqft", "saleToList", "url")
    VALUES (1, '323,456', '70,000', '320,000', '10,000', '100,000', '800,000', '2/1/1990', '120,000', '50,000', '120,000', 'N/A', 'N/A', 4, 2, '5000', '2222 Nono Ave', '100', 19, 'https://s3-us-west-1.amazonaws.com/zillow-talk-home-component/large20.jpg')
    ON CONFLICT ("id") 
    DO UPDATE SET 
    "zestimationPrice" = EXCLUDED."zestimationPrice",
    "startPriceRange" = EXCLUDED."startPriceRange", 
    "endPriceRange" = EXCLUDED."endPriceRange", 
    "thirtyDayPriceChange" = EXCLUDED."thirtyDayPriceChange", 
    "oneYearForcast" = EXCLUDED."oneYearForcast", 
    "propertyLastSalePrice" = EXCLUDED."propertyLastSalePrice", 
    "propertLastSaleDate" = EXCLUDED."propertLastSaleDate", 
    "comparableHomePrice" = EXCLUDED."comparableHomePrice", 
    "marketAppreciationPrice" = EXCLUDED."marketAppreciationPrice", 
    "localSalesAvg" = EXCLUDED."localSalesAvg", 
    "sellDate" = EXCLUDED."sellDate", 
    "sellPrice" = EXCLUDED."sellPrice", 
    "beds" = EXCLUDED."beds", 
    "baths" = EXCLUDED."baths", 
    "sqft" = EXCLUDED."sqft", 
    "streetAddress" = EXCLUDED."streetAddress", 
    "priceSqft" = EXCLUDED."priceSqft", 
    "saleToList" = EXCLUDED."saleToList", 
    "url" = EXCLUDED."url";
