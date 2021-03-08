import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Searchbar extends Component {
    state = {
        queryValue: ''
    }

    handleSearchQuery = (ev) => {
        this.setState({ queryValue: ev.target.value })
    }

    heandleSendValue = (ev) => {
        ev.preventDefault()
        if (this.state.queryValue !== '') {
            this.props.onSendQuery(this.state.queryValue)
            this.setState({ queryValue: '' })
        }
    }

    render() {
        return (
            <header className="Searchbar">
                <form className="SearchForm">
                    <button type="submit" className="SearchForm-button" onClick={this.heandleSendValue}>
                        <span className="SearchForm-button-label">Search</span>
                    </button>
                    <input value={this.state.queryValue} className="SearchForm-input" type="text"
                        autoComplete="off" autoFocus placeholder="Search images and photos" onChange={this.handleSearchQuery} />
                </form>
            </header>
        )
    }

}

Searchbar.protoType = {
    heandleSendValue: PropTypes.func,
    handleSearchQuery: PropTypes.func
}

export default Searchbar;