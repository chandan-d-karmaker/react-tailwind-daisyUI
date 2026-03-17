import React, { use } from 'react';
import PriceCard from '../cards/priceCard';
import DaisyPriceCard from '../daisyUI/daisyPriceCard';

const Prices = ({PricePromise}) => {

    const pricingData = use(PricePromise);
    console.log(pricingData);
    return (
        <div>
            <h3 className='text-4xl font-semibold text-center mb-10'>Get our membership</h3>

            <div className='grid md:grid-cols-2 lg:grid-cols-3 w-4/5 mx-auto gap-5 mb-15'>

                {
                    // pricingData.map(price => <PriceCard key={price.id} price={price}></PriceCard>)
                    pricingData.map(price => <DaisyPriceCard key={price.id} price={price}></DaisyPriceCard>)
                }

            </div>
            
        </div>
    );
};

export default Prices;