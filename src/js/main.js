import axios from 'axios'

function get_one_say() {
    axios({
        method: 'get',
        url: '/api/huayen/onesay'
    }).then(({ data: resp }) => {
        let onesay = document.getElementById('onesay');
        onesay.textContent = resp.data.onesay;
    });
}

function get_bg_img() {
    axios({
        method: 'get',
        url: '/api/img/bg'
    }).then(({ data: resp }) => {
        let background = document.getElementsByClassName('background-img');
        background[0].style.backgroundImage = `url(${resp.data.url})`;
    });
}

addEventListener('load', () => {
    get_one_say()
    get_bg_img()
})
