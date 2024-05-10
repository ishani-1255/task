import { NavLink } from 'react-router-dom';
const nav = [
    {name: 'Home' ,href: '/'},
    {name: 'AddTask' , href: '/add-task'},
    {name: 'Events' , href: '/events'},
    {name: 'Leisure' , href: '/leisure'},
]
function Header(props){
    return(
        <>
    <div className="flex justify-end bg-white-800 h-18 pt-3 pb-3 border-b-4">
                    {nav.map((item) => (
                      <NavLink
                        key={item.name}
                        to={item.href}
                       
                        className = { ({isActive}) =>{
                            return ' px-9 py-4 font-large text-black-200 ' +
                            (isActive ? 'text-black-200' :
                            ' text-gray-400')
                        }

                        }
                    
                      >
                        {item.name}
                      </NavLink>
                    ))}
                  </div>
                  
                  {props.children}
         
                  </>
    );

}
export default Header;