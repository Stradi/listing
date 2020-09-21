const _cb = async (req, res, next, fn, ...args) => {
  try {
    const obj = await fn(...args);
    return res.json({ content: obj });
  } catch(error) {
    return next(error);
  }
  
}

module.exports = _cb;