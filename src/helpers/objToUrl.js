module.exports = (obj) =>
  "&" +
  Object.entries(obj)
    .map(([key, value]) => encodeURIComponent(key) + "=" + encodeURIComponent(value))
    .join("&");
