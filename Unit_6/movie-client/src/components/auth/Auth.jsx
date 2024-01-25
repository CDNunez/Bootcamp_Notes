import React from 'react'
import Signup from './signup/Signup'
import { Container, Row, Col } from 'reactstrap';

export default function Auth() {
    return (
        <>
            <Container>
                <Row>
                    <Col md='6'>
                        <Signup />
                    </Col>
                </Row>
            </Container>
        </>
    )
}
