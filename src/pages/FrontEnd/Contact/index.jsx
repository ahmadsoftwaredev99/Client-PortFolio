import { Button, Col, Form, Input, Row, Space } from "antd";
import { Link } from "react-router-dom";
import gmail from "/images/gmail.png";
import Title from "antd/es/typography/Title";
import ProfileLink from "../../../components/profileLink";
import TextArea from "antd/es/input/TextArea";
import "./contact.css";
import SocialMedia from "../../../components/socialMedias";

const Contact = () => {
  return (
    <section className="contact">
      <div className="contact-hero img-fluid"></div>
      <div className="contact-content container">
        <Form layout="vertical">
          <Row gutter={[40, 40]}>
            <Col xs={24} md={12}>
              <Title>Get In Touch</Title>
              <Form.Item label="Your Name:" required>
                <Input placeholder="Enter Your Name" name="userName" />
              </Form.Item>
              <Form.Item label="Email:" required>
                <Input placeholder="Enter Your Email" name="userEmail" />
              </Form.Item>
              <Form.Item label="Message:" required>
                <TextArea
                  placeholder="Describe Your Ideas....!"
                  rows={5}
                  name="description"
                  style={{ resize: "none" }}
                />
              </Form.Item>
              <Button
                type="primary"
                className="rounded-pill "
                block
                style={{ height: "40px" }}
              >
                Submit
              </Button>
            </Col>
            <Col xs={24} md={12}>
              <Title>Contact Info</Title>
              <Link
                className="d-flex align-items-center gap-2 link-offset-2 link-underline link-underline-opacity-0"
                to="https://www.linkedin.com/in/re-hakim/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              >
                <i
                  className="fa-brands fa-linkedin fs-3"
                  style={{ color: "#0A66C2", marginTop: "1.5rem" }}
                ></i>
                <span className="fs-5 mt-4">LinkedIn</span>
              </Link>
              <Link
                to={{ pathname: "mailto:ahmadpubg457@gmail.com" }}
                target="_blank"
                className="link-offset-2 link-underline link-underline-opacity-0"
              >
                <Title level={5} className="mt-5 pt-2 ms-1">
                  <img src={gmail} alt="gmail" width={22} />
                  <span className="ms-3 text-primary">
                    jonashem123@gmail.com
                  </span>
                </Title>
              </Link>
              <SocialMedia />
            </Col>
          </Row>
        </Form>
        <Row
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            marginTop: "5rem",
          }}
        >
          <Col xs={12} sm={8} md={6} lg={4}>
            {" "}
            {/* responsive column */}
            <Link to="/">
              <button
                className="btn btn-primary rounded-pill w-100"
                style={{ height: "40px" }}
              >
                Home
              </button>
            </Link>
          </Col>
        </Row>
      </div>
      <div className="contact-footer">
        <ProfileLink />
      </div>
    </section>
  );
};

export default Contact;
