// "use client";

// import { createContext, useContext, useState, ReactNode } from "react";

// type AuthContextType = {
//   loggedIn: boolean;
//   setLoggedIn: (value: boolean) => void;
// };

// const AuthContext = createContext<AuthContextType>({
//   loggedIn: false,
//   setLoggedIn: () => {},
// });

// export function AuthProvider({ children }: { children: ReactNode }) {
//   const [loggedIn, setLoggedIn] = useState(false);

//   return (
//     <AuthContext.Provider value={{ loggedIn, setLoggedIn }}>
//       {children}
//     </AuthContext.Provider>
//   );
// }

// export function useAuth() {
//   return useContext(AuthContext);
// }
