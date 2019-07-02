import React from "react";
import HappeningInput from "./HappeningInput";
import Happening from "./Happening";

var masterHappeningList = [
  {
    name: 'Lorem ipsum',
    image: "./user-default",
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    footer: ''
  },
  {
    name: 'Lorem ipsum',
    image: "./user-default",
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    footer: 'Lorem ipsum'
  },
  {
    name: 'Lorem ipsum',
    image: "./user-default",
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    footer: ''
  },
  {
    name: 'Lorem ipsum',
    image: "./user-default",
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    footer: ''
  },
  {
    name: 'Lorem ipsum',
    image: "./user-default",
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    footer: ''
  }
];

function HappeningList(){
  return (
    <div>
      <HappeningInput/>
      <hr/>
      {masterHappeningList.map((happening, index) =>
        <Happening name={happening.name}
          image={happening.image}
          content={happening.content}
          footer={happening.footer}
          key={index}/>
        )}
    </div>
  );
}

export default HappeningList;
