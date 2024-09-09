import { motion } from "framer-motion";
import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

interface LoanType {
  title: string;
  description: string;
}

interface ServiceDetailsProps {
  loanTypes: LoanType[];
  imgSrc: string;
  mainTitle: string;
  subtitle: string;
  introText: string;
}

const ServiceDetails: React.FC<ServiceDetailsProps> = ({
  loanTypes,
  imgSrc,
  mainTitle,
  subtitle,
  introText,
}) => {
  return (
    <section style={{ backgroundColor: "#f4f4f5", padding: "5rem 1rem" }}>
      <Container>
        <Row className="align-items-stretch">
          <motion.div
            className="col-md-5"
            initial={{ opacity: 0, y: 150 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            style={{ display: "flex", height: "100%", marginBottom: "2rem" }}
          >
            <Image
              src={imgSrc}
              fluid
              style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "15px" }}
            />
          </motion.div>
          <motion.div
            className="col-md-7 d-flex flex-column justify-content-center"
            initial={{ opacity: 0, y: 150 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            style={{ overflowWrap: "break-word", padding: "3rem" }}
          >
            <h1 className="mb-3 fw-bold text-center text-md-start">{mainTitle}</h1>
            <p className="mb-5 text-center text-md-start" style={{ fontSize: "1.3em" }}>
              {introText}
            </p>
            <h2 className="mb-5 fw-bold text-center text-md-start">{subtitle}</h2>
            <Row>
              {loanTypes.map((loan, index) => (
                <Col xs={12} md={6} key={index} className="mb-4">
                  <div className="py-3">
                    <h5 className="fw-bold">{loan.title}</h5>
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

export default ServiceDetails;
