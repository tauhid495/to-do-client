import React from 'react';
import AnalogueClock from 'react-analogue-clock';
import Calender from './Calender';




const Home = () => {


    const clockOptions = {
        baseColor: 'midnightblue',
        borderColor: 'darkorange',
        borderWidth: 9,
        centerColor: 'gray',
        handColors: {
            hour: 'gray',
            minute: 'gray',
            second: '#8b0000',
        },
        notchColor: 'navajowhite',
        numbersColor: '#d0d0d0',
        showNumbers: false,
        size: 200
    }


    return (
        <div className='min-h-screen'>

            <div className='flex items-center justify-center' >
                <AnalogueClock {...clockOptions} />
            </div>
            <div className='flex items-center justify-center'>
                <Calender />
            </div>
        </div>
    );
};

export default Home;