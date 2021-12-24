import React from "react";

const AppLayout = (props) => {
    return (
        <>
        <div className="container-fluid p-0">
            <div className="row">
            <div className="col-12">
                {props.children}
            </div>
            </div>
        </div>
        </>
    );
}

export default AppLayout;