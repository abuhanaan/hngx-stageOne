const genUniqueId = (data) => {
  let md5 = require("md5");
  const d = new Date();
  let utc_time = d.toISOString();
  const uniqueId = md5(data + utc_time);
  return uniqueId;
};

module.exports = genUniqueId;
