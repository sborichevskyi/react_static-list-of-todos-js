// Add the required props
export const UserInfo = ({ usersFromServer, userId }) => {
  const user = usersFromServer.find(currentUser => currentUser.id === userId);

  return (
    <a
      className="UserInfo"
      href={`mailto:${user?.email || 'example@example.com'}`}
    >
      {user ? user.name : 'Unknown User'}
    </a>
  );
};
