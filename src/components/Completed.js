import React from 'react';
import CompleatedTasks from './CompleatedTasks';

const Completed = ({ tasks }) => {


    return (
        <div className=''>
            <div class="py-10 min-h-screen bg-base-200">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <div class="card flex-shrink-0 w-full md:w-1/2 shadow-2xl bg-base-100">
                        <div class="card-body">

                            {
                                tasks.map((task, index) =>
                                    <CompleatedTasks
                                        tasklist={task} key={index} />
                                )
                            }
                        </div>
                    </div>
                    <div class="text-center md:w-1/2 lg:text-left pl-10">
                        <h1 class="text-5xl font-bold">Compleated Tasks!</h1>
                        <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Completed;