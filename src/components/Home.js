import React from 'react';
import AnalogueClock from 'react-analogue-clock';
import Calander from './Calander';


const Home = () => {


    const clockOptions = {
        baseColor: 'lightgray',
        borderColor: 'darkorange',
        borderWidth: 11,
        centerColor: 'firebrick',
        handColors: {
            hour: 'black',
            minute: 'black',
            second: '#8b0000',
        },
        notchColor: 'gray',
        numbersColor: 'gray',
        showNumbers: true,
        size: 250
    }


    return (
        <div className='flex'>
            <div className='w-1/4'>
                <Calander />
            </div>
            <div className='w-2/4'>
            </div>
            <div className=' w-1/4 min-h-screen pt-7'>
                <div className='flex flex-col items-center' >
                    <AnalogueClock {...clockOptions} />
                </div>
            </div>
        </div>
    );
};

export default Home;