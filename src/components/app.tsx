import React from "react";

interface IAppProps {
    message: string
}

export const App: React.FC<IAppProps> = ({message}) => {
    return (
        <div className='title'>
            <h1>Boundary Application</h1>
            {message}
        </div>
    )
}
