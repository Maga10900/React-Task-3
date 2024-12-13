// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'
// import { BrowserRouter } from 'react-router-dom'

// createRoot(document.getElementById('root')).render(
//     <BrowserRouter>
//         <App />
//     </BrowserRouter>
// )

import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {  RouterProvider, createBrowserRouter } from 'react-router-dom'
import Services from './components/Services/Services.jsx'
import About from './components/Services/About.jsx'
import Contacts from './components/Services/Contacts.jsx'
import BagList from './components/Bag/BagList.jsx'
import Home from './components/Home.jsx'
import ServicePage from './components/ServicePage.jsx'

let router = createBrowserRouter([{
    element:<App/>,
    path:'/',
    children:[
        {
            element:<Services
  
                     />,
            path:'services',
            children:[
                {
                    element:<About/>,
                    path:'about',
                    
                }, {
                    element:<Contacts/>,
                    path:'contacts',
                   
                },
            ]
        },
        {
            element:<BagList  />,
            path:'bag',
        },
        {
            element:<Home/>,
            index: true,
        },
        {
            element:<ServicePage/>,
            path:'service-page/:id',
        }
    ]
}
    
])

createRoot(document.getElementById('root')).render(
    <RouterProvider router={router}/>
)

