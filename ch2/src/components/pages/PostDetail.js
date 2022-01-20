import { useParams } from "react-router-dom";
const PostDetail = () => {
  let { category } = useParams();
  return (
    <>
      <h1>{category} post detail</h1>
      <h3>{category} is Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae facilis consectetur nulla cum, sint corrupti doloribus iure eveniet recusandae hic tempora iusto, soluta est veniam necessitatibus, molestiae corporis sed quos.</h3>    
    </>
  )
};

export default PostDetail;
