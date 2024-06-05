export const formatTime = (time, config) => {
    const defaultOptions = { hour: "numeric", minute: "numeric", second: "numeric" };
    const options = config ? config : defaultOptions;
  
    return new Date(time).toLocaleTimeString("en-US", options);
};
