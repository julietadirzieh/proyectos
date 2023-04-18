import React from 'react'
import Title from '../Title';

const DevProjects = ({ children, year }) => {
    return (
        <>
            <Title caption={`Proyectos - ${year}`} />
            <div className='mt-4 mb-8'>
                <div>{children}</div>
            </div>
        </>
    )
}

export default DevProjects;