// import { FC, useEffect, useState } from 'react'
// import { getCurrency } from '../../api/currency'

// export const CurrencyVidget:FC = ():JSX.Element => {
//   const [currency, setCurrency] = useState();
  
//   useEffect(() => {
//     fetch('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json')
//       .then(response => response.json())
//       .then(data => console.log(data))
//   }, [])

//   return (
//     <div>
//       {currency.map(el => <div>{el.txt}</div>)}
//     </div>
//   )
// }