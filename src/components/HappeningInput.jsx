import React from "react";

function HappeningInput(props){
  return (
    <div>
        <style jsx>{`
          div {
            background-color: lightblue;
          }

          input {
            border-color: lightgray;
          }
        `}</style>
        <img src="./redbox.png" />
      <form>
        <input type="search" name="happening-search" value="What's happening?" />
      </form>
    </div>
  );
}

export default HappeningInput;
