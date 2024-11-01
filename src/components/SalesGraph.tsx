import { ResponsiveContainer, LineChart, XAxis, Tooltip, Line } from "recharts";
import { SalesData } from "../types/ProductData";

function SalesGraph({ data }: { data: SalesData[]}) {
    
  const salesWeeklyData = data.map((data) => ({
    ...data,
    date: new Date(data.weekEnding),
  }));

  const salesUniqueMonths = salesWeeklyData
    .filter((data, index, self) => {
      const currentMonth = data.date.getMonth();
      const previousMonth = index > 0 ? self[index - 1].date.getMonth() : -1;
      return currentMonth !== previousMonth;
    })
    .map((data) => data.weekEnding);

 return (
  <div className="product-sales-graph">
    <div className="product-salest-graph-header">Sales</div>
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={salesWeeklyData} title="Retail Sales">
        <XAxis
          dataKey="weekEnding"
          ticks={salesUniqueMonths}
          tickFormatter={(value) => {
            const date = new Date(value);
            return date.toLocaleString('default', { month: 'short' });
          }}
          />
        <Tooltip />
        <Line type="monotone" dataKey="retailSales" stroke="#47a8f6" dot={false} label="Retail Sales"/>
        <Line type="monotone" dataKey="wholesaleSales" stroke="#99a4be" dot={false} label="Wholesale Sales" />
      </LineChart>
    </ResponsiveContainer>
  </div>
 )
}

export default SalesGraph