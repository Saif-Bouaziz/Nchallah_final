import React, { useEffect, useState } from 'react';
import ClientDetails from '../component/ClientDetails';
import Dates from '../component/Dates';
import Footer from '../component/Footer';
import Header from '../component/Header';
import MainDetails from '../component/MainDetails';
import Notes from '../component/Notes';
import Table from '../component/Table';
import TableForm from '../component/TableForm';
import axios from 'axios';

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
    const [clientPhone, setClientPhone] = useState("")
    const [clientEmail, setClientEmail] = useState("")


    const [invoiceNumber, setInvoiceNumber] = useState("")
    const [invoiceDate, setInvoiceDate] = useState("")
    const [notes, setNotes] = useState("")
    const [description, setDescription] = useState("")
    const [quantity, setQuantity] = useState("")
    const [price, setPrice] = useState("")
    const [amount, setAmount] = useState("")
    const [list, setList] = useState([])
    const [total, setTotal] = useState(0)
    const [tva, setTva] = useState("")
    const [tax, setTax] = useState("")
    const [timbre, setTimbre] = useState([])
    const [timbree, setTimbree] = useState("")
    const [totalnet, setTotalnet] = useState("")
    const [type, setType] = useState("")
    const [matricule, setMatricule] = useState("")
    const [client, setClient] = useState([])


    useEffect(() => {
        axios.get('/api/timbre')
            .then(res => {
                setTimbre(res.data)

            });

    }, [])

    useEffect(() => {
        axios.get('/api/gestion_client')
            .then(res => {
                setClient(res.data)

            });

    }, [])

    const handlePrint = () => {
        window.print()
    }
    return (
        <div className='facture'>

            <div>
                {showInvoice ? <div>
                    <div className='body'>
                        <main className='tw-  p-5 md:max-w-xl md:mx-auto lg:max-w-2xl xl:max-w-4xl bg-white rounded shadow'>
                            <Header />
                            <MainDetails name={name} address={address} bankAccount={bankAccount}
                                bankName={bankName} />
                            <ClientDetails clientName={clientName} clientAddress={clientAddress} clientPhone={clientPhone} clientEmail={clientEmail} matricule={matricule} />
                            <Dates invoiceNumber={invoiceNumber} invoiceDate={invoiceDate} />
                            <Table description={description} quantity={quantity} price={price} amount={amount} list={list} setList={setList} total={total} setTotal={setTotal} tva={tva} tax={tax} timbre={timbree} totalnet={totalnet} />
                            Type  : {type}
                            <Notes notes={notes} />
                            <Footer address={address} email={email}
                                phone={phone}
                            />
                        </main >
                    </div>
                    <div className='no-print'>
                        <button onClick={handlePrint} className='tw- mt-5 bg-blue-500 text-white font-bold py-2 px-8 rounded shadow border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300'>Print</button>
                        <button onClick={() => setShowInvoice(false)} className='tw- mt-5 bg-blue-500 text-white font-bold py-2 px-8 rounded shadow border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300'>Edit Information</button>

                    </div>
                </div> : (
                    <>
                        <main className='tw-  p-5 md:max-w-xl md:mx-auto lg:max-w-2xl xl:max-w-4xl bg-white rounded shadow'>

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

                                <label htmlFor="matricule">matricule du client</label>
                                <select name="matricule" onChange={e => setMatricule(e.target.value)}  >
                                    {
                                        client.map(({ matricule }) => (
                                            <option value={matricule}>{matricule}</option>
                                        ))
                                    }
                                </select>

                                <label htmlFor="clientAddress">Enter your clientAddress</label>
                                <input type="clientAddress" name='clientAddress' id='clientAddress' placeholder='enter your clientAddress' autoComplete='off' value={clientAddress} onChange={(e) => setClientAddress(e.target.value)} />

                                <label htmlFor="clientPhone">Enter your clientPhone</label>
                                <input type="text" name='clientPhone' id='clientPhone' placeholder='enter your clientPhone' autoComplete='off' value={clientPhone} onChange={(e) => setClientPhone(e.target.value)} />

                                <label htmlFor="clientEmail">Enter your clientEmail</label>
                                <input type="text" name='clientEmail' id='clientEmail' placeholder='enter your clientEmail' autoComplete='off' value={clientEmail} onChange={(e) => setClientEmail(e.target.value)} />

                                <label htmlFor="invoiceNumber">Enter your invoiceNumber</label>
                                <input type="invoiceNumber" name='invoiceNumber' id='invoiceNumber' placeholder='enter your invoiceNumber' autoComplete='off' value={invoiceNumber} onChange={(e) => setInvoiceNumber(e.target.value)} />

                                <label htmlFor="invoiceDate">Enter your invoiceDate</label>
                                <input type="date" name='invoiceDate' id='invoiceDate' placeholder='enter your invoiceDate' autoComplete='off' value={invoiceDate} onChange={(e) => setInvoiceDate(e.target.value)} />


                                <article>
                                    <TableForm description={description} setDescription={setDescription}
                                        quantity={quantity} setQuantity={setQuantity}
                                        price={price} setPrice={setPrice}
                                        amount={amount} setAmount={setAmount}
                                        list={list}
                                        setList={setList}
                                        total={total} setTotal={setTotal} />
                                </article>

                                <label htmlFor="TVA">Enter your TVA</label>
                                <input type="text" name='TVA' id='TVA' placeholder='enter your TVA' autoComplete='off' value={tva} onChange={(e) => setTva(e.target.value)} />

                                <label htmlFor="TAX">Enter your TAX</label>
                                <input type="text" name='TAX' id='TAX' placeholder='enter your TAX' autoComplete='off' value={tax} onChange={(e) => setTax(e.target.value)} />

                                <label htmlFor="timbre">Enter your timbre</label>
                                <select name="timbre" onChange={e => setTimbree(e.target.value)}  >
                                    {
                                        timbre.map(({ montant }) => (
                                            <option value={montant}>{montant}</option>
                                        ))
                                    }
                                </select>
                                <label htmlFor="totalnet">Enter your Total Net</label>
                                <input type="text" name='totalnet' id='totalnet' placeholder='enter your totalnet' autoComplete='off' value={totalnet} onChange={(e) => setTotalnet(e.target.value)} />


                                <label htmlFor="notes">Enter your notes</label>
                                <textarea name="notes" id="notes" cols="30" rows="10" value={notes} onChange={(e) => setNotes(e.target.value)}></textarea>

                                <label htmlFor="type">Type</label>
                                <select name="type" id="type" onChange={(e) => setType(e.target.value)}>
                                    <option value="Cheque">Cheque</option>
                                    <option value="Espece">Espece</option>
                                    <option value="Virement">Virement</option>
                                    <option value="Autre">Autre</option>
                                </select>


                                <button onClick={() => setShowInvoice(true)} className='tw- bg-blue-500 text-white font-bold py-2 px-8 rounded shadow border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300'>Preview Invoice</button>
                            </div>
                        </main>
                    </>
                )
                }



            </div>

        </div>
    );
};

export default Facture;