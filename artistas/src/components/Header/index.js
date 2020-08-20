import {Link} from 'react-router-dom';
import { useEffect, useState } from 'react';

const Header = () => {
    const sayHi='Hi'
    const name='Tuxon'

    return(

        <header className="App-header">
      <div>{`${sayHi} ${name}! `}</div>  
        <div>
          <Link to="/">Home</Link>
          <select name="" id=""></select>
        </div>
      </header>
    )

}

export default Header