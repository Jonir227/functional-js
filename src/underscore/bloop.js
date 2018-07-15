import { isArrayLike } from ".";

export default (bloop = function(new_data, function_body) {
  return function(data, iteratee) {
    let result = new_data(data);
    // 배열 처리
    if (isArrayLike(data)) {
      for (let i = 0, len = data.length; i < len; i++) {
        function_body(iteratee(data[i], i, data), result);
      }
    } else {
      // 객체 처리
      for (var key in data) {
        // hasOwnProptery는 데이터의 프로토타입을 제외한 키값을 체크
        if (data.hasOwnProperty(key))
          function_body(iteratee(data[key], key, data), result);
      }
    }
    return result;
  };
});
