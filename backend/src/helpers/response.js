const _cb = async (req, res, fn, ...args) => {
  const obj = await fn(...args);
  if(obj.error) {
    return res.json({ error: obj.error });
  } else {
    return res.json({ content: obj });
  }
}

module.exports = _cb;