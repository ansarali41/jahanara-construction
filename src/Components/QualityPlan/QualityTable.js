import React from 'react';
import Table from 'react-bootstrap/Table';

const QualityTable = () => {
    return (
        <Table striped bordered hover>
            <thead>
                <tr className="text-center">
                    <th>#</th>
                    <th>First Name</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className="text-center">1</td>
                    <td>site conditions</td>
                </tr>
                <tr>
                    <td className="text-center">1</td>
                    <td>soil information</td>
                </tr>
            </tbody>
        </Table>
    );
};

export default QualityTable;
