import React from 'react';
const Cvalue=({Currencytype,Result})=>{
	return<div>
		<input type="number" placeholder="enter the value" id={Currencytype} onChange={Result}/>

		
		</div>
		
}
export default Cvalue;