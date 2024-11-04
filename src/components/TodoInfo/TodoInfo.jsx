import { UserInfo } from '../UserInfo';
import usersFromServer from '../../api/users.json';
// Add the required props
export const TodoInfo = ({ todos }) => (
  <>
    {todos.map(todo => (
      <article
        key={todo.id}
        className={`TodoInfo${todo.completed ? ' TodoInfo--completed' : ''}`}
      >
        <h2 className="TodoInfo__title">{todo.title}</h2>
        <UserInfo usersFromServer={usersFromServer} userId={todo.userId} />
      </article>
    ))}
  </>
);
