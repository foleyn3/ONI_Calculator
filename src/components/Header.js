import { getQueriesForElement } from '@testing-library/react';
import React, {Component} from 'react';

class Header extends Component {
  render(){
    return (
      <div className="Header">
        <nav>
          <ul>
            <li>Home</li>
            <li>Critters</li>
            <li>Resources</li>
            <li>Heat</li>
          </ul>
        </nav>
      </div>
    );
  }
}
export default Header;
