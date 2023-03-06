import React from "react";
import BreakCrumb from "../components/BreakCrumb";
import Container from "../components/Container";
import Meta from "../components/Meta";
const TermAndContions = () => {
  return (
    <>
      <Meta title="Term Condition" />
      <BreakCrumb title="Term Condition" />
      <Container class1="policy-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <div className="policy"></div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default TermAndContions;
