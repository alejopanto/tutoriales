new Vue({
    el: '#app',

    data(){
        return{
            img: 'https://cryptologos.cc/logos/bitcoin-btc-logo.png',
            
            name: 'BitCoin',
            
            symbol: 'BTC',

            changePercent: 10,

            value: 0,

            color: 'f4f4f4',
        
            price: 8400,

            pricesWihtDay: [
                { day: "Lunes", value: 8000},
                { day: "Martes", value: 8400},
                { day: "Miercoles", value: 9200},
                { day: "Jueves", value: 9400},
                { day: "Viernes", value: 9600},
                { day: "Sabado", value: 9800},
                { day: "Domingo", value: 10000},
            ],

            showPrices: false,
        }
    }, 

    computed: {
        title(){
            return `${this.name} - ${this.symbol}`
        },

        convertedValue(){
            if (!this.value){
                return 0
            }

            return this.value / this.price
        }
    },

    watch: {
        showPrices(newVal, oldVal){
            console.log(newVal, oldVal)
        }
    },

    methods: {
        toggleShowPrices(){
            this.showPrices = !this.showPrices

            this.color = this.color.split('').reverse().join('')
        }    
    },
})