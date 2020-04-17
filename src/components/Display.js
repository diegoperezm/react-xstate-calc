import React  from 'react';


function Display({value, operand1, operand2}) {
 let formattedData = value.map(elem => (elem === "*" ? "X" : elem));
 let style = "display display__number";
   
    if( value.length       > 10 ||
	operand1.length > 10 ||
	operand2.length > 10 ||  
	value[0].toString().length > 10 
    ) {
           style = "display  display__number--small"; 
   }

  return (
       <p className={style} id="display">
	   {formattedData}
	</p>); 
}

export default Display;
