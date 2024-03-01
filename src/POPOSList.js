import React from 'react';
import POPOSSpace from './POPOSSpace';
import './POPOSList.css';
import data from './Glasgow.json'


function POPOSList() {

    const parks = data.map((obj) => {
        return (
            <POPOSSpace
                name={obj.Name}
                address={obj.Address}
                image={obj.image}
                likes={obj.Likes}
            />
        )
    })

    return (
        <div className='POPOSList'>
            { parks }
        </div>
    )

}

export default POPOSList