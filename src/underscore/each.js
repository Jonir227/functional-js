import bloop from "./bloop";
import identity from "./identity";
import noop from "./noop";

export default (each = bloop(identity, noop));
