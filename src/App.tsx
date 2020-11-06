import React, { Fragment } from 'react'
import './App.scss';
import Col from '@/Layouts/Grid/Col';
import Row from '@/Layouts/Grid/Row';

function App() {
    return (
        <Fragment>
            <Row>
                <Col span={12}>
                    <h2>React Typescript Skeleton</h2>
                    <h5>rubykhanhas@gmail.com</h5>
                </Col>
            </Row>
        </Fragment>
    )
}

export default App;