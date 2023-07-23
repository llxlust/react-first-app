import { useState } from "react";

function YourChoice() {
  const [point, setPoint] = useState("");
  const inputArr = ["input1", "input2", "input3"];
  const [choiceArr, setChoicerr] = useState(inputArr);

  function onChangeHandler(e, index) {

    const newChoice = [...choiceArr];
    newChoice[index] = e.target.value;
    setChoicerr(newChoice)
    console.log(newChoice)
  }

  function onClickHandler(index) {
    if (index === 0) {
      setPoint("input1");
    } else if (index === 1) {
      setPoint("input2");
    } else if (index === 2) {
      setPoint("input3");
    }
  }
  function pointHandler(point){
    if(point === "input1"){
        return choiceArr[0];
    }
    if(point === "input2"){
        return choiceArr[1];
    }
    if(point === "input3"){
        return choiceArr[2];
    }
  }
  return (
    <>
      <h1>Worshop 001</h1>
      {choiceArr.map((value,index) => {
        return (
          <div>
            <input onChange={(e) => onChangeHandler(e,index)}></input>
            <button onClick={() => onClickHandler(index)}>Choose</button>
          </div>
        );
      })}
      <div>You picked {pointHandler(point)}. </div>
    </>
  );
}
export default YourChoice;
