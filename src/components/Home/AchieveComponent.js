import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const Stats = () => {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });

  const stats = [
    { value: 6, label: "Years of Experience", suffix: "+" },
    { value: 50, label: "Projects Completed", suffix: "+" },
    { value: 100, label: "Happy Clients", suffix: "%" },
    { value: 15, label: "Technologies Mastered", suffix: "+" }
  ];

  return (
    <div ref={ref} style={{
      padding: "60px 20px",
      background: "linear-gradient(135deg, rgba(144, 238, 144, 0.1), rgba(25, 149, 173, 0.1))",
      borderRadius: "10px",
      margin: "40px 0"
    }}>
      <Container>
        <Row>
          {stats.map((stat, index) => (
            <Col md={3} sm={6} key={index} style={{ textAlign: "center", marginBottom: "30px" }}>
              <h2 className="green" style={{ fontSize: "2.5em", fontWeight: "700" }}>
                {inView && <CountUp end={stat.value} duration={2.5} />}
                {stat.suffix}
              </h2>
              <p style={{ color: "white", fontSize: "1.1em", marginTop: "10px" }}>{stat.label}</p>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Stats;