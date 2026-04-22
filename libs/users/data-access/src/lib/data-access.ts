import { create } from 'zustand';

interface User {
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

export const useUserStore = create<UserState>((set) => ({
  users: [],
  loading: false,

  fetchUsers: async () => {
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

  addUser: (user: User) => set((state) => ({ users: [...state.users, user] })),
}));
