// function createBtn(x){
// const btnId = document.getElementById("btn");
// const btn = document.createElement("button");
// btn.textContent = x;
// btnId.children.className.add("border mx-2 py-1 px-4 border-black rounded-full hover:bg-black");
// }
// export default function CardIn(props){
//     return (
//     <>
//     <div className="col-span-5 h-44rem flex flex-col gap-4">
//     <h1 className="col-span-5 text-xl"><i className="fa-solid fa-2xs fa-circle text-white"/> {props.title}</h1>
//     <img src={props.image} className="rounded-2xl transition-transform hover:scale-95"/>
//     <div id="btn">
//         {createBtn(props.btns)}
//         {/* <button className="font-sans border mx-2 py-1 px-4 border-black rounded-full hover:bg-black">{props.btn1}</button>
//         <button className="font-sans border mx-2 py-1 px-4 border-black rounded-full hover:bg-black">{props.btn2}</button>
//         <button className="font-sans border mx-2 py-1 px-4 border-black rounded-full hover:bg-black">{props.btn3}</button>
//         <button className="font-sans border mx-2 py-1 px-4 border-black rounded-full hover:bg-black">{props.btn4}</button> */}
//     </div>
//     </div>
//     </>
//     );
// }
import React from 'react';

function createBtn(x) {
  return (
    <button className="font-sans border mx-2 py-1 px-4 border-black rounded-full hover:bg-black">
      {x}
    </button>
  );
}
export default function CardIn(props) {
    return (
      <div className="col-span-5 h-44rem flex flex-col gap-4">
        <h1 className="col-span-5 text-xl">
          <i className="fa-solid fa-2xs fa-circle text-white" /> {props.title}
        </h1>
        <img src={props.image} className="rounded-2xl transition-transform hover:scale-95" />
        <div>
          {Array.isArray(props.btns) && props.btns.map((btn, index) => (
            <React.Fragment key={index}>{createBtn(btn)}</React.Fragment>
          ))}
        </div>
      </div>
    );
  }
