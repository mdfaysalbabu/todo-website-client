import { Button } from "../ui/button";
import AddTodoModal from "./AddTodoModal";
import TodoCard from "./TodoCard";
import TodoFilter from "./TodoFilter";
import { useGetTodosQuery } from "@/redux/api/api";
import { useState } from "react";

const TodoContainer = () => {
  const [priority, setPriority] = useState("");
  
 
  // form local state
  // const { todos } = useAppSelector((state) => state.todos);

  // form server
  const { data: todos, isLoading, isError } = useGetTodosQuery(priority);


  // niche todos.todos.map cholbe server theke nile

  if (isLoading) {
    return <p>loading</p>;
  }

  return (
    <div>
      <div className="flex justify-between mb-5">
        <AddTodoModal />
        <TodoFilter priority={priority} setPriority={setPriority} />
      </div>
      <div className="bg-primary-gradient w-full h-full p-[5px] rounded-xl ">
        {/* <div className="bg-white p-5 text-2xl font-bold flex justify-center items-center rounded-md"><p>There is no task pending</p> </div> */}
        <div className="bg-white p-5  w-full h-full rounded-lg space-y-3">
          {todos?.data?.map((item) => (
            <TodoCard {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default TodoContainer;
