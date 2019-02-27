import React from 'react';
import {
  PropertyCard,
  PropertyDetailSection,
  PropertyImage, 
  HomeStatus,
  RecentlySoldIcon,
  RecentlySold, 
  Price, 
  PropertyDetailedInfo,
  PropertyAddress,
  SaleToList,
  LocalHomesDetialsCollapsibleContent,
  LocalPropertyDetailSection
} from '../style.js';

var LocalHomesItem = ({homeData}) => {
  return (
    <div>
      <PropertyCard>
        <PropertyImage src={homeData.url}></PropertyImage>
        <LocalPropertyDetailSection>
          <HomeStatus>
            <RecentlySoldIcon></RecentlySoldIcon>
            <RecentlySold> 
              SOLD ({homeData.sellDate})
            </RecentlySold>
          </HomeStatus>
          <Price>
            {`$${homeData.sellPrice}`}
          </Price>
          <PropertyDetailedInfo>
            {`${homeData.beds} bds - ${homeData.baths} ba - 1555 sqft`}                          
          </PropertyDetailedInfo>
          <PropertyAddress>
            {homeData.streetAddress}
          </PropertyAddress>
        </LocalPropertyDetailSection>
        <SaleToList>
          {`${homeData.saleToList}%`}
        </SaleToList>
      </PropertyCard>
    </div>
  );
};

export default LocalHomesItem; 