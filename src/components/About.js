import React from 'react';
// import user from '../data/user';
import Links from './Links';

function About(props) {
  // console.log(props)
  return (
    <div id="about">
      <h2>About Me</h2>
      {/* {props.bio} === '' ? null : {props.bio} */}
      {/* {props.bio !== '' ? <p>{props.bio}</p> : null} */}
      {props.bio && props.bio.length > 1 ? <p>{props.bio}</p> : null}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      {/* add your <Links /> component here */}
      <Links />
    </div>
  );
}

export default About;
