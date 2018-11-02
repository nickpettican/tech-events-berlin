const arrayOfObjects = ({ list, key }) => {
  return list.filter(
    (entry, index, self) => index === self.findIndex((_entry) => _entry[key] === entry[key])
  );
};

const array = (list) => [...new Set(list)];

module.exports = {
  arrayOfObjects,
  array
};
