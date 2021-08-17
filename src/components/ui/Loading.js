import React from 'react';

export const Loading = () => {
    return (
        <div className="loading">
            <div className="spinner-border spinner" role="status">
                <span className="sr-only">Loading...</span>
            </div>
        </div>
    )
}
