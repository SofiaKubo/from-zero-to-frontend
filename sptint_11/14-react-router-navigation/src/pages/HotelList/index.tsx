import React from 'react';

import {Layout} from '../../components/Layout';

import {HOTELS} from '../../constants';

export const HotelList = () => {
    return (
        <Layout>
            <h1>Отели:</h1>
            <div className="list">
                {
                    HOTELS.map(({img, title}, index) => <div>
                        <figure>
                            <img width={200} src={img} alt="Elephant at sunset" />
                            <figcaption>{title}</figcaption>
                        </figure>
                    </div>)
                }
            </div>
        </Layout>
    )
};