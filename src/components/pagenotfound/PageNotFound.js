import React from 'react'
import error from '../../images/pnf.jpg'

function PageNotFound() {
    return (
        <div>
            <img style={{
                width: '100%', height: '100%'
            }} src={error} alt="error"/>
        </div>
    )
}

export default PageNotFound
