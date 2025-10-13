import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link ,useSearchParams,useNavigate} from 'react-router-dom';
import './users.css';

function Users() {
  const [data, setData] = useState([]);
  const [searchParams,setSearchParams]=useSearchParams();
  const cls=searchParams.get('class')
  const navigate=useNavigate()
  useEffect(() => {
    fetch('data.json')
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.error("Error loading JSON:", err));
  }, []);

  const handleSelectChange=(evt)=>{
    setSearchParams({
      class:evt.target.value
    })
    
  }
  return (


    <div className="page">
  <div className="options">
  <div className="label">Select Class</div>
  <select onChange={handleSelectChange}>
    <option value="">All</option>
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
    <option value="4">4</option>
    <option value="5">5</option>
    <option value="6">6</option>
    <option value="7">7</option>
    <option value="8">8</option>
    <option value="9">9</option>
    <option value="10">10</option>
  </select>
</div>
{/* 
      <motion.h1
        className="page-title"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        Users 👥
      </motion.h1>

      <motion.p
        className="page-subtitle"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        Manage and view user information here.
      </motion.p> */}

      <div className="user-grid">

        {data.filter((item)=>{
          if(!cls){
            return true
          }
           return cls === item.class.toString();
        })
        .map((item, index) => (
          <motion.div
            key={item.id}
            className={`user-card ${item.isActive ? 'active' : 'inactive'}`}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, type: "spring", stiffness: 80 }}
            whileHover={{ scale: 1.05, rotate: 1 }}
            whileTap={{ scale: 0.98 }}
            onClick={()=>{
              navigate(`${item.id}`,{
                
                state:{
                  data:item,

                }
              })
            }}
          >
            <Link to={`${item.id}`}>{item.name}</Link>
            
            <p><strong>Address:</strong> {item.address}</p>
             <p><strong>Class:</strong> {item.class}</p>

          
           
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Users


