import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';
import { useState } from 'react';
import 'react-day-picker/dist/style.css';

const css = `
  .my-today { 
    font-weight: bold;
    font-size: 140%; 
    color: orangered;
  }
`;

const Calender = () => {

    const [selected, setSelected] = useState(new Date());

    let footer = <p>Please pick a day.</p>;
    if (selected) {
        footer = <p>You picked {format(selected, 'PP')}.</p>;
    }

    return (
        <div>
            <style>{css}</style>
            <DayPicker className='border-2 p-5 rounded-xl'
                mode="single"
                // selected={selected}
                // onSelect={setSelected}
                footer={footer}

                styles={{
                    caption: { color: 'gray', background: 'orange' },
                    head: { color: 'orange', background: 'gray' }
                }}

                modifiersClassNames={{
                    today: 'my-today'
                }}
            />
        </div>
    );
};

export default Calender;