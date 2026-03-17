import { SpaceIcon } from 'lucide-react';
import React from 'react';

const PriceCard = ({ price }) => {

    console.log(price);
    const features = price.features;
    return (
        <div className='space-y-5 border border-gray-300 rounded-2xl p-5 bg-accent-content duration-500 hover:-translate-y-2'>
            {/* card title */}
            <div className='bg-blue-300 rounded-2xl p-4 text-black'>
                <h1 className='text-3xl font-semibold italic'>{price.title}</h1>
                <h3 className='text-xl font-medium'>{price.price}</h3>
            </div>
            {/* Popularity */}
            <div>
                <button className='btn btn-secondary'>{price.isPopular ? 'Very Popular' : 'Not Popular'}</button>
            </div>

            {/* features */}
            <div>
                <p className='mb-5'>Features:</p>
                <div className='flex flex-wrap gap-5'>
                    {
                        features.map(feature => <span className='badge p-4 bg-accent text-black'>{feature}</span>)
                    }
                </div>
            </div>

            {/* Button */}
            <div>
                <button className='btn btn-primary'>{price.buttonText}</button>
            </div>

        </div>
    );
};

export default PriceCard;