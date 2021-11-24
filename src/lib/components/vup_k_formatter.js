import React from 'react';

function Vup_k_formatter (num){

    return Math.abs(num) > 999 ? Math.sign(num)*((Math.abs(num)/1000).toFixed(1)) + 'k' : Math.sign(num)*Math.abs(num);

}

export default Vup_k_formatter;