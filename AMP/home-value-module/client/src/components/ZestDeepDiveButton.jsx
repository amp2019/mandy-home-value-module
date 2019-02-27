import React from 'react'; 
import { 
  ZestDeepDiveButtonContainer, 
  ZestDeepDiveEstimate,
  ZestDeepDiveDropDownArrow, 
} from '../style.js';

var ZestDeepDiveButton = ({name, estimate, onClick}) => {
  return (
    <ZestDeepDiveButtonContainer onClick={onClick}>
      {name}
      <ZestDeepDiveEstimate>
        {estimate}
        <ZestDeepDiveDropDownArrow>
          <i className="fas fa-angle-down"></i>
        </ZestDeepDiveDropDownArrow>
      </ZestDeepDiveEstimate>
    </ZestDeepDiveButtonContainer>
  );
};

export default ZestDeepDiveButton; 

