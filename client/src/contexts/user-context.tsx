import * as React from 'react';
import { User } from '../interfaces/types';

const UserContext = React.createContext(null);

function UserProvider({ children }: { children: JSX.Element }): JSX.Element {
	const [user, setUser] = React.useState<User | { logged: boolean }>({
		logged: false,
	});
	const value = { user, setUser };
	return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

export { UserContext, UserProvider };
