import React from 'react';
import TweetContext from '../TweetContext';

class TweetForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputLength: 0,
            text: '',
            disabled: false,
            display: 'none',
        }
    }
    static contextType = TweetContext;

    updateInputSize(value) {
        this.setState({inputLength: value.length, text: value})
        this.state.inputLength > 140 ? this.setState({disabled: true, display: 'block'}) :
        this.setState({disabled: false, display: 'none'});
    }  
    onSendTweet(event)  {
        event.preventDefault();
        const tweet= {
            key: Date.now(),
            content: this.state.text,
            date: new Date().toISOString(),
            userName: this.props.profileName,
        }
        this.context.onAddTweet(tweet);
        this.setState({ inputLength: 0, text: '' });
    }

    render() {
    return(
        <form className="d-flex border border-light rounded 
                        outline-light w-50 pt-2 mx-auto h-50"
                        onSubmit={(event) => this.onSendTweet(event)}>
            <div className="d-flex flex-column justify-content-between flex-fill">
            <textarea 
            type="text" 
            name="input" 
            className="shadow-none bg-dark text-white text-wrap h-25"
            placeholder="What you have in mind..."
            rows="4"
            maxLength='142'
            style={{outline: "none", resize:"none", overflow: 'auto'}}
            value={this.state.text}
            onChange={(event) => this.updateInputSize(event.target.value)}>
            </textarea>
            <div className="d-flex justify-content-end">
                <div className="warning rounded"            //warning from App.css
                     style={{display: this.state.display}}>
                    The tweet can't contain more then 140 chars.</div>
                    <button 
                    className="btn btn-primary"
                    disabled={this.state.disabled}
                    >Tweet</button>
            </div>
            </div>
        </form>
    );
}
}

export default TweetForm;