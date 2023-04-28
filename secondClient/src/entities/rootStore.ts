import { makeAutoObservable } from "mobx";
import { createContext, useContext } from "react";
import { User } from "./User/model";

class RootStore {
  user: User;

  constructor() {
    this.user = new User();

    makeAutoObservable(this);
  }
}

export const rootStore = new RootStore();
export const RootStoreContext = createContext<RootStore>(rootStore);

export const useStore = () => {
  const store = useContext(RootStoreContext);

  return store;
};
