import map from "./ma";
import identity from "./identity";
export default (values = function(list) {
  return map(list, identity);
});
