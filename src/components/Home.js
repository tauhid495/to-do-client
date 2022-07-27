import React from 'react';
import AnalogueClock from 'react-analogue-clock';


const Home = () => {

    const clockOptions = {
        baseColor: '#00527b',
        borderColor: '#d0d0d0 ',
        borderWidth: 13,
        centerColor: '#000000',
        handColors: {
            hour: '#d0d0d0',
            minute: '#d0d0d0',
            second: '#8b0000',
        },
        notchColor: '#d0d0d0',
        numbersColor: '#d0d0d0',
        showNumbers: true,
        size: 300
    }


    return (
        <div className='min-h-screen'>
            Home
            <div className='flex items-center justify-center' >
                <AnalogueClock {...clockOptions} />
            </div>
        </div>
    );
};

export default Home;