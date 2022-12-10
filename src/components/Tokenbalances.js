import React from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";


class PieRechartComponent extends React.Component {
    COLORS = ["#8884d8", "#82ca9d", "#FFBB28", "#FF8042", "#AF19FF"];
    pieData = [
      {
         name: "USD Coin (USDC)",
         value: 152.0593
      },
      {
         name: "Meson Token (MSN)",
         value: 0.32061
      },
      {
         name: "Evmos (EVMOS)",
         value: 0.026
      }
    ]
    CustomTooltip = ({ active, payload, label }) => {
       if (active) {
          return (
          <div
             className="custom-tooltip"
             style={{
                backgroundColor: "#ffff",
                padding: "5px",
                border: "1px solid #cccc"
             }}
          >
             <label>{`${payload[0].name} : ${payload[0].value}%`}</label>
          </div>
       );
    }
    return null;
 };
 render() {
    return (
       <PieChart width={730} height={300}>
       <Pie
          data={this.pieData}
          color="#000000"
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={120}
          fill="#8884d8"
       >
          {this.pieData.map((entry, index) => (
             <Cell
                key={`cell-${index}`}
                fill={this.COLORS[index % this.COLORS.length]}
             />
          ))}
       </Pie>
       <Tooltip content={<this.CustomTooltip />} />
       <Legend />
       </PieChart>
       );
    }
 }

 
 export default PieRechartComponent;
