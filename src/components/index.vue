<template>
    <div class="main">
        <div class="background" :style="background"></div>
        <div class="container">
            <div class="header">
                <div class="space"></div>
                <div class="search">
                </div>
            </div>
            <div class="content">
                <div class="onesay">
                    <div class="text">
                        <p id="onesay">{{ onesay }}</p>
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
    name: 'HelloWorld',
    data () {
        return {
            onesay: '南无大方广佛华严经，华严海会佛菩萨',
            background: { backgroundImage: "url(https://vuejs.org/images/logo.png)" }
        }
    },
    mounted: function () {
        this.get_one_say()
        this.get_bg_img()
    },
    methods: {
        get_one_say: function () {
            this.axios({
                method: 'get',
                url: '/api/huayen/onesay'
            }).then(({ data: resp }) => {
                this.onesay = resp.data.onesay
            })
        },
        get_bg_img: function () {
            let device = this.$isMobile() ? "mobile" : "pc"
            this.axios({
                method: 'get',
                url: `/api/img/bg?device=${device}`
            }).then(({ data: resp }) => {
                this.background.backgroundImage = `url(${resp.data.url})`
            })
        }
    }
}
</script>

<style scoped lang="scss">
@import "../scss/style.scss";
@import "../scss/fonts.scss"
</style>
