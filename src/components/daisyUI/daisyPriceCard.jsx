import React from 'react';

const DaisyPriceCard = ({ price }) => {
    console.log(price);
    const features = price.features;
    return (
        <div className="card w-96 bg-base-300 shadow-sm hover:-translate-y-2 duration-1000">
            <div className="card-body">
                <span className="badge badge-xs badge-warning">{price.isPopular ? 'Very Popular' : 'Not Popular'}</span>
                <div className="flex justify-between">
                    <h2 className="text-3xl font-bold">{price.title}</h2>
                    <span className="text-xl">{price.price}</span>
                </div>
                <ul className="mt-6 flex flex-col gap-2 text-xs flex-1">
                    {
                        features.map(feature =>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>{feature}</span>
                            </li>
                        )
                    }

                </ul>
                <div className="mt-6">
                    <button className="btn btn-primary btn-block">{price.buttonText}</button>
                </div>
            </div>
        </div>
    );
};

export default DaisyPriceCard;