import React  from 'react';

function Keypad  ({send})  {
    const  ids =
    [
	[ "seven",     7,  {type: "number",   data: 7}],
        [ "eight",     8,  {type: "number",   data: 8}],
        [ "nine" ,     9,  {type: "number",   data: 9}],
        [ "multiply", "X", {type: "operator", data:"*"}],
        [ "add",      "+", {type: "operator", data:"+"}],
       	[ "four",      4,  {type: "number",   data: 4}],
        [ "five",      5,  {type: "number",   data: 5}],
        [ "six",       6,  {type: "number",   data: 6}],
        [ "divide",   "/", {type: "operator", data: "/"}],
        [ "subtract", "-", {type: "minus" ,   data:"-"}],
       	[ "one",       1,  {type: "number",   data: 1}],
        [ "two",       2,  {type: "number",   data: 2}],
        [ "three",     3,  {type: "number",   data: 3}],
        [ "zero",      0,  {type: "zero",     data: 0}],
        [ "decimal",  ".", {type: "dot",      data:"."}],
       	["equals",    "=", {type: "equals",   data: "="}],
        ["ce",        "ce", {type: "ce"}]
    ];


    let buttons = ids.map( ele  =>  {
	let style = (ele[0] === "equals")
	    ? "keypad__key  keypad__key--big"
	    : "keypad__key";

	  return  <button
               	key={`${ele[0]}-id` }
              	className={style}
                id={ele[0]}
	        onClick = {() => send( ele[2])}
	      >
	    {ele[1]}
	   </button>;
    });

    return buttons;
};



export default Keypad;
