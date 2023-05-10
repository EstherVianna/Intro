const app = Vue.createApp({
    data(){
        return{
            cart: [],
            premium: false
        }
    },
    methods:{
        updateCart(id, quantity){
            if (this.cart.length == quantity){
                quantity
                alert("Você adicinou todo estoque ao carrinho")
            }else{
            this.cart.push(id)
            }
        },
        remove(){
            if(this.cart.length < 1){
                this.cart.length
            }
            else{
                this.cart.pop()
            }
        }

}
});
