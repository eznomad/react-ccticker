import React from "react";
import "./HeaderSection.css";
import MenuAppBar from "../../common/MenuAppBar/MenuAppBar";

const HeaderSection = props => {
  return (
    <div>
      {/* My HeaderSection */}
      <MenuAppBar {...props} />
    </div>
  );
};

export default HeaderSection;
