/**
 * Created by song on 16-10-18.
 *
 * 获取客户端宽度
 */

exports.ClientWidth = undefined;

exports.LARGE = 2;
exports.MEDIUM = 1;
exports.SMALL = 0;

let width = document.body.offsetWidth;

if (width >= 992) {
    exports.ClientWidth = exports.LARGE;
} else if (width >= 768) {
    exports.ClientWidth = exports.MEDIUM;
} else {
    exports.ClientWidth = exports.SMALL;
}
