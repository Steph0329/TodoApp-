import React from "react";
import CrossIcon from "./icons/CrossIcon";
import CheckIcon from "./icons/CheckIcon";
import useTodo from "../hooks/useTodo";

const Item = ({todo}) => {
    const { updateTodo, deleteTodo } = useTodo()

    const { id, title, completed } = todo

  return (
    <article className="mx-auto px-6 py-4 flex items-center gap-5 border-b border-gray-300 dark:bg-VeryDarkGrayishBlue dark:border-gray-500 transition-all duration-500">
      <button 
        className={`${completed && 'bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'} 
        flex justify-center items-center
        w-6 h-6 rounded-full border-2 border-gray-200 flex-none`}
        onClick={() => updateTodo(id)}
      >
        {completed && <CheckIcon />}
      </button>

      <p className={`${completed ? 'line-through text-gray-300 dark:text-gray-400' : 'text-gray-600 dark:text-gray-300'} grow text-sm md:text-base lg:text-lg`}>{title}</p>

      <button 
        className="flex-none"
        onClick={() => deleteTodo(id)}
      >
        <CrossIcon />
      </button>
    </article>
  );
};

export default Item;
