module.exports = function getZerosresult(number, base) {
  let zerosResult = number,
      baseCount = base,
      a = 0, 
      b = 0, 
      c = 0;
  for (let i = 2; i <= base; i++) {
    a = 0;
    if (baseCount % i == 0) {
      b = 0;
      do {
        baseCount = Math.floor(baseCount / i);
        b++;
      } while (baseCount % i == 0);
      c = number;
      do {
        a += Math.floor(c / i);
        c = Math.floor(c / i);
      } while (c / i > 0);
      zerosResult = Math.floor(Math.min(zerosResult, a / b));
    }
  }
  return zerosResult;
} 