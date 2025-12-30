import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './Header';
import Body from './Body';


const Index=()=>{

  return(
     <div id='Index'>
          <div id='container'>
             <Header/>
             <Body/>
          </div>
     </div>
  );
}

const root=ReactDOM.createRoot(document.getElementById('root'));

root.render(<Index/>)

