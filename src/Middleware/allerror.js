export function datasender(res, statuscode, data) {
  return res.status(statuscode).json({
    success: true,
    data,
  });
}

export function customerror(req, res, statuscode, message) {
  return res.status(statuscode).json({
    success: false,
    message,
  });
}

export const catchAsyncError = (passedfun) => (req, res) => {
  return Promise.resolve(passedfun).catch((err) => {
    return customerror(req, res, 500, err.message);
  });
};
