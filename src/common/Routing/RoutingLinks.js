import React from 'react'
import {Link} from "react-router-dom";

function RoutingLinks({path, label, className}) {
    return (
        <>
            <Link to={path}>
                {
                    className && label ? <div className={className}>
                        {label}
                    </div> : ''

                }
            </Link>
        </>
    )
}

export default RoutingLinks
