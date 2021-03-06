import React, { Component } from 'react';


// Redux dependencies
import { connect } from 'react-redux';
import mapReduxStateToProps from '../../modules/mapReduxStateToProps';

class Comments extends Component {
        constructor(props){
            super(props)
            this.state = {
                comments: '',
            }
        }
    
        handleFieldChange = (event) => {
             this.setState({
                
                    comments: event.target.value
            });
        }
    
    
        submitComment = (event) => {
            this.props.dispatch({
                type: 'ADD_COMMENT',
                payload: this.state.comments,
            });
            // navigate to the Review page after checkout
            this.props.history.push('/review');
        }
    

    render() {
        return (
            <div>
            <h2>Any Comments you want to leave?</h2>
            <p>
            Comments
            </p>
            <input onChange={this.handleFieldChange} type="text" />
            <button onClick={this.submitComment}>NEXT</button>
        </div>
        )
    }
}

export default connect(mapReduxStateToProps)(Comments);