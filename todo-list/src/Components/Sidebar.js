import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import { faUserAlt } from '@fortawesome/free-solid-svg-icons';
import { faChartColumn } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';

const SideBar=({children})=>{
    const menu=[

        {
            path:'/',
            name:'Home',
            icon:faHome
        },
        {
            path:'/home',
            name:'Home',
            icon:faHome
        },

         {
            path:'/about',
            name:'About',
            icon:faUserAlt
        },
        {
            path:'/product',
            name:'Product',
            icon:faShoppingBag
        },

        {
            path:'/analytics',
            name:'Analytics',
            icon:faChartColumn
        }
    ]

    return (
        <div className='aside'>
           {/* <h1>This is Side Bar</h1> */}
           <div className='sidebar'>
           <div className="top_section">
               <h1 className='logo'>Logo</h1>
               <div className='bars'>
                <FontAwesomeIcon icon={faBars}/>
               </div>
           </div>
             {
                menu.map((item,index)=>(
                    <NavLink to={item.path} key={index} className="link" activeclassName="active">
                        <div className='link_text'>{item.name}</div>
                        <div className='icon'>{item.icon}</div>

                    </NavLink>
                ))
             }

           </div>
           <main>{children}</main>
        </div>
    );
}
export default SideBar;