import React from 'react';

const wrappedDiv = (WrappedComponent,className) => {

    return props => (
        <div className={className}>
            <WrappedComponent {...props}/>
        </div>
    )
}

export default wrappedDiv;