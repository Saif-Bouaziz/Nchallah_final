import React, { useState } from 'react';
import ClientDetails from '../component/ClientDetails';
import Dates from '../component/Dates';
import Footer from '../component/Footer';
import Header from '../component/Header';
import MainDetails from '../component/MainDetails';
import Notes from '../component/Notes';
import Table from '../component/Table';
import TableForm from '../component/TableForm';

const Facture = () => {
    const [showInvoice, setShowInvoice] = useState(false)
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [address, setAddress] = useState("")
    const [phone, setPhone] = useState("")
    const [bankName, setBankName] = useState("")
    const [bankAccount, setBankAccount] = useState("")
    const [website, setWebsite] = useState("")
    const [clientName, setClientName] = useState("")
    const [clientAddress, setClientAddress] = useState("")
    const [invoiceNumber, setInvoiceNumber] = useState("")
    const [invoiceDate, setInvoiceDate] = useState("")
    const [dueDate, setDueDate] = useState("")
    const [notes, setNotes] = useState("")
    const [description, setDescription] = useState("")
    const [quantity, setQuantity] = useState("")
    const [price, setPrice] = useState("")
    const [amount, setAmount] = useState("")
    const [list, setList] = useState([])
    const [total, setTotal] = useState(0)


    return (
        <div className='facture'>

            <div>
                <main className='tw-  p-5 md:max-w-xl md:mx-auto lg:max-w-2xl xl:max-w-4xl bg-white rounded shadow'>
                    {showInvoice ? <div>
                        <Header />
                        <MainDetails name={name} address={address} />
                        <ClientDetails clientName={clientName} clientAddress={clientAddress} />
                        <Dates invoiceNumber={invoiceNumber} invoiceDate={invoiceDate} dueDate={dueDate} />
                        <Table description={description} quantity={quantity} price={price} amount={amount} list={list} setList={setList} total={total} setTotal={setTotal} />
                        <Notes notes={notes} />
                        <Footer name={name} address={address} website={website} email={email}
                            phone={phone}
                            bankAccount={bankAccount}
                            bankName={bankName}
                        />
                        <button onClick={() => setShowInvoice(false)} className='tw- mt-5 bg-blue-500 text-white font-bold py-2 px-8 rounded shadow border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300'>Edit Information</button>
                    </div> : (
                        <>
                            <div className='tw- flex flex-col justify-center '>
                                <label htmlFor="name">Enter your name</label>
                                <input type="text" name='text' id='name' placeholder='enter your name' autoComplete='off' value={name} onChange={(e) => setName(e.target.value)} />

                                <label htmlFor="address">Enter your adress</label>
                                <input type="text" name='address' id='address' placeholder='enter your address' autoComplete='off' value={address} onChange={(e) => setAddress(e.target.value)} />

                                <label htmlFor="email">Enter your email</label>
                                <input type="email" name='email' id='email' placeholder='enter your email' autoComplete='off' value={email} onChange={(e) => setEmail(e.target.value)} />

                                <label htmlFor="website">Enter your website</label>
                                <input type="website" name='website' id='website' placeholder='enter your website' autoComplete='off' value={website} onChange={(e) => setWebsite(e.target.value)} />

                                <label htmlFor="phone">Enter your phone</label>
                                <input type="phone" name='phone' id='phone' placeholder='enter your phone' autoComplete='off' value={phone} onChange={(e) => setPhone(e.target.value)} />

                                <label htmlFor="bankName">Enter your bankName</label>
                                <input type="bankName" name='bankName' id='bankName' placeholder='enter your bankName' autoComplete='off' value={bankName} onChange={(e) => setBankName(e.target.value)} />

                                <label htmlFor="bankAccount">Enter your bankAccount</label>
                                <input type="bankAccount" name='bankAccount' id='bankAccount' placeholder='enter your bankAccount' autoComplete='off' value={bankAccount} onChange={(e) => setBankAccount(e.target.value)} />

                                <label htmlFor="clientName">Enter your clientName</label>
                                <input type="clientName" name='clientName' id='clientName' placeholder='enter your clientName' autoComplete='off' value={clientName} onChange={(e) => setClientName(e.target.value)} />

                                <label htmlFor="clientAddress">Enter your clientAddress</label>
                                <input type="clientAddress" name='clientAddress' id='clientAddress' placeholder='enter your clientAddress' autoComplete='off' value={clientAddress} onChange={(e) => setClientAddress(e.target.value)} />

                                <label htmlFor="invoiceNumber">Enter your invoiceNumber</label>
                                <input type="invoiceNumber" name='invoiceNumber' id='invoiceNumber' placeholder='enter your invoiceNumber' autoComplete='off' value={invoiceNumber} onChange={(e) => setInvoiceNumber(e.target.value)} />

                                <label htmlFor="invoiceDate">Enter your invoiceDate</label>
                                <input type="date" name='invoiceDate' id='invoiceDate' placeholder='enter your invoiceDate' autoComplete='off' value={invoiceDate} onChange={(e) => setInvoiceDate(e.target.value)} />

                                <label htmlFor="dueDate">Enter your dueDate</label>
                                <input type="date" name='dueDate' id='dueDate' placeholder='enter your dueDate' autoComplete='off' value={dueDate} onChange={(e) => setDueDate(e.target.value)} />

                                <article>
                                    <TableForm description={description} setDescription={setDescription}
                                        quantity={quantity} setQuantity={setQuantity}
                                        price={price} setPrice={setPrice}
                                        amount={amount} setAmount={setAmount}
                                        list={list}
                                        setList={setList}
                                        total={total} setTotal={setTotal} />
                                </article>


                                <label htmlFor="notes">Enter your notes</label>
                                <textarea name="notes" id="notes" cols="30" rows="10" value={notes} onChange={(e) => setNotes(e.target.value)}></textarea>


                                <button onClick={() => setShowInvoice(true)} className='tw- bg-blue-500 text-white font-bold py-2 px-8 rounded shadow border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300'>Preview Invoice</button>
                            </div>
                        </>
                    )
                    }


                </main>
            </div>

        </div>
    );
};

export default Facture;