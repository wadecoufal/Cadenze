import React from 'react';
import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions';

const mapDispatchToProps = dispatch => ({
  closeModal: () => dispatch(closeModal())
});

class PlaylistForm extends React.Component {

  render() {
    return (
      <div>
        This is the PlaylistForm component
        <button onClick={this.props.closeModal}>Close the modal Wade!</button>
      </div>
    )
  }

}

export default connect(null, mapDispatchToProps)(PlaylistForm);
