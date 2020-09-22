import React from "react";

import styles from '../styles/index.scss';

interface IAppProps {
    message: string
}

export const App: React.FC<IAppProps> = ({message}) => {
    return (
        <div className={styles.title}>
            <h1>Boundary Application</h1>
            {message}
        </div>
    )
}
