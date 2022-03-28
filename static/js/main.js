document.ready = function (callback) {
    ///兼容FF,Google
    if (document.addEventListener) {
        document.addEventListener('DOMContentLoaded', function () {
            document.removeEventListener('DOMContentLoaded', arguments.callee, false);
            callback();
        }, false)
    }
    //兼容IE
    else if (document.attachEvent) {
        document.attachEvent('onreadystatechange', function () {
            if (document.readyState == "complete") {
                document.detachEvent("onreadystatechange", arguments.callee);
                callback();
            }
        })
    }
    else if (document.lastChild == document.body) {
        callback();
    }
}

function get_one_say() {
    axios({
        method: "get",
        url: "/api/huayen/onesay"
    })
        .then(function ({data: resp}) {
            let onesay = document.getElementById("onesay");
            onesay.textContent = resp.data.onesay;
        });
}

function get_bg_img() {
    axios({
        method: "get",
        url: "/api/img/bg"
    })
        .then(function ({data: resp}) {
            let background = document.getElementsByClassName("background-img");
            background[0].style.backgroundImage = "url('" + resp.data.url +  "')";
        });
}

document.ready(function () {
    get_one_say();
    get_bg_img();
})
