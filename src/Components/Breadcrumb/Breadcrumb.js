import React from 'react'
import { Col, Row, Breadcrumb } from 'react-bootstrap'
import "./Breadcrumb.css";

export default function Breadcrumbs() {
    return (
        <div>
            <Row>
                <Col lg={12} className='bread-col'>
                    <Breadcrumb className='bread'>
                        <Breadcrumb.Item href="#" active className='breadActive'>Home</Breadcrumb.Item>
                        <Breadcrumb.Item href="#" className='breadLink'>
                            Shirts for Men
                        </Breadcrumb.Item>

                    </Breadcrumb>
                    <span className='category-head'>
                        Shirts for Men - <span className='category-number'>567890</span>
                    </span>
                </Col>
            </Row>

        </div>
    )
}
