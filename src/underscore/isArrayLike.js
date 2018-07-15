const MAX_ARRAY_INDEX = Math.pow(2, 53) - 1;
export default (isArrayLike = function(list) {
  // length가 존재하는지 확인하고 최대 배열 크기 이하인지만 확인!
  const length = list === null ? void 0 : list.length;
  // void 0 의 데이터는 undefined이다.
  return typeof length == "number" && length >= 0 && length <= MAX_ARRAY_INDEX;
});
