import React from 'react';

const Header = () => {
    const handlePrint = () => {
        window.print()
    }
    return (
        <div>
            <header className='tw- flex flex-col items-center justify-center mb-5 xl:flex-row xl:justify-between'>
                <div>
                    <h1 className='tw- font-bold uppercase tracking-wide text-4xl mb-3'>Invoicer</h1>
                </div>
                <ul className='tw- flex items-center flex-wrap'>
                    <li>
                        <button className='tw- btn btn-print' onClick={handlePrint}>Print</button>
                    </li>
                    <li>
                        <button className='tw- btn btn-download'>
                            Download
                        </button>
                    </li>
                    <li>
                        <button className='tw- btn btn-send'>
                            Send
                        </button>
                    </li>
                </ul>

            </header>
        </div>
    );
};

export default Header;