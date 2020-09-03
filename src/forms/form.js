import React, { Component } from 'react';
// import Input from './components/ui/input/input';
import AddMenu from '../components/AddMenu/AddMenu'
import axios from 'axios'
import { Form, Button, Row, Col } from "react-bootstrap";


class MyForm extends Component {
    state = {
        registerForm: {
            Foodname: {
                label: 'user name',
                elementType: 'input',
                value: '',
                elementConfig: {
                    placeholder: 'Name',
                    type: 'text'
                },
                validation: {
                    required: true,
                },
                valid: true
            },


            Price: {
                label: 'Price',

                elementType: 'input',
                value: '',
                elementConfig: {
                    placeholder: 'Last Name'
                },
                validation: {
                    required: true
                },
                valid: true
            },

            email: {
                label: 'email',
                elementType: 'Email',
                value: '',
                elementConfig: {
                    placeholder: 'email'
                },
                validation: {
                    required: true
                },
                valid: true
            },

            description: {
                label: 'description',

                elementType: 'textarea',
                value: '',
                elementConfig: {
                    placeholder: 'Description'
                },
                validation: {
                    required: true
                },
                valid: true
            }
        }
    }


    validate = (value, rules) => {
        let isValid = false;
        if (rules.required) {
            // if (value.trim() !== '') {
            //     isValid = true;
            // } else {
            //     isValid = false;
            // }
            isValid = value.trim() !== '';
        }
        return isValid;

    }

    inputChangedEventHandler = (event, inputId) => {
        console.log(inputId);
        const copyOfRegisterForm = { ...this.state.registerForm };
        const copyOfInputElement = { ...copyOfRegisterForm[inputId] };
        copyOfInputElement.value = event.target.value;
        copyOfInputElement.valid = this.validate(event.target.value,
            copyOfInputElement.validation);
        copyOfRegisterForm[inputId] = copyOfInputElement;
        this.setState({ registerForm: copyOfRegisterForm });

    }

    // 
    // postMenuHandler = (e) => {

    //     const newMenu = { ...this.state };

    //     axios.post("/posts/", newMenu)
    //         .then((res) => {
    //             console.log(res)

    //             // this.setState({ newMenu: res.data });
    //             // console.log(newMenu)
    //         })
    //     e.preventDefault()
    // }
    // 
    formSubmitEventHandler = (event) => {
        event.preventDefault();
        const formData = {};
        let isFormValid = false;
        for (let key in this.state.registerForm) {
            formData[key] = this.state.registerForm[key].value;
            isFormValid = isFormValid && this.state.registerForm[key].valid;
        }
        // console.log(formData)
        axios.post("/posts/", formData)
            .then((res) => {
                console.log(res)

            })
        // if (isFormValid) {

        // } else {
        //     //error
        // }
        //send request 
    }


    render() {
        //convert state to array
        const formElementArray = [];
        for (let key in this.state.registerForm) {
            formElementArray.push({
                id: key,
                config: this.state.registerForm[key]
            })
        }
        console.log(formElementArray)

        /////////////////////////////
        let form = (
            <div className="container">

                < div >
                    < Row center >
                        <Col md={{ span: 8, offset: 2 }}>
                            <Form onSubmit={this.formSubmitEventHandler}>
                                {
                                    formElementArray.map(item => {
                                        return (
                                            <AddMenu>
                                                key={item.id}
                                                <Form.Group controlId="">
                                                    <Form.Label> label={item.config.label} </Form.Label>
                                                    <Form.Control lementType={item.config.elementType} elementConfig={item.config.elementConfig} value={item.config.value} changed={(event) => this.inputChangedEventHandler(event, item.id)} />
                                                </Form.Group>

                                            </AddMenu>
                                        )
                                    })
                                }
                                <Button variant="primary" type="submit" >
                                    Submit
                             </Button>
                            </Form >

                        </Col >


                        {/* < button > Register</button >
                        <button onClick={(event) => { this.formSubmitEventHandler(event) }}> Register</button> */}
                    </Row >
                </div>
            </div>
        )
        /////////////////////////////

        {/* let form = (
            <form onSubmit={this.formSubmitEventHandler}>
                {
                    formElementArray.map(item => {
                        return (
                            <AddMenu
                                key={item.id}
                                label={item.config.label}
                                elementType={item.config.elementType}
                                elementConfig={item.config.elementConfig}
                                value={item.config.value}
                                changed={(event) => this.inputChangedEventHandler(event, item.id)}
                            />
                        )
                    })
                }

                < button > Register</button >
                <button onClick={(event) => { this.formSubmitEventHandler(event) }}> Register</button>

            </form > */}
        // )
        return (
            <div className="App" >

                {form}
                {/* <Input label='last Name'
                    elementType='input'
                />
                <Input label='description' />
                <textarea />*/}
                {/* <button> Register</button> */}

            </div>
        );


    }

}




export default MyForm;
