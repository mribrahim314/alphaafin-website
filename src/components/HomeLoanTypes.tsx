import { motion } from "framer-motion";
import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

interface LoanType {
  title: string;
  description: string;
}

const loanTypes: LoanType[] = [
  {
    title: "Fixed-Rate Home Loan",
    description:
      "Provides stability with fixed payments but may have higher rates.",
  },
  {
    title: "Variable-Rate Home Loan",
    description: "Offers potentially lower payments if rates decrease.",
  },
  {
    title: "Interest-Only Home Loan",
    description: "Lower initial payments but higher total interest expense.",
  },
  {
    title: "Hybrid Home Loan",
    description:
      "Combines stability of fixed rate initially with potential savings of variable rate later.",
  },
];

const HomeLoanTypes: React.FC = () => {
  return (
    <section style={{ backgroundColor: "#f4f4f5", padding: "5rem 1rem" }}>
      <Container>
        <Row className="align-items-center">

          <motion.div
            className="col-md-5 mb-4 mb-md-0"
            initial={{ opacity: 0, y: 150 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <Image
              src="/assets/keys.jpg"
              fluid
              style={{ width: "100%", borderRadius: "15px" }}
            />
          </motion.div>

     
          <motion.div
            className="col-md-7"
            initial={{ opacity: 0, y: 150 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
          >
  
            <div className="d-flex align-items-center mb-3">
              <div
                style={{
                  width: "20px",
                  height: "20px",
                  backgroundColor: "#FFA500",
                }}
                className="me-2"
              ></div>
              <span style={{ fontWeight: "bold" }}>Best Home Loans</span>
            </div>

            <h2 className="mb-3">Different Types Of Home Loans</h2>
            <p className="mb-4">
              To help you determine the best loan option, we have four different
              types of home loans:
            </p>

            <Row>
              {loanTypes.map((loan, index) => (
                <Col md={6} key={index} className="mb-4">
                  <div className="py-3">
                    <h5>{loan.title}</h5>
                    <p className="text-muted">{loan.description}</p>
                  </div>
                </Col>
              ))}
            </Row>
          </motion.div>
        </Row>
      </Container>
    </section>
  );
};

export default HomeLoanTypes;
