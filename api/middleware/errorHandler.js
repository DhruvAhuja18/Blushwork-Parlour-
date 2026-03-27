// middleware/errorHandler.js
// Global error handling middleware

const errorHandler = (err, req, res, next) => {
  console.error('Unhandled Error:', err.stack);

  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;

  res.status(statusCode).json({
    success: false,
    message: err.message || 'An unexpected server error occurred.',
    ...(process.env.NODE_ENV === 'development' && { stack: err.stack }),
  });
};

module.exports = errorHandler;
