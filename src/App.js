import React from 'react';
import './App.less';

const App = () => {
  const nameList = ['muli', 'yuhui', 'xiaoxin'];
  return (
    <div className="App">
      {nameList.map(key => (
        <p key={key}>
          {`Hello,${key},welcome to study`}
        </p>
      ))}
    </div>
  );
};


export default App;
