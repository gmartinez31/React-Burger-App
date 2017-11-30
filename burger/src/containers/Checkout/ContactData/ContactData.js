import React, { Component } from 'react';

import Button from '../../../components/UI/Button/Button';
import Spinner from '../../../components/UI/Spinner/Spinner';
import classes from './ContactData.css';
import axios from '../../../../src/axiosorders';

class ContactData extends Component {
    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: ''
        }
    }

    orderHandler = (event) => {
        event.preventDefault();
        this.setState({loading: true});
        const orders = {
            ingredients: this.props.ingredients,
            price: this.props.price,
            customer: {
                name: 'Goose',
                address: {
                    street: '123 Main St.',
                    zipCode: '11111',
                    country: 'Atlantis'
                },
                emailAddress: 'test@test.com',
            },
            deliveryMethod: 'fastest'
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
                <input className={classes.Input} type="text" name='name' placeholder='Name' />
                <input className={classes.Input} type="email" name='email' placeholder='example@example.com' />
                <input className={classes.Input} type="text" name='street' placeholder='123 Main St.' />
                <input className={classes.Input} type="text" name='zipcode' placeholder='Zipcode' />
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