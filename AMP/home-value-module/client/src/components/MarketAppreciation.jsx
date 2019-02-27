import React from 'react';
import {
  HomeDetailsCollapsibleComponent, 
  CollapsibleContent, 
  MarketAppreciationHeader,
  MarketAppreciationToolTip,
  MarketAppreciationToolTipText,
  CalculationSection, 
  CalculationHeader, 
  CalculationEquation,
  CalculationOperator,
  CalculationValuePercentage,
  CalculationValueInfo, 
  CalculationValue,
  CalculationValueDate,
  ListHeader, 
  ListContent
} from '../style.js';

class MarketAppreciation extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div>
        <HomeDetailsCollapsibleComponent>
          <CollapsibleContent>
            <MarketAppreciationHeader>
              This estimate takes the price this home last sold for and adjusts it by the percentage change in market value for that area since that sale.
              <MarketAppreciationToolTip>
                <MarketAppreciationToolTipText>
                  {' '}What affects the accuracy of this estimate?
                </MarketAppreciationToolTipText>
              </MarketAppreciationToolTip>
            </MarketAppreciationHeader>
            <CalculationSection>
              <CalculationHeader>
                How it's calculated
              </CalculationHeader>
              <CalculationEquation>
                <CalculationValue>
                  $12,232,232
                  <CalculationValueInfo>
                    Last sale price
                  </CalculationValueInfo>
                  <CalculationValueDate>
                    (7/19/2018)
                  </CalculationValueDate>
                </CalculationValue>
                <CalculationOperator>
                  +
                </CalculationOperator>
                <CalculationValuePercentage>
                    17.3%
                  <CalculationValueInfo>
                    Local market appreciation
                  </CalculationValueInfo>
                </CalculationValuePercentage>
                <CalculationOperator>
                  =
                </CalculationOperator>
                <CalculationValue>
                  $14,660,343
                  <CalculationValueInfo>
                    Sale-based estimate
                  </CalculationValueInfo>
                </CalculationValue>
              </CalculationEquation>
            </CalculationSection>
            <ListHeader>
            </ListHeader>
          </CollapsibleContent>
        </HomeDetailsCollapsibleComponent>
      </div>
    );
  }
}


export default MarketAppreciation;