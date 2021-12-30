import React, {useState} from "react";
import logo from "../../Assets/images/logo/logo.png";
import navcss from "./AppNav.module.css";

const AppNav = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        if(!isOpen){
            setIsOpen(true);
          
        }
        else{
          setIsOpen(false);
        }
    };
  return (
    <>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class={isOpen? "navbar-toggler":"navbar-toggler collapsed"} type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded={isOpen} aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class={isOpen? "collapse navbar-collapse show":"collapse navbar-collapse"} id="navbarNavDropdown">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      
      <li class="nav-item">
        <a class="nav-link" href="#">Features</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Pricing</a>
      </li>
      <li class={isOpen? "show nav-item dropdown": "nav-item dropdown"}>
        <a class="nav-link dropdown-toggle" onClick={()=>toggle()} href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded={isOpen}>
          Dropdown link
        </a>
        <div class={isOpen?"show dropdown-menu": "dropdown-menu"} aria-labelledby="navbarDropdownMenuLink">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
    </ul>
  </div>
</nav>
    </>
  );
};


export default AppNav;
