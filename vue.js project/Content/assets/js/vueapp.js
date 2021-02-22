//import cartitem from '../Content/components/cartitem.vue';

//export default {
//    components: {
//        'cart-item': cartitem
//    },
//    data() {
//        return {
//            component: 'cart-item'
//        }
//    }
//}
Vue.component('buttons', {   
    template: '<div class= "col-xl-7 col-lg-12 col-md-12 col-sm-12 mb-3" > <div class="card card-custom gutter-b shadow-lg boxshop"><div class="my-1"><a href="product.html" class="btn btn-O shoppingbutton shadow-sm">CONTINUE SHOPPING</a><span class="mr-3 btn btn-O basketbutton">PLACE ORDER</span></div> </div></div>'
});
var examp = new Vue({
/*div içerisinde id ile beliteceğimiz tanım adı.*/
    el: '#cart', 
    data: {
        cartProducts: [], // Sepetimiz ( Şu an boş )  
    /*test verilerimiz*/
        products: [
            {
                id: 0,
                name: "Chevron Tempered Glass Guard for Lenovo K6 Power", // Ürünün Adı
                img: "product1.jpeg", // Ürünün Fotoğrafı
                price: 20 // Ürününü Fiyatı
            },
            {
                id: 1,
                name: "Kajal Sarees Printed Bhagalpuri Art Silk Sari",
                img: "product2.jpg",
                price: 40
            },
            {
                id: 2,
                name: "Indian Polity 5 Edition",
                img: "product3.jpg",
                price: 60
            },
        ]
    },
    computed: {
        cartTotal() {
            let total = 0;
            this.cartProducts.forEach((item) => {
                total += parseFloat(item.price, 10);
            });
            return total.toFixed();
        }
    },
/* kullanılacak methodlar yer alıyor. */
    methods: { 

        addProduct: function (item) {
            if (this.cartProducts.length == 0) {
                this.cartProducts.push({
                    id: item.id,
                    name: item.name,
                    img: item.img,
                    price: item.price,
                    qty: 1
                });
            } else {
                var repeatItem = false;
                var pItem;

                for (pItem in this.cartProducts) {                /*aynı ürün gelir ise sadece adet artacaktır. ürün çeşit bilgisi değişmez.*/
                    if (this.cartProducts[pItem].id == item.id) {
                        this.cartProducts[pItem].qty = this.cartProducts[pItem].qty + 1;
                        repeatItem = true;
                    }
                }
                if (!repeatItem) {                /*yeni eklenecek ürünleri listeleriz.*/
                    this.cartProducts.push({
                        id: item.id,
                        name: item.name,
                        img: item.img,
                        price: item.price,
                        qty: 1
                    });
                }
            }
        },
        sourProduct: function (item) {
            if (this.cartProducts.length == 0) {
                this.cartProducts.push({
                    id: item.id,
                    name: item.name,
                    img: item.img,
                    price: item.price,
                    qty: 1
                });
            } else {
                var repeatItem = false;
                var pItem;

                for (pItem in this.cartProducts) {                /*aynı ürün gelir ise sadece adet azalacaktır. ürün çeşit bilgisi değişmez.*/
                    if (this.cartProducts[pItem].id == item.id) {
                        this.cartProducts[pItem].qty = this.cartProducts[pItem].qty - 1;
                        repeatItem = true;
                    }
                }
                if (!repeatItem) {                /*yeni eklenecek ürünleri listeleriz.*/
                    this.cartProducts.push({
                        id: item.id,
                        name: item.name,
                        img: item.img,
                        price: item.price,
                        qty: 1
                    });
                }
            }
        },
        /*butona tıklandığında ürün ile ilgili veriler kaldırılır.*/
        removeProduct: function (item) {
            this.cartProducts.$remove(item);
        }
    }
})