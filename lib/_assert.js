module.exports = _assert;

function _assert (b, o, err_message) {
  if (Array.isArray(b)) {
    b.forEach(b1 =>{
      if (!o[b1]) {
        err_message = `Missing ${b1}`;
        console.log(`######[${err_message}]_ASSERT=>`,o);
        console.trace(`######[${err_message}]_ASSERT`);
        throw {
          message: err_message
        }
      }
    })
  }
  if (!b) {
    console.log(`######[${err_message}]_ASSERT=>`,o);
    console.trace(`######[${err_message}]_ASSERT`);
    throw {
      message: err_message // {message} to be compatible with other exceptions.
    }
  }
};
