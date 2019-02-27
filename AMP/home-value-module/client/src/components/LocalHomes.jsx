import React from 'react';
import LocalHomesItem from './LocalHomesItem.jsx';
import {
  LocalHomeDetailsCollapsibleComponent, 
  CollapsibleContent, 
  LocalHomesHeader, 
  LocalHomesToolTip, 
  LocalHomesToolTipText, 
  LocalHomesListHeader, 
  LocalHomesListHeaderSqft, 
  LocalHomesList, 
  PropertyList
} from '../style.js';

class LocalHomes extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    var {localHomesData} = this.props; 
    return (
      <LocalHomeDetailsCollapsibleComponent>
        <CollapsibleContent>
          <LocalHomesHeader>
            This estimate looks at the regional average amount that homes sell for above or below their list price. We then use that number to determine the value of this home, based on its list price and other characteristics of the listing.             
            <LocalHomesToolTip>
              <LocalHomesToolTipText>
                {' '}What affects the accuracy of this estimate?
              </LocalHomesToolTipText>
            </LocalHomesToolTip>
          </LocalHomesHeader>
          <LocalHomesListHeader>
            Recent Sales
            <LocalHomesListHeaderSqft>
              Sale-to-list
            </LocalHomesListHeaderSqft>
          </LocalHomesListHeader>
          <LocalHomesList>
            <PropertyList>
              {localHomesData.map((home, i) => {
                return <LocalHomesItem key={i} homeData={home} />;
              })}
            </PropertyList>
          </LocalHomesList>
        </CollapsibleContent>
      </LocalHomeDetailsCollapsibleComponent>

    );
  }
} 

export default LocalHomes; 