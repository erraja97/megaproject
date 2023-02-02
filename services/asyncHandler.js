//handle any function in an asynchronous way using below snippet

const asyncHandler = (fn) => async (req, res, next) => {
  try {
    await fn(req, res, next);
  } catch (error) {
    res.status(error.code || 500).json({
      success: false,
      message: error.message,
    });
  }
};

export default asyncHandler;

//steps used
//const asyncHandler = () => {}
//const asyncHandler = (func) => {}
//const asyncHandler = (func) => () => {}
//const asyncHandler = (func) => async() => {}

//above function can be written in this way also
// function asyncHandler(fn) {
//   return async function (req, res, next) {
//     try {
//       await fn(req, res, next);
//     } catch (err) {
//       res.status(err.code || 500).json({
//         success: false,
//       });
//     }
//   };
// }
