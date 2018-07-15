import map from "./ma";
import identity from "./identity";
export default (values = function(list) {
  // map의 첫번째 인자로 값을 돌려주기 때문에 idenetity가 받고 그대로 리턴
  return map(list, identity);
});
