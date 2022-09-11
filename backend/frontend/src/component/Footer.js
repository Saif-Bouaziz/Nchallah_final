import React from 'react';

const Footer = ({ name, address, email, website, phone,
    bankAccount,
    bankName }) => {
    return (
        <div className='footer-facture tw- border-t-2 border-gray-300 pt-5'>
            <footer>
                <ul className='tw- flex flex-wrap items-center justify-center'>
                    <li><span className='tw- font-bold'>Your name:</span> {name}</li>
                    <li><span className='tw- font-bold'>Your email:</span> {email}</li>
                    <li><span className='tw- font-bold'>Phone number:</span> {phone}</li>
                    <li><span className='tw- font-bold'>Bank:</span>{bankName}</li>
                    <li><span className='tw- font-bold'>Account holder:</span> {name}</li>
                    <li><span className='tw- font-bold'>Account number:</span> {bankAccount}</li>
                    <li><span className='tw- font-bold'>Website:</span> <a href={website}>{website}</a></li>
                </ul>
            </footer>
        </div>
    );
};

export default Footer;