const data = {
    data(){
        return{
            boxASelected: false,
            boxBSelected: false,
            boxCSelected: false,
        }
    },
    watch:{},
    computed: {},
    methods:{
        selectBox(box){
            switch (box){
                case 'A':
                    this.boxASelected = !this.boxASelected
                    break
                case 'B':
                    this.boxBSelected = !this.boxBSelected
                    break
                case 'C':
                    this.boxCSelected = !this.boxCSelected
                    break
            }
        }
    }
};

let app = Vue.createApp(data).mount('#styling');