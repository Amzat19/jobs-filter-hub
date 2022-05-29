import {ReactComponent as MobileHeader} from "./images/bg-header-mobile.svg"; 
import {ReactComponent as DeskTopHeader} from "./images/bg-header-desktop.svg"; 

const Header = () => {
     return ( 
        <div>
        <MobileHeader className='bg-dDarkCyan  w-screen md:hidden'/>
        <DeskTopHeader className='bg-dDarkCyan w-0 h-0 md:w-screen md:h-40'/>
      </div>
     );
};

export default Header;