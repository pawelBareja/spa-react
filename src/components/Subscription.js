import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

class Subscription extends Component {
  state = {
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
        <div className="container background--blue subscription">
          <div className="row">


            <div className="col-lg-6 col-md-6 col-xs-12 subscription__text">
              <div className="text-left">
                <p>
                  Jeśli jesteś zainteresowany współpracą?<strong> Napisz</strong> do Nas!
                </p>
              </div>
            </div>


            <div className="col-lg-6 col-md-6 col-xs-12">
              <div className="form " onSubmit={this.handleSubmit}>
                <Form>

                  <div className="row padding-y_30">
                    <div className="col-lg-6 col-md-6 col-xs-12 text-center">
                      <div className="subscription__email">
                        <Form.Control
                          placeholder="Twój adres e-mail.."
                          type="email"
                          name="email"
                          value={this.state.email}
                          onChange={this.handleChange}
                        />
                        <div className="error">{this.state.error_email}</div>
                      </div>
                    </div>

                    <div className="col-lg-6 col-md-6 col-xs-12">
                      <div className="ubscription__submit">
                        <Button variant="light" type="submit">
                          Wyślij
                      </Button>
                      </div>
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

export default Subscription;
