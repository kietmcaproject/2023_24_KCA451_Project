import { Navigate, useNavigate } from 'react-router-dom';

export const AlreadyLoged = ({children}) => {
    const user = localStorage.getItem('user');
    
    if(user)
      return <Navigate to='/'/>  
      
    return children;
}
