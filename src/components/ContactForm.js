import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

class ContactForm extends Component {
  state = {
    name: "",
    surname: "",
    company: "",
    email: ""
  };

  handleChange = e => {
    const name = e.target.name;

    this.setState({
      [name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
  };

  render() {
    return (
      <>
        <div className="container background--blue">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-xs-12 title">
              <h2>Skontaktuj się z nami</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 col-md-12 col-xs-12">
              <div className="text-center">
                <p>
                  <strong>Jesteś zainteresowany współpracą?</strong>
                </p>
                <p>Napisz do nas</p>
              </div>
              <div className="form" onSubmit={this.handleSubmit}>
                <Form>
                  <div className="row">
                    <div className="col-lg-6 col-xs-12">
                      <Form.Control
                        placeholder="Imię"
                        type="text"
                        name="name"
                        value={this.state.name}
                        onChange={this.handleChange}
                      />
                      <div className="error">{this.state.error_name}</div>
                    </div>
                    <div className="col-lg-6 col-xs-12">
                      <Form.Control
                        placeholder="Nazwisko"
                        type="text"
                        name="surname"
                        value={this.state.surname}
                        onChange={this.handleChange}
                      />
                      <div className="error">{this.state.error_surname}</div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-12 col-xs-12">
                      <Form.Control
                        placeholder="Firma"
                        type="text"
                        name="company"
                        value={this.state.company}
                        onChange={this.handleChange}
                      />
                      <div className="error">{this.state.error_company}</div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-12 col-xs-12">
                      <Form.Control
                        placeholder="Adres e-mail"
                        type="email"
                        name="email"
                        value={this.state.email}
                        onChange={this.handleChange}
                      />
                      <div className="error">{this.state.error_email}</div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-12 col-xs-12">
                      <Form.Control
                        placeholder="Napisz kilka słów o działaniu..."
                        name="message"
                        type="textarea"
                        value={this.state.message}
                        onChange={this.handleChange}
                      />
                      <div className="error">{this.state.error_message}</div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-12 col-xs-12 text-center">
                      <Button variant="light" type="submit">
                        Wyślij
                      </Button>
                    </div>
                  </div>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default ContactForm;
