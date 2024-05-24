import { Navigate, useNavigate } from 'react-router-dom';
export const AuthAdmin = ({children}) => {
    const navigate = useNavigate();
    const user = localStorage.getItem('user');
    const currentUser = JSON.parse(user);

    if(!user)
        return <Navigate to='/'/>
    if(currentUser.userType != 'admin')
        return <Navigate to='/'/>
    
    return children;
    

}
