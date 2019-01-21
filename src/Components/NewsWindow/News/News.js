import React, { Component } from 'react';
import './News.css'
import News_Delete from './News_Delete/News_Delete';


export default class News extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editting: false,
            text: this.props.text
        };

        this.handleChange = this.handleChange.bind(this);
        this.edit = this.edit.bind(this);
    }

    handleChange(event) {
        this.setState({ text: event.target.value });
        console.log(this.state.text);
    }
    edit(event) {

        const { text } = this.state;
        const { id, edit } = this.props;
        if (event.key === "Enter" && text.length !== 0) {
            console.log("Edit Called")
            edit(id, text);
            console.log(this.state);
            this.setState({ editting: false});
        }
    }

    render() {
        const { id, text, edit, remove,person } = this.props;
        const { editting } = this.state;
        return (
            <div id="newsContainer">
                <span className="newsAuthor">{person}</span>
                <span className="newsContainer">{
                    editting
                        ?

                        <textarea maxLength="100" className="News_input" value={this.state.text} onChange={this.handleChange} onKeyPress={this.edit} />

                        :
                        <span className="News_text">{text}</span>
                }</span>
                
                <span className="News_edit" onClick={() => this.setState({ editting: !this.state.editting, text })}><img src="http://iconsetc.com/icons-watermarks/simple-gray/bfa/bfa_edit/bfa_edit_simple-gray_512x512.png"/></span>
                <News_Delete remove={remove} id={id}/>
                
            </div>
        )
    }
}