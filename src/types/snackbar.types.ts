export type Severity = 'success' | 'info' | 'warning' | 'error';

export type SnackbarStateProps = {
  severity?: Severity;
  message: string;
};

export type SnackbarAction =
  | {
      type: 'SET_SNACKBAR';
      payload: { severity: Severity; message: string };
    }
  | { type: 'CLEAR_SNACKBAR' };

export type SnackbarContextProps = {
  snackbarState: SnackbarStateProps;
  dispatch: React.Dispatch<SnackbarAction>;
};
