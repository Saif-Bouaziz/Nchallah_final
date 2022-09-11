import React, { useEffect, useState } from 'react';
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai"
import { v4 as uuidv4 } from "uuid"

const TableForm = ({ description,
    setDescription, quantity,
    setQuantity,
    price,
    setPrice,
    amount,
    setAmount,
    list,
    setList,
    total,
    setTotal
}) => {
    const [isEditing, setIsEditing] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        const newItems = {
            id: uuidv4(),
            description,
            quantity,
            price,
            amount
        }
        setDescription("")
        setQuantity("")
        setPrice("")
        setAmount("")
        setList([...list, newItems])
        setIsEditing(false)
    }

    useEffect(() => {
        let rows = document.querySelectorAll(".amount")
        let sum = 0
        for (let i = 0; i < rows.length; i++) {
            if (rows[i].className === "amount") {
                sum += isNaN(rows[i].innerHTML) ? 0 : parseInt(rows[i].innerHTML)
                setTotal(sum)
            }
        }
    })

    const editRow = (id) => {
        const editingRow = list.find((row) => row.id === id)
        setList(list.filter((row) => row.id !== id))
        setIsEditing(true)
        setDescription(editingRow.description)
        setQuantity(editingRow.quantity)
        setPrice(editingRow.price)
    }


    const deleteRow = (id) =>
        setList(list.filter((row) => row.id !== id))

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className='tw- flex flex-col'>
                    <label htmlFor="description">Item description</label>
                    <input type="text" name='description' id='description' placeholder='item description' value={description} onChange={(e) => setDescription(e.target.value)} />
                </div>

                <div className='tw- md:grid grid-cols-3 gap-10'>
                    <div className='tw- flex flex-col'>
                        <label htmlFor="quantity">Quantity</label>
                        <input type="text" name='quantity' id='quantity' placeholder='quantity' value={quantity} onChange={(e) => setQuantity(e.target.value)} />
                    </div>

                    <div className='tw- flex flex-col'>
                        <label htmlFor="price">Item price</label>
                        <input type="text" name='price' id='price' placeholder='item price' value={price} onChange={(e) => setPrice(e.target.value)} />
                    </div>

                    <div className='tw- flex flex-col'>
                        <label htmlFor="amount">amount</label>
                        <input type="text" name='amount' id='amount' placeholder='amount' value={amount} onChange={(e) => setAmount(e.target.value)} />
                    </div>
                </div>
                <button type='submit' className='tw- mb-5 mt-5 bg-blue-500 text-white font-bold py-2 px-8 rounded shadow border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300'>
                    {isEditing ? "Editing Row Item" : "Add Table Item"}
                </button>
            </form>

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
                                <td className='amount'>{amount}</td>
                                <td><button onClick={() => deleteRow(id)}><AiOutlineDelete className='tw- text-red-500 font-bold text-xl' /></button></td>
                                <td><button onClick={() => editRow(id)}><AiOutlineEdit className='tw- text-green-500 font-bold text-xl' /></button></td>
                            </tr>
                        </tbody>
                    </React.Fragment>
                ))}
            </table>
            <div>
                <h2 className='tw- text-gray-800 text-4xl font-bold'>
                    TND {total.toLocaleString()}
                </h2>
            </div>
        </>
    );
};

export default TableForm;