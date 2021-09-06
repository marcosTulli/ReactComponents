import React from 'react';
import SpeakersRenderProps from '../src/SpeakerRenderProps';

const Speakers = () => {
    return (
        <SpeakersRenderProps>
            {({speakers}) => {
                return (
                    <div>
                        {speakers.map(({ imageSrc, name }) => {
                            return (<img src={`images/${imageSrc}.jpg`} alt={name} key={imageSrc} />
                            );
                        })}
                    </div>
                );
            }}
        </SpeakersRenderProps>
    );
};

export default Speakers;