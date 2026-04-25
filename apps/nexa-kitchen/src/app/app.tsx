// Uncomment this line to use CSS modules
// import styles from './app.module.scss';
import r2wc from '@r2wc/react-to-web-component';
import { User, useUserStore } from '@mfe-angular-react-nx/kitchen-data-access';
import { useEffect, useState } from 'react';

export function App() {
  const { users, loading, fetchUsers } = useUserStore();

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  return (
    <div>
      <h1>Remote 3 - React</h1>
      {loading ? (
        <p>Loading users...</p>
      ) : (
        <ul>
          {users.map((user: User) => (
            <li key={user.id}>
              <img src={user.image} alt={user.firstName} />
              <h2>
                {user.firstName} {user.lastName}
              </h2>
              <p>{user.email}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export function defineReactWebComponent() {
  // Define the new custom element with the element name for the React Web Component.
  if (!customElements.get('wc-remote3')) {
    // This is where we convert the React component to a Web Component
    customElements.define('wc-remote3', r2wc(App));
  }
}

defineReactWebComponent();
export default App;
