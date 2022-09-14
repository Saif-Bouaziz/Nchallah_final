import React from 'react';

const Dates = ({ invoiceNumber,
    invoiceDate,
    dueDate }) => {
    return (
        <div>
            <article className='tw- my-5 flex items-end justify-end'>
                <ul>
                    <li className='tw- p-1'><span className='tw- font-bold'>Invoice number:</span>{invoiceNumber}</li>
                    <li className='tw- p-1 bd-gray-100'><span className='tw- font-bold'>Invoice date: </span>{invoiceDate}</li>
                </ul>
            </article>

        </div>
    );
};

export default Dates;