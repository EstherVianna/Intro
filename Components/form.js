app.component('review-form', {
    template:
    /*html*/
    `
    <form class="review-form" @submit.prevent="onSubmit" >
        <h3>Leave a review</h3>
        <label for="name">Name:</label>
        <input id="name"v-model="name" >
        <label for="review">Review:</label>      
        <textarea id="review" v-model="review"></textarea>
        <label for="rating">Rating:</label>
        <select id="rating" v-model="rating">
            <option>5 &star; &star; &star; &star; &star;</option>
            <option>4 &star; &star; &star; &star;</option>
            <option>3 &star; &star; &star;</option>
            <option>2 &star; &star;</option>
            <option>1 &star;</option>
        </select>
        <fieldset class="rec">
            <legend>Would you recommend this product?</legend>
            <div >
                <input type="radio" id="yes" name="recommend" value="yes"/>
                <label for="yes"> yes </label>

                <input type="radio" id="no" name="recommend" value="no"/>
                <label for="no"> no </label>
            </div>
        </fieldset>
            <input class="btn" type="submit" value="Submit">
    </form>
    `,
    data(){
        return{
            name: '',
            review: "",
            rating: "",
            recommend:""
        }
    },
    methods:{
        onSubmit(){

            if(this.name === "" || this.review === "" || this.rating === ""){
                alert("Review is incomplete, please fill out every field")
                return
            }

            let productReview = {
                name:this.name,
                review:this.review,
                rating: this.rating,
                recommend: this.recommend

            }
            this.$emit("reviewSubmitted", productReview)

            this.name = ""
            this.review = ""
            this.rating = ""
            this.recommend = ""
        }
    }
})