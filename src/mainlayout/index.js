import React from "react";
import Header from "../header/index";

// ==>juste un Wrapper

const MainLayout = props => {
  return (
    <div>
      <Header />

      <div className="container">{props.children}</div>
    </div>
  );
};

export default MainLayout;
