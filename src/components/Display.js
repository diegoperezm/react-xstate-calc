import React  from 'react';


function Display({value}) {
  let formattedData = value.map(elem => (elem === "*" ? "X" : elem));
    return (
	<p className="display" id="display">
	    {formattedData}
	</p>); 
}

export default Display;
