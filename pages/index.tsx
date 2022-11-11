import { Login } from '../page-components/Login/Login';
import { withLayout } from '../hoc';

const Home = () => (
  <Login />
);

export default withLayout(Home);
