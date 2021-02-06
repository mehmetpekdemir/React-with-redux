import React, { Fragment, useEffect } from "react";
import HttpErrorHandler from "./HttpClient";
import http from "./Axios";

const ErrorHandler = (WrappedComponent) => {
  return (props) => {
    const [error, clearError] = HttpErrorHandler(http);

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
      if (error) {
        if (error && error.response.status === 401) {
          localStorage.removeItem("access_token");
          setTimeout(() => window.location.replace("/logout"), 4000);
        } else {
          let errorData;
          if (!error.response) {
            errorData = "SERVER_ERROR";
            console.log(errorData);
          } else {
            if (error.response.data.errors !== null) {
              errorData = error.response.data.errors.errorDescription;
              console.log(errorData);
            }
          }
        }
        clearError();
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [error]);

    return (
      <Fragment>
        <WrappedComponent {...props} />
      </Fragment>
    );
  };
};

export default ErrorHandler;
