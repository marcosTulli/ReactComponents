import React from 'react';
import withData from '../src/withData';

 const Speakers = ({ speakers }) => { 
     return  (
         <div>
            {speakers.map(({ imageSrc, name }) => {
                return (<img src={`images/${imageSrc}.jpg`} alt= {name} key = {imageSrc} />
                );
            })}
        </div>
    ); 
};

 export default withData(1)(Speakers);