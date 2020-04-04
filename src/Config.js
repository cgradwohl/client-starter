import * as Configurations from './environments';

// fetch secretes here if necessary
export default Configurations[process.env.REACT_APP_ENV];
