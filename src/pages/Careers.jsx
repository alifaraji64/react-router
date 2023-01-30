import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Careers = () => {
    const careers = useLoaderData()
    return (
        <div className='careers'>
            {careers.map((career)=>(
                <Link to={career.id.toString()} key={career.id}>
                    <p>{career.title}</p>
                    <p>based in {career.location}</p>
                </Link>
            ))}
        </div>
    );
}

export default Careers;
export const careersLoader = async () => {
    const res = await fetch('http://localhost:4000/careers');
    if(!res.ok){
        throw Error('oops something went wrong while getting the jobs')
    }
    return res.json();
}
