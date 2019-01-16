/**
 * Created by ZhangLynn on 2018/7/31
 **/
import React from 'react';
const MyLoadingComponent = ({isLoading, error, pastDelay, retry, timeOut}) => {
    // Handle the delay loading state
    if (pastDelay) {
        return <div>Loading...</div>;
    }
    // Handle the error state
    else if (error) {
        return <div>Error! <button onClick={ retry }>Retry</button></div>;
    }
    // Handle the timeOut state
    else if (timeOut) {
        return <div>Timeout! <button onClick={ retry }>Retry</button></div>;
    }
    else {
        return null;
    }
};
export default MyLoadingComponent;
