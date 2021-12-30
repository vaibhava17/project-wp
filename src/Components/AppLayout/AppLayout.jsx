import React from "react";

const AppLayout = (props) => {
  return (
    <>
      <div className="container-fluid p-0">{props.children}</div>
    </>
  );
};

export default AppLayout;
