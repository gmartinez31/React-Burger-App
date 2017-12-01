import React, { Component } from 'react';

import Button from '../../../components/UI/Button/Button';
import Spinner from '../../../components/UI/Spinner/Spinner';
import classes from './ContactData.css';
import axios from '../../../../src/axiosorders';
import Input from '../../../components/UI/Input/Input';

class ContactData extends Component {
    state = {
        orderForm: {
            name: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Full Name'
                },
                value: ''
            },
            street: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Street'
                },
                value: ''
            },
            zipCode: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'zipcode'
                },
                value: ''
            },
            country: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'country'
                },
                value: ''
            },
            emailAddress: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'email@address.com'
                },
                value: ''
            },
            deliveryMethod: {
                elementType: 'select',
                elementConfig: {
                    options: [
                        {value: 'fastest',
                        displayValue: 'Fastest'},
                        {value: 'cheapest',
                        displayValue: 'Cheapest'}
                    ]
                },
                value: ''
            }
        },
        loading: false
    }

    orderHandler = (event) => {
        event.preventDefault();
        this.setState({loading: true});
        const orders = {
            ingredients: this.props.ingredients,
            price: this.props.price
        }
        axios.post('/orders.json', orders)
            .then(response => {
                this.setState({loading: false});
                this.props.history.push('/');
            })
            .catch(error => {
                this.setState({ loading: false});
            })

    }

    render() {
        let form = (
            <form action="">
                <Input inputtype='input' type="text" name='name' placeholder='Name' />
                <Input inputtype='input' type="email" name='email' placeholder='example@example.com' />
                <Input inputtype='input' type="text" name='street' placeholder='123 Main St.' />
                <Input inputtype='input' type="text" name='zipcode' placeholder='Zipcode' />
                <Button btnType='Success' clicked={this.orderHandler}>ORDER</Button>
            </form>
        );
        if (this.state.loading) {
            form = <Spinner />
        }
        return(
            <div className={classes.ContactData}>
                <h4>Please Enter Your Contact Information</h4>
                {form}
            </div>
        )
    }

}

export default ContactData;