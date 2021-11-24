import React from 'react';

function Vup_comma_formatter (num){

    var parts = num.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return parts.join(".");
}

export default Vup_comma_formatter;