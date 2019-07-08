var app = new Vue({
    el: '#app',
    data: {
        celsius: 0
    },
    computed: {
        fahrenheit: function () {
            return this.celsius * 9 / 5 + 32;
        }
    }
})

// computed => Auto run when the data update.
// methods => Run when has been called.