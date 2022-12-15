/**
 * @author <code@tythos.net>
 */

import Trippy from "../Trippy/index.js";

class TrippyButton extends Trippy {
    constructor() {
        super(import.meta.url);
        this.bind("button", "click");
    }
}

export default Object.assign(TrippyButton, {
    "__url__": "https://github.com/Tythos/TrippyButton.git",
    "__license__": "MIT",
    "__semver__": "v0.1.0",
    "__deps__": {
        "Trippy": "https://github.com/Tythos/Trippy.git"
    },
    "__tests__": []
});
