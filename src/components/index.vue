<template>
    <div class="main" :class="{blur:blur}" @click="switch_blur" ref="application">
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
            lineAnimed: false,
            textAnimed: false,
            onesay: '南无大方广佛华严经，华严海会佛菩萨',
            quote: '《大方广佛华严经》',
            background: null
        }
    },
    mounted() {
        let loader = this.create_loader()
        this.get_one_say()
        this.get_bg_img(loader)
    },
    methods: {
        switch_blur() {
            this.blur = !this.blur
        },
        create_loader() {
            return this.$loading.show({
                container: this.$refs.application,
                blur: "15px"
            })
        },
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
        load_background_img(img_src, loader) {
            let img_inst = new Image()
            let self = this
            img_inst.onload = function () {
                self.background = img_src
                self.$refs.background.classList.add("fade-in-image")
                loader.hide()
                setTimeout(() => {
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
