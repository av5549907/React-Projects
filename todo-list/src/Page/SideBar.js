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
 
// import { TaskTable } from '../Components/TaskTable';

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  const handleToggleSidebar = () => {
    setCollapsed(!collapsed);
    console.log(collapsed);
  };

  return (
    <>
    <aside className={`sidebar ${collapsed ? 'collapsed' : ''}`}>
      <FontAwesomeIcon icon={faSearch} className="email search"/> <input type="text" placeholder='Search'/>
      <ul className='ul1'>
        <li><FontAwesomeIcon icon={faHome}/> Home</li>
        <li><FontAwesomeIcon icon={faListAlt}/> List</li>
      </ul>
    </aside>
    <header className={classNames('ul2', collapsed&&'ul21')}>
    <button onClick={handleToggleSidebar} className="toggle-btn tglbtn">
        <span>{collapsed ? <FontAwesomeIcon icon={faAngleDoubleRight} className='search'/> : <FontAwesomeIcon icon={faAngleDoubleLeft}/>}</span>
      </button>
      <div className='ulcontain'>
       <div><FontAwesomeIcon icon={faList}/>List  </div>
       <div><FontAwesomeIcon icon={faFileClipboard}/>Board </div>
       <div><FontAwesomeIcon icon={faPlus}/>View </div>
       </div>
        </header>
        {/* <TaskTable collapsed={collapsed}/> */}
        </>
  );
};

export default Sidebar;

