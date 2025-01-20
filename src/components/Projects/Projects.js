import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import sales from "../../Assets/Projects/sales.png";
import chatify from "../../Assets/Projects/chatify.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

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
              imgPath={sales}
              isBlog={false}
              title="FinForecastHub's Data Agnostic Forecasting Module"
              description="This project serves as a module of our broader FYDP 'FinForecastHub'. It focuses on making data agnostic deep learning based architectures that can be used to forecast financial metric of any companys' dataset on runtime. The architecture is designed to be generic that can be trained on time-series dataset of any size and nature and can give best possible forecasting results."
              ghLink="https://github.com/Jazib-2004/FinForecastHub-FYDP"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Credit Worthiness in Microfinance Banks using XAI"
              description="While giving credit scores to applicants on their loan applications, Bankers can have trust issues over Machine Learning models and they can find those models intransparent and unreliable. To address transparency issues in credit worthiness, this project uses Explainable AI to bring interpretability in Machine Learning models."
              ghLink="https://github.com/Jazib-2004/Credit-Worthiness-in-Microfinance-Banks-using-Explainable-AI"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Food Calorie Estimation using YOLO and OpenCV"
              description="This project uses DIP and YOLOV8 to use food images with horizontal and vertical coins alongside to predict food calories. The model does object detection, image segmentation and then classification using YOLOV8, and then uses K-Nearest Neighbours regressor to predict the calories in the classified food."
              ghLink="https://github.com/Jazib-2004/Food-Calorie-Estimation-using-Food-Images"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Mask Detection using CNNs"
              description="Face mask detection can be very useful in environments like hospital emergency rooms or ICUs where wearing mask is mandatory. It can also help in pandemics like COVID where such models can detect if a person is wearing a mask or not. In this project, I used a Convolutional Nueral Network architecture to train a face mask detection algorithm based."
              ghLink="https://github.com/Jazib-2004/Face-Mask-Detection-using-CNNs"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Prediction, Classification, and Clustering on Public Expenses Dataset"
              description="Applying end-to-end ML pipeline incl. EDA to get to know data more, data preprocessing to prepare data for modelling, and at last REGRESSION to predict one feature's value, CLASSIFICATION to classify one feature, and K-means for clustering and its analysis."
              ghLink="https://github.com/Jazib-2004/Prediction-Classification-and-Clustering-on-Public-Expenses-Dataset"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Software Projects Success Estimation using Supervised ML"
              description="Software Projects are always risky considering the time and budget constraints and majority of them are considered fail as they overreach time and budget deadlines. Using Scikit-Learn for classification and regression (scoring of projects) and data preprocessing."
              ghLink="https://github.com/Jazib-2004/Software-Projects-Success-Estimation-using-Supervised-ML"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
