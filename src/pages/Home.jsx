import "../App.css";
import React, { Component } from "react";
import { Post } from "../components/Post";

const styles = {
  container: {
    maxWidth: 800,
    margin: 'auto',
    overflow: 'auto'
  }
}

const posts = [
  { 
    title: 'Post Title',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec facilisis ultrices erat, in pharetra quam blandit in. Duis porta eu odio in bibendum. Nullam nec sapien ex. Suspendisse facilisis id dui quis hendrerit. Integer sollicitudin urna luctus, vulputate dolor sollicitudin, imperdiet leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec facilisis ultrices erat, in pharetra quam blandit in. Duis porta eu odio in bibendum. Nullam nec sapien ex. Suspendisse facilisis id dui quis hendrerit. Integer sollicitudin urna luctus, vulputate dolor sollicitudin, imperdiet leo.',
    image: 'https://immaculateheartschool.org/wp-content/uploads/2019/03/BAM.jpg'
  },
  { 
    title: 'Subject',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: 'https://immaculateheartschool.org/wp-content/uploads/2019/03/BAM.jpg'
  },
  { 
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec facilisis ultrices erat, in pharetra quam blandit in. Duis porta eu odio in bibendum. Nullam nec sapien ex. Suspendisse facilisis id dui quis hendrerit. Integer sollicitudin urna luctus, vulputate dolor sollicitudin, imperdiet leo.',
    image: 'https://immaculateheartschool.org/wp-content/uploads/2019/03/BAM.jpg'
  },
  { 
    title: 'Exciting News!',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec facilisis ultrices erat, in pharetra quam blandit in. Duis porta eu odio in bibendum. Nullam nec sapien ex. Suspendisse facilisis id dui quis hendrerit. Integer sollicitudin urna luctus, vulputate dolor sollicitudin, imperdiet leo.',
    image: 'https://immaculateheartschool.org/wp-content/uploads/2019/03/BAM.jpg'
  },
  { 
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec facilisis ultrices erat, in pharetra quam blandit in. Duis porta eu odio in bibendum. Nullam nec sapien ex. Suspendisse facilisis id dui quis hendrerit. Integer sollicitudin urna luctus, vulputate dolor sollicitudin, imperdiet leo.',
    image: 'https://immaculateheartschool.org/wp-content/uploads/2019/03/BAM.jpg'
  },
  { 
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec facilisis ultrices erat, in pharetra quam blandit in. Duis porta eu odio in bibendum. Nullam nec sapien ex. Suspendisse facilisis id dui quis hendrerit. Integer sollicitudin urna luctus, vulputate dolor sollicitudin, imperdiet leo.',
    image: 'https://immaculateheartschool.org/wp-content/uploads/2019/03/BAM.jpg'
  },
]

export class Home extends Component {

  render() {
    return (
      <div style={styles.container}>
        {posts.map((post, i) => (<Post key={i} post={post} />)) }
      </div>
    );
  }
}
