import React from 'react';


export default function Logo(props) {
  return (
    <div className="filter-icon">
      <img src={props.image} alt="filter" />
       <p> {props.text}</p>
    </div>
  );
}
