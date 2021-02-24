import { createContext, useState, useEffect } from "react";


const defaultList = JSON.parse(localStorage.getItem("choix"));
const choices = defaultList? defaultList : null ;
const List = createContext(choices);

export const ListProvider = ({ children }) => {
  
  const [list, setList] = useState(defaultList);
  
  useEffect(() => {
    if(list) localStorage.setItem("choix", JSON.stringify(list));
    else localStorage.removeItem("choix")
  }, [list]);

  
  //mon contexte me renvoi un objet avec un list et un setList
  return <List.Provider value={{ list, setList }}>{children}</List.Provider>;
};

export default List;
