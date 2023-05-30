import React from "react";
import logo from '../../../assets/logo-dark.svg'

export default function HeaderLogo() {
  return (
    <div className="header-logo__wrapper">
      <img src={logo} alt="" className="header-logo" />
    </div>
  );
}
