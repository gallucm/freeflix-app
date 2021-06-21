import React from 'react';

export const CodeGrid = ({ code }) => {

    return (
        <div key={code.code}>
            <>
                {(code.used) && <h3 className="text-danger">{code.code}</h3>}

                {(!code.used) && <h3 className="text-success">{code.code}</h3>}
            </>
        </div>
    )
}
