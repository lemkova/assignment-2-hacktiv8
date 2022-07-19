import React from 'react'

const Currency = (props) => {
  return (
    <tr>
        <th scope="row" className="py-1 px-6">
            {props.denom}
        </th>
        <td className="py-1 px-6">
            {props.buy}
        </td>
        <td className="py-1 px-6">
            {props.rate}
        </td>
        <td className="py-1 px-6">
            {props.sell}
        </td>
    </tr>
  )
}

export default Currency