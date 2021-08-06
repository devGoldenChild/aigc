import React from "react";
import Container from "./Container";
import Heading from "./Heading";
import ServiceCard from "./ServiceCard";
import { FaCode } from "react-icons/fa";

const title = (
  <>
    Our <span>Services</span>
  </>
);

const styles = {
  content: {
    display: "flex",
    flexWrap: "wrap",
  },
};

export default function Services() {
  return (
    <section className="services">
      <Container>
        <Heading title={title}>
          Our team of experts is on the standby to give you the following
          services
        </Heading>
        <div style={styles.content}>
          <ServiceCard title="Web Development" Icon={FaCode}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
            eligendi culpa sequi.
          </ServiceCard>
          <ServiceCard title="Web Development" Icon={FaCode}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
            eligendi culpa sequi.
          </ServiceCard>
          <ServiceCard title="Web Development" Icon={FaCode}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
            eligendi culpa sequi.
          </ServiceCard>
          <ServiceCard title="Web Development" Icon={FaCode}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
            eligendi culpa sequi.
          </ServiceCard>
          <ServiceCard title="Web Development" Icon={FaCode}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
            eligendi culpa sequi.
          </ServiceCard>
          <ServiceCard title="Web Development" Icon={FaCode}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
            eligendi culpa sequi.
          </ServiceCard>
        </div>
      </Container>
    </section>
  );
}
