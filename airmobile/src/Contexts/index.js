import {ListProvider} from "./List";

const ContextProvider = ({ children }) => {
  return (
     <ListProvider>       
        {children}
     </ListProvider>
    
  );
};

export default ContextProvider;