app.component("product-display", {
    props: {
        premium: {
            type: Boolean,
            required: true
        }
    },
    template:
        /*html*/
        `<div class="product-display">
            <div class="product-container">
                <div class="product-image">
                    <img v-bind:src="image"
                    :class="{outOfStock: !inStock}">
                </div>
                <div class="product-info">
                    <h1>{{ title }}</h1>
                    <product-details :details="details"></product-details>
                    <p v-if="inStock > 10">In Stock</p>
                    <p v-else-if="inStock <=10 && inStock >0">Almost sold out!!!</p>           
                    <p v-else>Out of stock</p>
                    <p v-if="inStock > 0">Shipping: {{ shipping }}</p>
                    <p v:show>{{ sale }}</p>
                <div class="color-circle"
                    v-for="(variant, index) in variants" 
                    :key="variant.id" 
                    @mouseover="updateVariant(index)"
                    :style="{ 'background-color': variant.color }">
                    </div>
                    <ul 
                    class="product-size">
                        <li 
                        v-for="size in sizes">
                                                {{ size }}</li>
                    </ul>
                </div>
                <button 
                class="button" 
                @click="addToCart" 
                :disabled="!inStock"
                :class="{disabledButton: !inStock}">
                Add to Cart</button>
                <button 
                class="button"
                @click="discart">
                Exclude</button>
            </div>
            <review-list v-if="reviews.length":reviews="reviews"></review-list>
            <review-form @reviewSubmitted="addReview"></review-form>
            </div>
        `,
        data(){
            return{
                product: "Socks",
                details: ["50% cotton", "30% wool", "20% polyester"],
                brand: "Vue Mastery",
                selectedVarient: 0,
                onSale: false,
                variants:[
                            {id: 1122,
                            color:"green",
                            image:"assets/images/socks_green.jpg",
                            quantity: 11
                            }, 
                            {id:1133,
                            color:"blue",
                            image:"assets/images/socks_blue.jpg",
                            quantity:3
                            }
                ],
                sizes: [33, 35, 37, 39],
                styles:{
                    backgroundColor: "red",
                    borderColor: "black",
                },
                reviews: []
            }
        },
        methods:{
            addToCart(){
                this.$emit('add-to-cart', this.variants[this.selectedVarient].id, this.variants[this.selectedVarient].quantity);

            },
            discart(){

                this.$emit('remove-from-cart', this.variants[this.selectedVarient].id)

            },
            updateVariant(index){
                this.selectedVarient = index;

            },
            addReview(review){
                this.reviews.push(review)

            }
        },
        computed:{
            title(){
                return `${this.brand} ${this.product}`;
            },
            image(){
                return this.variants[this.selectedVarient].image;
            },
            inStock(){
                return this.variants[this.selectedVarient].quantity;
            },
            sale(){
                if(this.onSale == true){
                return `${this.title} is on Sale 💵`;
                }
            },
            shipping(){
                if(this.premium){
                    return "Free";
                }
                return " $2,99 ";
            },

}
});