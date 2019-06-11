/**
 *
 *匀速动画
 * @param {*} ele   移动的元素
 * @param {*} juLi  移动到的位置
 */
function animate(ele, juLi) {
    clearInterval(ele.timeID)
    ele.timeID = setInterval(function () {
        var weiZhi = ele.offsetLeft;
        if (Math.abs(juLi - weiZhi) > 10) {
            weiZhi += juLi > weiZhi ? 10 : -10;
            ele.style.left = weiZhi + 'px'
        } else {
            ele.style.left = juLi + 'px'
            clearInterval(ele.timeID)
        }
    }, 20);
}

/**
 *
 *
 * @param {*} ele    变化的元素
 * @param {*} attrs 变化的属性(对象)(name:jack)
 * @param {*} fn    回调函数(结束时触发)
 */
function animate2(ele, attrs, fn) {
    clearInterval(ele.timeID)
    ele.timeID = setInterval(function () {
        var flag = true;
        for (const key in attrs) {
            if (key == 'opacity') {
                var weiZhi = parseFloat(getStyle(ele, key)) * 1000;
                var juLi = attrs[key] * 1000;
                if (Math.abs(juLi - weiZhi) > Math.abs((juLi - weiZhi) / 10)) {
                    if (juLi - weiZhi < 0) {
                        weiZhi += Math.floor((juLi - weiZhi) / 10);
                    } else {
                        weiZhi += Math.ceil((juLi - weiZhi) / 10);
                    }
                    ele.style[key] = weiZhi / 1000;
                }
                if (weiZhi != attrs[key]) {
                    flag = false
                }
            } else {
                var weiZhi = parseInt(getStyle(ele, key))
                var juLi = attrs[key];
                if (Math.abs(juLi - weiZhi) > Math.abs((juLi - weiZhi) / 10)) {
                    if (juLi - weiZhi < 0) {
                        weiZhi += Math.floor((juLi - weiZhi) / 10);
                    } else {
                        weiZhi += Math.ceil((juLi - weiZhi) / 10);
                    }
                    ele.style[key] = weiZhi + 'px'
                }
                if (weiZhi != attrs[key]) {
                    flag = false
                }
            }
        }
        if (flag) {
            clearInterval(ele.timeID)
            if (fn instanceof Function) {
                fn();
            }
        }
    }, 20);
}

/**
 *
 *
 * @param {*} obj  获取的元素
 * @param {*} attr 元素的属性
 * @returns
 */
function getStyle(obj, attr) {
    if (window.getComputedStyle) {
        var res = window.getComputedStyle(obj)[attr];
        return res;
    } else {
        var res = obj.currentStyle[attr];
        return res;
    }
}