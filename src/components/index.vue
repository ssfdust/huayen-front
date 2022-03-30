<template>
    <div class="main" :class="{blur:blur}" @click="switch_blur">
        <div class="background" :style="{backgroundImage: `url(${background})`}"></div>
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
            blur: false,
            lineAnimed: false,
            textAnimed: false,
            onesay: '南无大方广佛华严经，华严海会佛菩萨',
            quote: '《大方广佛华严经》',
            background: require('../assets/default_bg.jpg')
        }
    },
    mounted() {
        this.get_one_say()
        // this.get_bg_img()
        setTimeout(() => this.lineAnimed = true, 1500)
        setTimeout(() => this.textAnimed = true, 2000)
        setTimeout(() => this.blur = true, 2500)
    },
    methods: {
        switch_blur() {
            this.blur = !this.blur
        },
        get_one_say() {
            this.axios({
                method: 'get',
                url: '/api/huayen/onesay'
            }).then(({ data: resp }) => {
                this.onesay = resp.data.onesay
            })
        },
        get_bg_img() {
            let device = this.$isMobile() ? "mobile" : "pc"
            this.axios({
                method: 'get',
                url: `/api/img/bg?device=${device}`
            }).then(({ data: resp }) => {
                this.background = resp.data.url
            })
        }
    }
}
</script>

<style scoped lang="scss">
@import "../scss/style.scss";
@import "../scss/fonts.scss"
</style>
