import React from 'react';

interface MinimalCompoonentProps {

}

const MinimalCompoonent = (props: any) => {
    return (
        <div>{props.children}</div>
    )
}

export const MinimalLayout = MinimalCompoonent;