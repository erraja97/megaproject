class CustomError extends Error {
  //study callbyvalue and callbyreference

  constructor(message, code) {
    super(message);
    this.code = code;
  }
}

export default CustomError;
