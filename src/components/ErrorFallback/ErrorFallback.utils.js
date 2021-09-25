/**
 * @param  {Boolean} shouldThrow - turn error on or off
 * @return  {Object} - an error object instance
 */
const ErrorCreator = ({ shouldThrow }) => {
  if (shouldThrow) {
    throw new Error('I am an error.');
  } else {
    return null;
  }
};

export default ErrorCreator;
