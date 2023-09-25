import axios from "axios";
import { Children, createContext, useReducer } from "react";
import todoReducer from "../reducers/TodoReducer";

const TodoContext = createContext()

const initiaState = [];

export const TodoProvider = ({children})=>{
    const [todos,dispatch] = useReducer(todoReducer,initiaState);
    
    const getTodo = async ()=>{
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/todos"
        );

        const data = await response.data;
        dispatch({'action':'GET_TODO',data})
    }

    const getTodos = (url) => {
      let data = [];
      axios.get(url).then((response) => {
        data = response.data;
      });
      return data;
    };
    return (
        <TodoContext.Provider
        value={{ 
            todos,
            getTodo
         }}
        >
            {children}
        </TodoContext.Provider>
    )
}

export default TodoContext;