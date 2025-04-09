import { Helmet } from "react-helmet";

const Helmetcomponent = ({ title }) => {
  return (
    <Helmet>
    <title>{title}</title>
    
  </Helmet>
  );
};

export default Helmetcomponent;