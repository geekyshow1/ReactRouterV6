import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  let navigate = useNavigate()
  let data = {
    'name':'Sonam'
  }
  return (
    <>
      <h1>Dashboard Page</h1>  
      <button onClick={()=>{
        navigate("/logout", {state:data})
      }}>Logout</button>  
    </>
  )
};

export default Dashboard;
