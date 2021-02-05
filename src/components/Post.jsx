import React, { Component } from 'react';

const styles = {
    container: {
        display: 'grid',
        gridTemplateColumns: '100px 1fr',
        margin: 24,
        padding: 16,
        alignItems: 'center',
        backgroundColor: 'white',
        border: '1px solid #d8d8d8',
        boxShadow: '0px 12px 18px -6px rgb(0 0 0 / 30%)'
    },
    image: {
        width: 100,
        borderRadius: '50%',
    },
    text: {
        marginLeft: 16
    },
    date: {
        fontSize: 12,
        color: 'dimgray',
        margin: 0
        // textAlign: 'right'
    }
}

export class Post extends Component {

    constructor(props) {
        super(props);
        this.state = {post: this.props.post};
    }

    render() {
      return (
        <div style={styles.container}>
            <img style={styles.image} src={this.state.post.image} />
            <div style={styles.text}>
                <h4>{this.state.post.title}</h4>
                <p style={styles.date}>Feb 1, 2021</p>
                <p>{this.state.post.text}</p>
                
            </div>
            
        </div>
      );
    }
  }
  