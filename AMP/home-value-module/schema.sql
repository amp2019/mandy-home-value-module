DROP DATABASE if EXISTS homes;
CREATE DATABASE homes;
\c homes;
CREATE TABLE homes (
  id SERIAL PRIMARY KEY,
  zestimationPrice VARCHAR(20),
  startPriceRange VARCHAR(20),
  endPriceRange VARCHAR(20),
  thirtyDayPriceChange VARCHAR(20),
  oneYearForcast VARCHAR(20),
  propertyLastSalePrice VARCHAR(20),
  propertLastSaleDate VARCHAR(20),
  comparableHomePrice VARCHAR(20),
  marketAppreciationPrice VARCHAR(20),
  localSalesAvg VARCHAR(20),
  sellDate VARCHAR(20),
  sellPrice VARCHAR(20),
  beds INTEGER,
  baths INTEGER,
  sqft VARCHAR(20),
  streetAddress VARCHAR(200),
  priceSqft VARCHAR(20),
  saleToList INTEGER,
  url VARCHAR(200)
);

INSERT INTO homes (zestimationPrice, startPriceRange, endPriceRange, thirtyDayPriceChange, oneYearForcast, propertyLastSalePrice, propertLastSaleDate, comparableHomePrice, marketAppreciationPrice, localSalesAvg, sellDate, sellPrice, beds, baths, sqft, streetAddress, priceSqft, saleToList, url) VALUES ('123,456', '110,000', '120,000', '20,000', '200,000', '100,000', '2/1/1990', '120,000', '50,000', '120,000', 'N/A', 'N/A', 2, 2, '1000', '2222 NEW Ave', '200', 91, 'https://s3-us-west-1.amazonaws.com/zillow-talk-home-component/large20.jpg');