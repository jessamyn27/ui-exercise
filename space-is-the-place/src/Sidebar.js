import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import { Link } from 'react-router-dom';

export default props => {
  return (
    <Menu>
      <a className="menu-item" href="/">
      Table1      </a>

      <a className="menu-item" href="/myfirstspace">
        My First Space
      </a>

      <a className="menu-item" href="/mysecondspace">
        My Second Space
      </a>

      <a className="menu-item" href="/mythirdspace">
        My Third Space
      </a>

    </Menu>
  );
};
