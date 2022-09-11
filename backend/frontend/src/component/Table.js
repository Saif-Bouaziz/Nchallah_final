import React from 'react';

const Table = ({ list }) => {
    return (
        <div>
            <table width="100 %" className='tw- mb-10'>
                <thead>
                    <tr className='tw- bg-gray-100 p-1'>
                        <td className='tw- font-bold'>Item description</td>
                        <td className='tw- font-bold'>Quantity</td>
                        <td className='tw- font-bold'>Price</td>
                        <td className='tw- font-bold'>Amount</td>
                    </tr>
                </thead>
                {list.map(({ id, description, quantity, price, amount }) => (
                    <React.Fragment key={id}>
                        <tbody>
                            <tr>
                                <td>{description}</td>
                                <td>{quantity}</td>
                                <td>{price}</td>
                                <td>{amount}</td>
                            </tr>
                        </tbody>
                    </React.Fragment>
                ))}
            </table>
        </div>
    );
};

export default Table;