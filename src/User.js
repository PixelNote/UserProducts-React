import { useState, useEffect } from "react";
import './User.css';

function User(){

  const [user, setUser] = useState(null)

  useEffect(() => {
    fetch("https://fakestoreapi.com/users/2")
      .then((res) => res.json())
      .then((data) => {
      console.log(data);
      setUser(data);
  })
  }, [])

  return (
    <div>
    {user && (
      <div className="user-card">
      <p className="user">
      {user.name.firstname.charAt(0)}{user.name.lastname.charAt(0)}
      </p>
      </div>
      )
    }
    </div>
  )

}
  


export default User;

