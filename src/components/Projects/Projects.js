import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

import mes from "../../Assets/Projects/mes.png";
import nms from "../../Assets/Projects/nms.png";
import food from "../../Assets/Projects/foodDelivery.png";
import video from "../../Assets/Projects/videoChatting.png";
import invoice from "../../Assets/Projects/invoice.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mes}
              isBlog={false}
              title="MES"
              description="Skills: System Architecture Design, Data Analysis, Genetic algorithm, Statistics Math,Big data Analysis, OPC, Go Lang, Mongo DB, React"
              ghLink=""
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={nms}
              isBlog={false}
              title="NMS"
              description="Skills: Java, JavaScript, SQL Server, MySQL, oracle, React JS, Mongo DB, Node, PHP, Amazon S3, Redis, abbit Server"
              ghLink=""
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={video}
              isBlog={false}
              title="Video Conference"
              description="Skills: NodeJS, ReactJS, AngularJS, c++, QT, webrtc, ReactNative."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={food}
              isBlog={false}
              title="Food Delivery System"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN andSkills: React Native, React JS, Amazon S3, Redis server, Mongo DB, Node, PHP"
              ghLink=""
              demoLink="https://apps.apple.com/us/app/uber-eats-food-delivery/id1058959277"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={invoice}
              isBlog={false}
              title="Transactional Network"
              description="Skills: React native, React JS, Mongo DB, Kendo-React-Component. Security"
              ghLink=""
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
