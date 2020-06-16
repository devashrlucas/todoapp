import React from 'react';
import '../styles/Header.css';

const Header = (props) => {
  return (
    <div>
      <h1> You have added {props.number} Todos. </h1>
    </div>
  );
};

export default Header;
