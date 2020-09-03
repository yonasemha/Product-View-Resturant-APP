import React from "react";
import { Form, Row, Col } from "react-bootstrap";

class AddToMenu extends React.Component {
  render() {
    let inputElement = null;

    switch (this.props.inpuType) {
      case "input":
        inputElement = (
          <div className="container">
            <Row center="true">
              <Col md={{ span: 8, offset: 2 }}>
                <Form>
                  <Form.Group controlId="">
                    <Form.Label> {this.props.label} </Form.Label>
                    <Form.Control
                      type={this.props.type}
                      placeholder={this.props.placeholder}
                      value={this.props.name}
                      onChange={this.props.change}
                    />
                  </Form.Group>
                </Form>
              </Col>
            </Row>
          </div>
        );
        break;
      case "textarea":
        inputElement = (
          <div className="container">
            <Row center="true">
              <Col md={{ span: 8, offset: 2 }}>
                <Form>
                  <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label> {this.props.label} </Form.Label>
                    <Form.Control
                      as={this.props.type}
                      placeholder={this.props.placeholder}
                      value={this.props.name}
                      onChange={this.props.change}
                    />
                  </Form.Group>
                </Form>
              </Col>
            </Row>
          </div>
        );
        break;
      case "file":
        inputElement = (
          <div className="container">
            <Row center="true">
              <Col md={{ span: 8, offset: 2 }}>
                <Form>
                  <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label> {this.props.label} </Form.Label>
                    <Form.File
                      id="custom-file-translate-scss"
                      label="Custom file input"
                      lang="en"
                      custom
                      onChange={this.props.change}
                    />
                  </Form.Group>
                </Form>
              </Col>
            </Row>
          </div>
        );
        break;
      default:
        inputElement = (
          <div className="container">
            <Row center="true">
              <Col md={{ span: 8, offset: 2 }}>
                <Form>
                  <Form.Group controlId="">
                    <Form.Label> {this.props.label} </Form.Label>
                    <Form.Control
                      type={this.props.type}
                      placeholder={this.props.placeholder}
                      value={this.props.name}
                      onChange={this.props.change}
                    />
                  </Form.Group>
                </Form>
              </Col>
            </Row>
          </div>
        );
    }
    return (
      <div>
           <div>{inputElement}</div>
      </div>
    );
  }
}

export default AddToMenu;
