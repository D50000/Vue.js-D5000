var app = new Vue({
    el: '#app',
    data: {
        seen: false,
        message: 'Hello World@',
        colors: ['blue', 'red', 'black'],
        homes: [
            { father: 'tom' },
            { father: 'bob' },
            { father: 'john' }
        ]
    },
    methods:{
        myFa: function(father){
          alert('@讚@'+father)
        }
      }
});