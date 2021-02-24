import { createContext, useState } from "react";


const defaultList = JSON.parse(localStorage.getItem("choix"));
const List = createContext();

export const ListProvider = ({ children }) => {
  
  const [list, setList] = useState(defaultList);

  
  //mon contexte me renvoi un objet avec un list et un setList
  return <List.Provider value={{ list, setList }}>{children}</List.Provider>;
};

export default List;
