import React, { createContext, PropsWithChildren, useState } from 'react';
import {IUser} from "../interfaces/user.interface";

export interface IAppContext {
  user: IUser;
    setUser?: (newUser: IUser) => void
}

export const AppContext = createContext<IAppContext>({
  user: {} as IUser,
});

export const AppContextProvider = ({
  children,
  user,
}: PropsWithChildren<IAppContext>): JSX.Element => {
  const [userState, setUserState] = useState<IUser>(user);

  const setUser = (newUser: IUser) => {
      setUserState(newUser);
  };

  return (
    <AppContext.Provider
      value={{
        user: userState,
        setUser,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
