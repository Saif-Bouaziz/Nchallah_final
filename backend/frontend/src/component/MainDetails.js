import React from 'react';

const MainDetails = ({ name, address }) => {
    return (
        <div>
            <section className='tw- flex flex-col items-end justify-end'>

                <h2 className='tw- font-bold text-xl uppercase md:text-4'>{name}</h2>
                <p>{address}</p>
            </section>
        </div>
    );
};

export default MainDetails;