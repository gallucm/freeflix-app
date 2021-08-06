import React from 'react';

export const Loading = () => {
    return (
        <div className="loading">
            <div className="spinner-border spinner red-freeflix" role="status">
                <span className="sr-only">Loading...</span>
            </div>
        </div>
    )
}
