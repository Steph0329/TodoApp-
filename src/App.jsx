import { TodoProvider } from "./context/TodoProvider"
import AppTodo from "./components/AppTodo"

function App() {

  return (
    <TodoProvider>
      <AppTodo />
    </TodoProvider>
  )
}

export default App
