import { 
    ReactNode, 
    createContext,
    useContext,
    useEffect,
    useState
} from 'react';

type User = {
    name: string,
    email: string
}
type UserAuth = {
    isLoggedIn: boolean;
    user: User | null;
    logIn: (email: string, password: string) => Promise<void>;
    signUp: (name: string, email: string, password: string) => Promise<void>;
    logOut: () => Promise<void>;
}
const AuthContext = createContext<UserAuth | null>(null);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<User | null>(null);
    const [isLoggedIn, setIsLoggedIn] = useState(true);

    useEffect(() => {
        // fetch if the user's cookies are valid then skip login
    }, []);
    const logIn = async (email: string, password: string) => {};
    const signUp = async (name: string, email: string, password: string) => {};
    const logOut = async () => {};

    const value = {
        user,
        isLoggedIn,
        logIn,
        logOut,
        signUp
    };
    return <AuthContext.Provider value={value}> {children} </AuthContext.Provider>;
}

// export const useAuth = () => {
//     const context = ()=> useContext(AuthContext);
//     if (!context) {
//         throw new Error("useAuth must be used within an AuthProvider");
//     }
//     return context;
// };
export const useAuth = () => useContext(AuthContext);