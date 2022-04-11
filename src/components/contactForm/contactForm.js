import React from 'react';
import { FormWrap, Labels } from './contactForm.styled';
import PropTypes from 'prop-types';

class ContactForm extends React.Component {
    state = {
        name: '',
        number: '',
    };

    handleDataInput = e => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    };

    addContact = e => {
        e.preventDefault();
        this.props.filterContact.find(
            contact =>
                contact.name.toLowerCase() === this.state.name.toLowerCase()
        )
            ? alert(`${this.state.name} is already in contacts`)
            : this.props.onAdd(this.state);
        this.setState({
            name: '',
            number: '',
        });
    };

    render() {
        return (
            <>
                <FormWrap onSubmit={this.addContact}>
                    <Labels htmlFor="name">
                        Name:
                        <input
                            type="text"
                            value={this.state.name}
                            onChange={this.handleDataInput}
                            name="name"
                            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                            required
                        />
                    </Labels>
                    <Labels htmlFor="number">
                        Phone number:
                        <input
                            type="tel"
                            value={this.state.number}
                            onChange={this.handleDataInput}
                            name="number"
                            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                            required
                        />
                    </Labels>
                    <button type="submit">Add contact</button>
                </FormWrap>
            </>
        );
    }
}

export default ContactForm;

ContactForm.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func,
};
