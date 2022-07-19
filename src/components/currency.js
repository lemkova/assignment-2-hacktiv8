import React from 'react'

const Currency = (props) => {

   const rate = Number(props.rate).toFixed(4);
   const sellDisplay = Number(rate*1.15).toFixed(4);
   const buyDisplay = Number(rate*0.85).toFixed(4);
  return (
    <tr>
        <th scope="row" className="py-1 px-6">
            {props.denom}
        </th>
        <td className="py-1 px-6">
            {buyDisplay}
        </td>
        <td className="py-1 px-6">
            {rate}
        </td>
        <td className="py-1 px-6">
            {sellDisplay}
        </td>
    </tr>
  )
}

export default Currency