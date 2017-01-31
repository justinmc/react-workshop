import React from 'react';
import './contact.css';

/**
 * Here's a simple, totally static React component
 */
class Contact extends React.Component {
  /**
   * The render method is used internally by React to get the html
   * representation of this component.  It should return JSX.
   */
  render() {
    /**
     * This looks like normal html, but there are a few small differences.  The
     * only one to note right now is that "class" is now "className".  The
     * reason is that "class" is a reserved word in javascript, so using it in
     * a js file would break parsing!
     */
    return (
      <div className="contact">
        <div className="title">
          <div className="picture" />
          <div className="name">John Doe</div>
        </div>
        <div className="description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </div>
        <div className="footer">created: January 1st, 1970</div>
      </div>
    );
  }
}

export default Contact;
