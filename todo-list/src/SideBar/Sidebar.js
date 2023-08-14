import './sidebar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {   faHome, 
     faSearch
     } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

const Sidebar = (props) => {
  const {collapsedbtn}=props;
  console.log("collapsed sidebar : "+collapsedbtn)
  return (
    <aside className={classNames('sidebar',!collapsedbtn&&'aside')}>
      <div>
      <FontAwesomeIcon icon={faSearch} className="search"/> <input type="text" placeholder='Search'/>
      </div>
        <div className='menu'>
        <Link to={'/'}><FontAwesomeIcon icon={faHome}/>{' '}Home</Link>{' | '}
        </div>
    </aside>
  );
};

export default Sidebar;

