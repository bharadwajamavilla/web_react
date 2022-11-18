import './App.css';
// import React, {Component} from 'react';
import Test_1 from './Test_1'
import Test_2 from './Test_2';
import Test_3 from './Test_3';
import Test_4 from './Test_4';
import Test_5 from './Test_5';
// import Test_6 from './Test_6';
import Test_7 from './Test_7';
import Test_9 from './Test_9';
// import Test_8 from './Test_8';




var subject_name = "React" // this is for Test_three

function App() {
  return (
    <div>
      <Test_1 />
      <Test_2 />
      <Test_3 subject_name = {subject_name} color = "dodgerblue" text = "Web Technologies" />
      <Test_4 />
      <Test_5 />
      {/* <Test_6 /> */}
      <Test_7 />
      {/* <Test_8 /> */}
      <Test_9 />



    </div>
  );
}

export default App;
