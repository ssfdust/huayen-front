<template>
    <div class="main" :class="{blur:blur}" @click="switch_blur" ref="application">
        <div class="lodaer" :class="{active:isLoading}">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 38 38" width="64" height="64" stroke="#000">
                <g fill="none" fill-rule="evenodd">
                <g transform="translate(1 1)" stroke-width="2">
                    <circle stroke-opacity=".25" cx="18" cy="18" r="18"></circle>
                    <path d="M36 18c0-9.94-8.06-18-18-18">
                    <animateTransform
                        attributeName="transform"
                        type="rotate"
                        from="0 18 18"
                        to="360 18 18"
                        dur="0.8s"
                        repeatCount="indefinite"
                    ></animateTransform>
                    </path>
                </g>
                </g>
            </svg>
        </div>
        <div ref="background" class="background" :style="{backgroundImage: `url(${background})`}"></div>
        <div class="container">
            <div class="header">
                <div class="space"></div>
                <div class="search"></div>
            </div>
            <div class="content">
                <div class="onesay">
                    <div class="text" :class="{'line-animed':lineAnimed, 'text-animed':textAnimed}">
                        <p class="phrase">{{ onesay }}</p>
                        <p class="quote" v-show="quote">——{{ quote }}</p>
                    </div>
                </div>
            </div>
            <div class="footer">
                华严 | <a href="https://github.com/ssfdust">能明</a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'huayen',
    data () {
        return {
            isLoading: true,
            blur: false,
            times: 0,
            lineAnimed: false,
            textAnimed: false,
            onesay: '南无大方广佛华严经，华严海会佛菩萨',
            quote: '《大方广佛华严经》',
            background: null
        }
    },
    mounted() {
        this.get_one_say()
        this.get_bg_img()
    },
    methods: {
        switch_blur() {
            this.blur = !this.blur
            let self = this
            this.times += 1
            if (this.times === 10) {
                this.clear_cookie()
                window.location.reload();
            }
            setTimeout(()=>{
                self.times = 0
            }, 10000)
        },
        clear_cookie() {
            var cookies = document.cookie.split(";");
            for (var i = 0; i < cookies.length; i++) {
                var cookie = cookies[i]
                var eqPos = cookie.indexOf("=")
                var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
                document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT"
            }
        }
        ,
        get_one_say() {
            this.axios({
                method: 'get',
                url: '/api/huayen/onesay'
            }).then(({ data: resp }) => {
                this.onesay = resp.data.onesay
                this.quote = `《${resp.data.chapter}》`
            })
        },
        get_bg_img(loader) {
            let device = this.$isMobile() ? "mobile" : "pc"
            this.axios({
                method: 'get',
                url: `/api/img/bg?device=${device}`
            }).then(({ data: resp }) => {
                this.load_background_img(resp.data.url, loader)
            })
        },
        load_background_img(img_src) {
            let img_inst = new Image()
            let self = this
            img_inst.onload = function () {
                self.background = img_src
                setTimeout(() => {
                    self.isLoading = false
                    self.lineAnimed = true
                    self.textAnimed = true
                    self.blur = true
                }, 1000)
            }
            img_inst.src = img_src
        }
    }
}
</script>

<style scoped lang="scss">
@import "../scss/style.scss";
@import "../scss/fonts.scss"
</style>
