import React, { useState } from "react";
import "./header.css";
import ai from "../../assets/ai.png";
import people from "../../assets/people.png";

const Header = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  };

  return (
    <div className="gpt3__header section__padding" id="home">
      <div className="gpt3__header-content">
        <h1 className="gradient__text">
          Let’s Build Something amazing with GPT-3 OpenAI
        </h1>
        <p>
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy
          alteration boisterous the attachment. Party we years to order allow
          asked of.
        </p>

        <div className="gpt3__header-content__input">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="your email address"
              value={email}
              name={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button type="submit">get started</button>
          </form>

          <div className="gpt3__header-content__people">
            <img src={people} alt="" />
            <p>1,600 people requested access a visit in last 24 hours</p>
          </div>
        </div>
      </div>
      
      <div className="gpt3__header-image">
        <img src={ai} alt="people" />
      </div>
    </div>
  );
};

export default Header;
