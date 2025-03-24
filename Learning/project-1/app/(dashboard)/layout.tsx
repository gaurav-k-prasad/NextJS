import React from 'react'

const layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <div className='text-3xl'>DashBoard layout</div>
            {children}
        </>
    )
}

export default layout