
import './navbar.scss'

export const Navbar = () => {
  
  return (
    <nav>
        <div className='left'>
            <a href='/' className='logo'>
                <div className='spand'>
                <span>Roxiler</span>
                <span>System</span>
                
                </div>
            </a>
            <a href='/'>Home</a>
            <a href='/data'>Data</a>
            <a href='./Sales'>Sales</a>
            <a href='./Statistics'>Statistics</a>
        </div>
        
          
    </nav>
  )
}
