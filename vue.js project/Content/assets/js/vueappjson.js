window.addEventListener('load', () => {

    window.vue = new Vue({
        el: '#app',
        data: {
            isLoading: true
        },
        created() {
            setTimeout(() => {
                fetch('../Content/assets/data.json')
                    .then((res) => { return res.json() })
                    .then((res) => {
                        this.isLoading = false;
                    })  //veri isteği//
            }, 6000)
        }
    })
});