import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import routesMapping from "./Routes/routes";
import AppLayout from './Components/AppLayout/AppLayout';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        {routesMapping.map((i) => {
          return (
            <Route
              key={i.path}
              path={i.path}
              element={
                i.withAppLayout ? (
                  <AppLayout>
                    <div id="page-content-wrapper">
                      <i.AppNav />
                      <i.Component />
                    </div>
                  </AppLayout>
                ) : (
                  <i.Component />
                )
              }
            ></Route>
          );
        })}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
