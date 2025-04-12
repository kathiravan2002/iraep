import { Helmet } from "react-helmet";

const Helmetcomponent = ({ title }) => {
  return (
    <Helmet>
    <title>{title}</title>
    <meta name="keywords" content="IRAEP , International Review of Applied Economics and Policy,Public Finance,Industrial Policy ,Global Economics, Social Policy, Globalization, Government Policy, Health Economics , Poverty Reduction, Agricultural Economics , Inflation Control , Economic Modeling, Sustainable Development, Labor Economics, Monetary Policy, Applied Economics" />
    <meta name="description" content="IRAEP publishes peer-reviewed research in applied economics and policy, promoting global dialogue, innovation, and impactful policy solutions." />
    <meta name="author" content="IRAEP Editorial Team" />
    <meta name="robots" content="index, follow" />

    <meta property="og:type" content="website" />
    <meta property="og:title" content="International Review of Applied Economics and Policy" />
    <meta property="og:description" content="IRAEP publishes peer-reviewed research in applied economics and policy, promoting global dialogue, innovation, and impactful policy solutions." />
    <meta property="og:url" content="https://www.iraep.com/" />
    <meta property="og:image" content="https://iraep.com/assets/IRAEP.png" />
   
    <link rel="canonical" href="https://www.iraep.com/" />
    <link rel="icon" type="image/svg+xml" href="/assets/Fav.png" />
  </Helmet>
  );
};

export default Helmetcomponent;