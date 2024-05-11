import { useState } from "react";

export const main = () => {
  const [isActive, toggledd] = useState(false);
  const toggleDropdown = () => {
    toggledd(!isActive);
  };

  return (
    <div className="mainContainer">
      <div className="dropdown">
        <button
          className="btn chatgptbutton dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
          onClick={toggleDropdown}
        >
          ChatGPT 3.5
        </button>
        {isActive && <div className="dropdownItem"></div>}
      </div>
      <div className="centerContainer">
        <div className="centerText">
          <img
            className="gptlogocenter"
            src="https://files.raycast.com/g7iom6r6tfgmq9iqm3l0ih4rq6lw"
          ></img>
          <span>How can I help you today?</span>
        </div>

        <div className="footerButtons">
          <button className="btn suggestButton" type="button" aria-expanded="false">
            <span className="ideaMain">Give me ideas</span>
            <span className="ideaSub">for what to do with my kids' art</span>
          </button>
          <button className="btn suggestButton" type="button" aria-expanded="false">
            <span className="ideaMain">Write a text</span>
            <span className="ideaSub">asking a friend to be my plus-one at a ...</span>
          </button>
          <button className="btn suggestButton" type="button" aria-expanded="false">
            <span className="ideaMain">Make me a personal webpage</span>
            <span className="ideaSub">after asking me three questions</span>
          </button>
          <button className="btn suggestButton" type="button" aria-expanded="false">
            <span className="ideaMain">Tell me a fun fact</span>
            <span className="ideaSub">about the roman empire</span>
          </button>

          <input type="text" className="textarea" placeholder="Message ChatGPT"></input>
        </div>
        <div className="footer">
          <span className="warningMsg">ChatGPT can make mistakes. Check important info.</span>
        </div>
      </div>
      
    </div>
  );
};
