import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// import { RouterProvider } from 'react-router-dom'
import Program from './components/Program/Program.jsx'
// import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import About from './components/About/About.jsx'
import Campus from './components/Campus/Campus.jsx'
import Contact from './components/Contact/Contact.jsx'

// const router = createBrowserRouter([{
//   path : "/" , element :   <App /> , children : [{
//     path : "/program" ,element : <Program/>
//   },{
//     path : "/about" , element : <About/>
//   },{
//     path : "/campus" , element : <Campus/>
//   },{
//     path : "/contact" , element:<Contact/>
//   }]
// }])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <RouterProvider router={router}/> */}
    <App/>
  </React.StrictMode>,
)
