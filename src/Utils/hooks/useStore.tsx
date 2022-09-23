import { useEffect, useState } from "react";
import { getData } from "Service/localStore";

const useStore = () => {
  // State
  const [todos, setTodos] = useState<any[]>([]);
  const [isUpdate, setIsUpdate] = useState(false);

  //   Handlers
  const getTodos = () => {
    console.log("Is called");

    const res: any = getData();
    console.log({ dddd: res });
    setTodos([...res]);
  };

  const updateTodo = () => {
    setIsUpdate(!isUpdate);
  };

  // Effects
  useEffect(() => {
    getTodos();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isUpdate]);

  //   Data to return
  // return [todos, updateTodo] as const;
  return { todos, updateTodo };
};

export default useStore;
