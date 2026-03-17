import React, { use } from 'react';
import PriceCard from '../cards/priceCard';

const Prices = ({PricePromise}) => {

    const pricingData = use(PricePromise);
    console.log(pricingData);
    return (
        <div>
            <h3 className='text-4xl font-semibold text-center mb-10'>Get our membership</h3>

            <div className='grid grid-cols-3 w-4/5 mx-auto gap-5'>

                {
                    pricingData.map(price => <PriceCard key={price.id} price={price}></PriceCard>)
                }

            </div>
            
        </div>
    );
};

export default Prices;