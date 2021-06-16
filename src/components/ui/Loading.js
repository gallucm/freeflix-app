import React from 'react';

export const Loading = () => {
    return (
        <div className="loading mt-4">
            <div className="spinner-border text-danger spinner" role="status">
                <span className="sr-only">Loading...</span>
            </div>
        </div>
    )
}
