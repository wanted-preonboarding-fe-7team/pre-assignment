const isEmpty = (dataArray) => dataArray.length === 0;

const after = (times, func) => {
  return function () {
    if (--times < 1) {
      return func.apply(this, arguments);
    }
  };
};

export { isEmpty, after };
