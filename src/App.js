import Questions from './Questions';
import { useState } from 'react';
import Timer from './Timer';

function App() {

  let [currentindex, setcurrentindex] = useState(0)

  let [score, setscore] = useState(0)
  let [showres, setshowres] = useState(false)

  let obj = [
    {
      "Quiz": "HTML is the standard ____language for creating Web pages",
      "Options": [
        "scripting",
        "markup",
        "programming",
        "styling"
      ],
      "Correct_ans": "markup"
    },
    {
      "Quiz": "Which HTML element is used to define description data?",
      "Options": [
        "li",
        "Ol",
        "dl",
        "dd"
      ],
      "Correct_ans": "dd"
    },
    {
      "Quiz": "Which of the following element is responsible for making the text bold in HTML?",
      "Options": [
        "<pre>",
        "<a>",
        "<b>",
        "<br>"
      ],
      "Correct_ans": "<b>"
    },
    {
      "Quiz": "How to create an ordered list (a list with the list items in numbers) in HTML?",
      "Options": [
        "<ul>",
        "<ol>",
        "<dl>",
        "<li>"
      ],
      "Correct_ans": "<ol>"
    },

  ]

  const callback = (data) => {
    console.log(data)
    if (data == obj[currentindex]["Correct_ans"]) {
      setscore(++score)

    }
    if (currentindex >= obj.length - 1) {
      setshowres(true)

    }
    else {
      setcurrentindex(++currentindex)

    }
  }
  const close=(cdata)=>{
    console.log(cdata)
  }
  return (

    <>
      {/* {
      obj.map((v,i)=>{
        return(
          <h1>Question No : {i+1}</h1>
        )
      })
    } */}

      {
        showres ?
        <>
          <div className='text-center pt-2 pr-auto pl-auto m-5 bg-light shadow rounded pb-5 h-15 ' >
           <h1>Score : {score}</h1>
           <h1>Total Question:{obj.length}</h1>
           <h1>Correct Answer:{score}</h1>
           <h1>{score>=3 ?"You Win" : "You lose"}</h1>
           
          </div>
          </>
          :
          <>
          <Questions
            question={obj[currentindex]["Quiz"]}
            options={obj[currentindex]["Options"]}
            i={currentindex}
            callback={callback} //function
            queslength={obj.length}
          />
        </>
      }


    </>

  );
}

export default App;
