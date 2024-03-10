import React, { useState } from "react";
import { CoffeContext } from ".";
import React from 'react';

const Rootcontext = ({children}) => {
  const [addAll, setAddAll] = useState("");
  const [url, setUrl] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  return (
<CoffeContext.Provider value={{
  addAll,
  setAddAll,
  url,
  setUrl,
  name,
  setName,
  price,
  setPrice

}}>
{children}
</CoffeContext.Provider>
  );
};

export default Rootcontext;