import { SalesData } from "../types/ProductData";

function SalesTable({data}: {data: SalesData[]}) {
  return (
    <div className="product-sales-table">
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th>Week Ending</th>
            <th>Retail Sales</th>
            <th>Wholesale Sales</th>
            <th>Units Sold</th>
            <th>Retailer Margin</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td>{row.weekEnding}</td>
              <td>{row.retailSales}</td>
              <td>{row.wholesaleSales}</td>
              <td>{row.unitsSold}</td>
              <td>{row.retailerMargin}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default SalesTable