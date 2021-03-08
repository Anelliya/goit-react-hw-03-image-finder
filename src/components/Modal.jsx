import { Component } from "react";
import PropTypes from "prop-types";


class Modal extends Component {

    componentDidMount() {
        window.addEventListener('keydown', this.handleEscClick)
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleEscClick)

    }

    handleEscClick = (ev) => {
        if (ev.code === "Escape") {
            this.props.toggleModal()
        }
    }

    handleOverlayClick = (ev) => {
        if (ev.currentTarget === ev.target) {
            this.props.toggleModal()
        }
    }

    render() {
        return (
            <div className="Overlay" onClick={this.handleOverlayClick}>
                <div className="Modal">
                    {this.props.children}
                </div>
            </div>
        )
    }
}

Modal.protoType = {
    handleEscClick: PropTypes.func,
    toggleModal: PropTypes.func
}


export default Modal;