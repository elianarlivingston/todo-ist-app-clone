import { Redirect, Route } from 'react-router-dom'
// import { createContext } from 'react'

// const useAuth = () => true

// const authContext = createContext({})

// export const ProviderAuth = ({ children }) => {
//     const user = useAuth()
//     return <authContext.Provider value={user} >{children}</authContext.Provider>
// }

export function PrivateRoute({ children, auth, ...rest }: any) {
    return (
        <Route
            {...rest}
            render={({ location }) =>
                auth ?
                    (
                        children
                    ) :
                    (
                        <Redirect
                            to={{
                                pathname: "/login",
                                state: { from: location }
                            }}
                        />
                    )
            }
        />
    );
}