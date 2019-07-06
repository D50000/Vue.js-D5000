var myVue = new Vue({
    el: ".test",
    data: {
        a: "A內容",
        content: null
    },
    beforeCreate: function () {
        console.log(this.a);
        console.log('created');
       
    },
    created: function () {
        console.log(this.a);
        
        console.log("$data created, but $el not yet");
    },
    beforeMount: function () {
        console.log("before create the $el");
    },
    
    mounted: function () {
      
        console.log("$el created");
    },
   
    methods: {
        greet: function () {
            console.log("123");
        }
    }
});