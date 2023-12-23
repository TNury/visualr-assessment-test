export type ErrorProps = {
  message: string;
  extensions: {
    error: {
      name: string;
      message: string;
      details: {
        errors: {
          path: string[];
          message: string;
          name: string;
        }[];
      };
    };
    code: string;
  };
};
