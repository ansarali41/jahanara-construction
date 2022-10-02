import React from 'react';
import { Button } from 'react-bootstrap';
import LinkTo from '../../Common/Components/LinkTo';
import './NoMatch.css';

const NoMatch = () => {
    return (
        <div className="container body">
            <div className="row my-5 py-4">
                <div className="col-md-12 mt-5 pt-5">
                    <div className="error-template">
                        <h1>Oops!</h1>
                        <h2>404 Not Found</h2>
                        <div className="error-details">Sorry, an error has occured, Requested page not found!</div>
                        <div className="error-actions">
                            <LinkTo to="/">
                                <Button variant="primary">Take Me Home</Button>
                            </LinkTo>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NoMatch;
