import React from 'react'
import BreakCrumb from '../components/BreakCrumb';
import Container from '../components/Container';
import Meta from '../components/Meta';
const ShippingPolicy = () => {
    return (
        <>
            <Meta title="Shipping Policy" />
            <BreakCrumb title="Shipping Policy" />
            <Container class1="policy-wrapper py-5 home-wrapper-2">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <div className="policy"></div>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default ShippingPolicy