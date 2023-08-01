import { faBroadcastTower, faFileClipboard, faList } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Header=({collapsed})=>{
    return (
        <header className='ul2'>
     <ul>
        <li><FontAwesomeIcon icon={faList}/>List</li>
        <li><FontAwesomeIcon icon={faFileClipboard}/>Board</li>
     </ul>

        </header>
    )
}
export default Header;