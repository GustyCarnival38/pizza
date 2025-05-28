import React from "react";
import ContentLoader from "react-content-loader";

const Skeleton = (props) => (
  <ContentLoader
    className="pizza-block"
    speed={2}
    width={280}
    height={466}
    viewBox="0 0 280 466"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="140" cy="170" r="130" />
    <rect x="7" y="317" rx="0" ry="0" width="280" height="29" />
    <rect x="8" y="364" rx="0" ry="0" width="280" height="63" />
    <rect x="10" y="432" rx="0" ry="0" width="91" height="29" />
    <rect x="239" y="459" rx="0" ry="0" width="2" height="10" />
    <rect x="154" y="434" rx="0" ry="0" width="121" height="29" />
  </ContentLoader>
);

export default Skeleton;
