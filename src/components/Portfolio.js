import React from "react";
import { useEffect, useState } from "react";


function Portfolio ({wallet_addr}) {
        const url_api = "https://api.covalenthq.com/v1/9001/address/" + wallet_addr + "/balances_v2/?key=ckey_b9fba69b6b1843db94e6925d05d";
        function getData() {
            fetch(url_api)
            .then(response => response.json())
            .then(json => setItem(json.data.items));
            }
            const [item, setItem] = useState([]);
            useEffect(() => {getData()});

            var total_port = 0;
            for (let i = 0; i < item.length; i++) {
                total_port += item[i].quote;
            }
   return(
    <>
    <p>Total Portfolio: &nbsp; {total_port}USD </p>
    </>

   )
}
export default Portfolio;