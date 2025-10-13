import React, { useEffect, useState } from 'react';
import { useParams ,useNavigate,useLocation, NavLink,Outlet} from 'react-router-dom';
import './details.css';


function Details() {
  const location=useLocation()
 const state=location.state || {};
 
  const { userId } = useParams(); // ✅ destructure directly
  const [user, setUser] = useState(state.data);
 const nav=useNavigate()
 
  useEffect(() => {
    if(!user){
    // Fetch local JSON data
    fetch('/data.json')
      .then((res) => res.json())
      .then((data) => {
        const selectedUser = data.find((item) => item.id.toString() === userId);
        setUser(selectedUser);
      })
      .catch((err) => console.error('Error fetching user data:', err));
    }
    }, [userId,user]);
      if(!user)
  {
    return null
  }

  // if (!user) {
  //   return (
  //     <div className="page">
  //       <h2>Loading user details...</h2>
  //     </div>
  //   );
  // }

  return (
    <div className="page user-details">
      <h1>👤 {user.name}</h1>
      <p><strong>Class:</strong> {user.class}</p>
      <p><strong>Address:</strong> {user.address}</p>
      <p><strong>Phone:</strong> {user.phone}</p>
      <p>
        <strong>Status:</strong>{' '}
        <span className={user.isActive ? 'active' : 'inactive'}>
          {user.isActive ? 'Active' : 'Inactive'}
        </span>
      </p>
      <div>
        <div className="subMenu">
          <NavLink to="" end >Marks</NavLink>
          <NavLink to="sports">Sports</NavLink>
          <NavLink to="remarks">Remarks</NavLink>
        
        </div>
        <div className='Details-body'>
         <Outlet context={user}></Outlet>
        </div>
      </div>
    <div className="back-button-container">
  <button className="back-button" onClick={()=>{
    nav(`/users`)
  }}>Back</button>
</div>

      
    </div>
  );
}

export default Details;

