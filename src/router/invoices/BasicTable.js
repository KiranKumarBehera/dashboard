import React, { useEffect } from "react";

import Small from "./Small";
import Large from "./Large";
import { useState } from "react";

const BasicTable = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  if (windowWidth > 650) {
    return <Large />;
  } else {
    return <Small />;
  }
};

export default BasicTable;
