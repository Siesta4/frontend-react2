import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import Test from './components/Test';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <table>
    <tr>
      <td><Test name='Ali' age={'333'}/></td>
      <td><Test name='Maga' age={'44'}/></td>
    </tr>
  </table>
);



