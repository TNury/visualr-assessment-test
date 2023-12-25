'use client';

import React, { ReactNode, createContext, useContext, useReducer } from 'react';

import {
  SnackbarAction,
  SnackbarContextProps,
  SnackbarStateProps,
} from '@vat/types/snackbar.types';

const initialState: SnackbarStateProps = {
  severity: undefined,
  message: '',
};

const reducer = (
  state: SnackbarStateProps,
  SnackbarAction: SnackbarAction
): SnackbarStateProps => {
  switch (SnackbarAction.type) {
    case 'SET_SNACKBAR':
      return {
        severity: SnackbarAction.payload.severity,
        message: SnackbarAction.payload.message,
      };
    case 'CLEAR_SNACKBAR':
      return {
        severity: undefined,
        message: '',
      };
    default:
      return state;
  }
};

const SnackbarContext = createContext<SnackbarContextProps | undefined>(
  undefined
);

interface SnackbarProviderProps {
  children: ReactNode;
}

export const SnackbarProvider: React.FC<SnackbarProviderProps> = ({
  children,
}) => {
  const [snackbarState, dispatch] = useReducer(reducer, initialState);

  return (
    <SnackbarContext.Provider value={{ snackbarState, dispatch }}>
      {children}
    </SnackbarContext.Provider>
  );
};

export const useSnackbarContext = () => {
  const context = useContext(SnackbarContext);
  if (!context) {
    throw new Error('useSnackbar must be used within a SnackbarProvider');
  }
  return context;
};
