import { TodoInfo } from '../TodoInfo/TodoInfo';
// Add the required props
export const TodoList = ({ todos }) => (
  <section className="TodoList">
    <TodoInfo todos={todos} />
  </section>
);
