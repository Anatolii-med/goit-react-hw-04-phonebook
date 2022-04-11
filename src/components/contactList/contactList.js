import React from 'react';
import { Elements } from './contactList.styled';
import PropTypes from 'prop-types';

class ContactList extends React.Component {
    state = {};

    render() {
        return this.props.contList.map(({ id, name, number }) => {
            return (
                <Elements key={id}>
                    {name}:{number}
                    <button onClick={() => this.props.delete(id)}>
                        Delete
                    </button>
                </Elements>
            );
        });
    }
}

export default ContactList;

ContactList.propTypes = {
    key: PropTypes.string,
    onClick: PropTypes.func,
};
