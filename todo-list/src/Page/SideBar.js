// Sidebar.js
import React, { useState } from 'react';
import './sidebar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleLeft,
     faAngleDoubleRight,  faHome, 
     faListAlt,faPlus,
     faSearch,faFileClipboard, faList
     } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames';
 
import { TaskTable } from '../Components/TaskTable';

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  const handleToggleSidebar = () => {
    setCollapsed(!collapsed);
    console.log(collapsed);
  };

  return (
    <>
    <aside className={`sidebar ${collapsed ? 'collapsed' : ''}`}>
      {/* <button onClick={handleToggleSidebar} className="toggle-btn"> */}
      <FontAwesomeIcon icon={faSearch} className="email search"/> <input type="text" placeholder='Search'/>
        {/* <span>{collapsed ? <FontAwesomeIcon icon={faAngleDoubleRight}/> : <FontAwesomeIcon icon={faAngleDoubleLeft}/>}</span> */}
      {/* </button> */}
      <ul className='ul1'>
        {/* Add your sidebar menu items here */}
        <li><FontAwesomeIcon icon={faHome}/> Home</li>
        <li><FontAwesomeIcon icon={faListAlt}/> List</li>
      </ul>
    </aside>
    <header className={classNames('ul2', collapsed&&'ul21')}>
    <button onClick={handleToggleSidebar} className="toggle-btn tglbtn">
        <span>{collapsed ? <FontAwesomeIcon icon={faAngleDoubleRight} className='search'/> : <FontAwesomeIcon icon={faAngleDoubleLeft}/>}</span>
      </button>
      <div className='ulcontain'>
       {/* <ul>
        <li><FontAwesomeIcon icon={faList}/>List</li>
        <li><FontAwesomeIcon icon={faFileClipboard}/>Board</li>
        <li><FontAwesomeIcon icon={faPlus}/>View</li>
       </ul> */}
       <div><FontAwesomeIcon icon={faList}/>List  </div>
       <div><FontAwesomeIcon icon={faFileClipboard}/>Board  </div>
       <div><FontAwesomeIcon icon={faPlus}/>View </div>
       </div>
        </header>
        <TaskTable collapsed={collapsed}/>
        </>
  );
};

export default Sidebar;

