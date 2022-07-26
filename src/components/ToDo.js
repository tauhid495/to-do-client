
import React, { } from 'react';
import TaskList from './TaskList';

const ToDo = ({ handleAdd, tasks, handleDelete }) => {

    
    return (
        <div className=''>
            <div class="py-10 min-h-screen bg-base-200">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <div class="card flex-shrink-0 w-full md:w-1/2 shadow-2xl bg-base-100">
                        <div class="card-body">
                            {/* <form > */}
                            <form onSubmit={handleAdd} class="form-control">
                                <div class="input-group">
                                    <input type="text" name='name' placeholder="Add to-do's" className="input w-full input-bordered" />
                                    <button type="submit" class="btn btn-primary btn-square">Add</button>
                                </div>
                            </form>
                            {/* </form> */}
                            {
                                tasks.map((task, index) =>
                                    <TaskList tasklist={task} key={index} handleDelete={handleDelete} />
                                )
                            }
                        </div>
                    </div>
                    <div class="text-center md:w-1/2 lg:text-left pl-10">
                        <h1 class="text-5xl font-bold">Change this text!</h1>
                        <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ToDo;