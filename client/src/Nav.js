import React from 'react'
import {Link} from 'react-router-dom'

function Nav() {
  return (
    <div>
        <ul className='nav-ul'>
            <li><Link to='/'> Home</Link></li>
            <li><Link to='/add'> Add Product</Link></li>
            <li><Link to='/update'> Update Product</Link></li>
            <li><Link to='/logout'> logout</Link></li>
            <li><Link to='/profile'> Profile</Link></li>
        </ul>
    </div>
  )
}

export default Nav