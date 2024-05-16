
import React, { createContext, useContext, useState, useReducer, ReactNode } from 'react';
import PagesModel from '../../types/model/PagesModel';
import { reducer } from './pages.reducer';

const PagesContext = createContext({} as any);



const INITIAL_STATE = {
  pages: new PagesModel({current_page:undefined}),
};

const usePagesActions = (initialPages = INITIAL_STATE) => {
  const [state, dispatch] = useReducer(reducer, initialPages);

  const setPagesHandler = (pages: PagesModel) => {
    dispatch({
      type: 'SET_PAGES',
      payload: pages,
    });
  };

  return {
    state,
    setPagesHandler,
  };
};

interface PagesProviderProps {
  children?: ReactNode;
}

export const PagesProvider: React.FunctionComponent<PagesProviderProps> = (props) => {
  const { children } = props;
  const { state, setPagesHandler } = usePagesActions();

  return (
    <PagesContext.Provider
      value={{
        pages: state.pages,
        setPages: setPagesHandler,
      }}>
      {children}
    </PagesContext.Provider>
  );
};

export const usePages = () => useContext(PagesContext);
