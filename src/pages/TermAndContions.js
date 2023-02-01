import React from 'react';
import BreakCrumb from '../components/BreakCrumb';
import Meta from '../components/Meta';
const TermAndContions = () => {
    return (
        <>
            <Meta title="Term Condition" />
            <BreakCrumb title="Term Condition" />
            <section className="policy-wrapper py-5 home-wrapper-2">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <div className="policy"></div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default TermAndContions