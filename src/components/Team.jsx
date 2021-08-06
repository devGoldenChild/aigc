import React from "react";
import Container from "./Container";
import Heading from "./Heading";
import TeamCard from "./TeamCard";
import image1 from "../assets/images/member1.jpg";

const title = (
  <>
    Our <span>Team</span>
  </>
);

const styles = {
  team: {
    backgroundColor: "#f2f2f2",
    paddingBottom: "80px",
  },
  content: {
    display: "flex",
    gap: "30px",
  },
};

export default function Team() {
  return (
    <section style={styles.team}>
      <Container>
        <Heading title={title} type="dark">
          Get to know our team members.
        </Heading>
        <div style={styles.content}>
          <TeamCard
            name="John Doe"
            title="Chief Executive Officer"
            img={image1}
          >
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste sequi
            explicabo dolores recusandae.
          </TeamCard>
          <TeamCard
            name="John Doe"
            title="Chief Executive Officer"
            img={image1}
          >
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste sequi
            explicabo dolores recusandae.
          </TeamCard>
          <TeamCard
            name="John Doe"
            title="Chief Executive Officer"
            img={image1}
          >
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste sequi
            explicabo dolores recusandae.
          </TeamCard>
        </div>
      </Container>
    </section>
  );
}
