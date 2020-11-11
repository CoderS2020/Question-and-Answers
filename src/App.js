import React, { useState } from 'react';
import questions from './data';
import data from './data';
import SingleQuestion from './Question';
function App() {
  const [questions,setquestions]=useState(data);

  return <main className='container'>
    <h3>Questions and answers</h3>
    <section className='info'>
      {
        questions.map((question)=>{
          return <SingleQuestion key={question.id} {...question}/>
        })
      }
    </section>
    
  </main>;
}

export default App;