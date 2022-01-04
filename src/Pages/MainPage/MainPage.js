import React from 'react'
import { Col, Row } from 'react-bootstrap'
import  Breadcrumbs from '../../Components/Breadcrumb/Breadcrumb'
import Filter from '../../Components/Filter/Filter'
import Header from '../../Components/Header/Header'

export default function MainPage() {
    return (
        <div>
            <Header/>
            <Breadcrumbs/>
            <Row>
                <Col lg={12}>
                <Filter/>

                </Col>
            </Row>
        </div>
    )
}
