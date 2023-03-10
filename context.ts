import { createContext } from "@lit-labs/context";

export interface IContext {
  foo: string;
  setContext: (context: Partial<IContext>) => void;
  reset: () => void;
}

export const Context = createContext<IContext>("Specific Context");
