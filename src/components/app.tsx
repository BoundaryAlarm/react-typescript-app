import React from "react";

interface IAppProps {
    message: string
}

export const App: React.FC<IAppProps> = ({message}) => {
    return (
        <main className={'container'}>
            <h1>Boundary Application {message}</h1>
            <div className='row h-100 align-items-center'>
                <div className="col-xl-9 pb-4">
                    <nav className="navbar navbar-expand-md navbar-dark bg-primary mb-2">
                        <a className="navbar-brand" href="#">Primary</a>
                    </nav>
                    <nav className="navbar navbar-expand-md navbar-dark bg-secondary mb-2">
                        <a className="navbar-brand" href="#">Secondary</a>
                    </nav>
                    <nav className="navbar navbar-expand-md navbar-dark bg-info mb-2">
                        <a className="navbar-brand" href="#">Info</a>
                    </nav>
                    <nav className="navbar navbar-expand-md navbar-dark bg-success mb-2">
                        <a className="navbar-brand" href="#">Success</a>
                    </nav>
                    <nav className="navbar navbar-expand-md navbar-dark bg-warning mb-2">
                        <a className="navbar-brand" href="#">Warning</a>
                    </nav>
                    <nav className="navbar navbar-expand-md navbar-dark bg-danger mb-2">
                        <a className="navbar-brand" href="#">Danger</a>
                    </nav>
                </div>
            </div>
            <div className="row h-100 align-items-center">
                <div className="col-12">
                    <h2>Buttons</h2>
                    <div className="row py-2">
                        <div className="col-lg col-4">
                            <button className="btn btn-outline-primary mr-1">Primary</button>
                        </div>
                        <div className="col-lg col-4">
                            <button className="btn btn-outline-secondary mr-1">Secondary</button>
                        </div>
                        <div className="col-lg col-4">
                            <button className="btn btn-outline-info mr-1">Info</button>
                        </div>
                        <div className="col-lg col-4">
                            <button className="btn btn-outline-danger mr-1">Danger</button>
                        </div>
                        <div className="col-lg col-4">
                            <button className="btn btn-outline-success mr-1">Success</button>
                        </div>
                        <div className="col-lg col-4">
                            <button className="btn btn-outline-warning mr-1">Warning</button>
                        </div>
                    </div>
                    <div className="row py-2">
                        <div className="col-md col-4">
                            <button className="btn btn-primary mr-1">Primary</button>
                        </div>
                        <div className="col-md col-4">
                            <button className="btn btn-secondary mr-1">Secondary</button>
                        </div>
                        <div className="col-md col-4">
                            <button className="btn btn-info mr-1">Info</button>
                        </div>
                        <div className="col-md col-4">
                            <button className="btn btn-danger mr-1">Danger <span
                                className="badge badge-light badge-pill">!</span></button>
                        </div>
                        <div className="col-md col-4">
                            <button className="btn btn-success mr-1">Success</button>
                        </div>
                        <div className="col-md col-4">
                            <button className="btn btn-warning mr-1">Warning</button>
                        </div>
                    </div>
                    <div className="row py-2">
                        <div className="col-md-auto col-4">
                            <button className="btn btn-sm btn-primary mr-1">Primary</button>
                        </div>
                        <div className="col-md-auto col-4">
                            <button className="btn btn-sm btn-secondary mr-1">Secondary</button>
                        </div>
                        <div className="col-md-auto col-4">
                            <button className="btn btn-sm btn-info mr-1">Info</button>
                        </div>
                        <div className="col-md-auto col-4">
                            <button className="btn btn-sm btn-danger mr-1">Danger</button>
                        </div>
                        <div className="col-md-auto col-4">
                            <button className="btn btn-sm btn-success mr-1">Success</button>
                        </div>
                        <div className="col-md-auto col-4">
                            <button className="btn btn-sm btn-warning mr-1">Warning</button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
