import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

export interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  image: string;
}

interface UserState {
  users: User[];
  loading: boolean;
  fetchUsers: () => Promise<void>;
  addUser: (user: User) => void;
}

export const useUserStore = create<UserState>()(
  persist(
    (set, get) => ({
      users: [],
      loading: false,

      fetchUsers: async () => {
        if (get().users.length > 0) return; // Avoid fetching if users are already loaded
        set({ loading: true });
        try {
          const response = await fetch('https://dummyjson.com/users');
          const data = await response.json();
          set({ users: data.users });
        } catch (error) {
          console.error('Failed to fetch users:', error);
        } finally {
          set({ loading: false });
        }
      },

      addUser: (user: User) =>
        set((state) => ({ users: [...state.users, user] })),
    }),
    {
      name: 'user-domain-storage', // Key used in the browser storage
      storage: createJSONStorage(() => sessionStorage), // Using sessionStorage so it clears when the tab closes
    }
  )
);
