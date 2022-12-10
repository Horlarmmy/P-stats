import React from "react";
import { useEffect } from "react";

function Portfolio () {
        useEffect(() => {
            fetch("https://api.covalenthq.com/v1/9001/address/0xbf66d3249d8191e86ac50590255c5545ad4377bc/balances_v2/?key=ckey_b9fba69b6b1843db94e6925d05d")
            .then(response => response.json())
            .then(json => { const port_data = json.data.items; 
                            console.log(port_data);
            });
            }, []);

            var total_port = 0;
            console.log(port_data);
            for (let i = 0; i < port_data.length; i++) {
                total_port += port_data[i].quote;
            }
   return(
    <>
        <p>Fetching data...</p>
    <p>Total Portfolio: &nbsp; {total_port}</p>
    </>

   )
}

export default Portfolio;