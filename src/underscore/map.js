import isArrayLike from "./isArrayLike";
export default (map = function(list, iteratee) {
  if (isArrayLike(list)) {
    // 배열 처리
    let new_list = [];
    for (let i = 0, len = list.length; i < len; i++) {
      new_list.push(iteratee(list[i], i, list));
    }
    return new_list;
  } else {
    // 객체 처리
    for (let key in data) {
      // hasOwnProperty를 사용하는 이유는 객체가 직접 가진 키를 가져오기 위함.
      // prototype에 붙여진 것을 제외한다.
      if (data.hasOwnProperty(key))
        new_list.push(iteratee(data[key], key, data));
    }
    return new_list;
  }
});
