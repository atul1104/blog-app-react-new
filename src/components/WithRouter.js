import { useNavigate, useParams } from 'react-router-dom';

function WithRouter(Component) {
  const Wrapper = (props) => {
    const navigate = useNavigate();
    const params = useParams();
    return <Component navigate={navigate} {...props} params={params} />;
  };

  return Wrapper;
}

export default WithRouter;
