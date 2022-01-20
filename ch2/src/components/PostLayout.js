import { Outlet } from "react-router-dom";

const PostLayout = () => {
  return (
    <>
      <h1>This is Post Layout</h1>   
      <Outlet /> 
    </>
  )
};

export default PostLayout;
