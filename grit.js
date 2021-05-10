class Mkulima {
    constructor(farm, product, order) {
        this.farm = [],
            this.product = [],
            this.order = [];
    }
    addFarm(farmId, name, phone, farmer, address) {

        let myFarm = { farmId: farmId, name: name, phone: phone, address: address, farmer: farmer }
        this.farm.push(myFarm);
        return this.farm

    }
    removeFarm(farmId) {

        var farm1 = this.farm.find(farm1 => farm1.farmId === 645);
        return delete this.farm[farm1]



    }
    updateFarm(farmId, name, farmer, phone, address, ) {
        var updatedFarm = { farmId: farmId, name: name, phone: phone, address: address }
        this.farm.push(updatedFarm);
        return this.farm


    }
    getFarm(farmId) {
        var farms = this.farm.find(farms => farms.farmId === farmId);
        return farms


    }
    addProduct(productId, name, price) {
        var product = { productId: productId, name: name, price: price }
        this.product.push(product)
        return this.product
    }
    removeProduct(productId) {

        var myNet = this.product.indexOf(myNet => myNet.productId === [productId]);
        this.product.splice(0);
        return this.product
    }
    getProduct(productId) {
        var product1 = this.product.find(product1 => product1.productId);
        return this.product
    }
    updateProduct(productId, name, price) {
        var productS = { productId: productId, name: name, price: price }
        this.product.push(productS)
        return this.product
    }
    printProduct() {
        for (var k of this.product) {
            console.log([k.name, k.price])
        }
    }
    calculateOrderCost(productId, quantity) {
        var cost = this.product.find(cost => cost.productId === productId)
        return cost.price * quantity
    }
}
var mkulima = new Mkulima()
console.log(mkulima.addFarm(45, "solo", '0735476988', 233445, 'John'));
console.log(mkulima.removeFarm(65));
console.log(mkulima.updateFarm(5435, 'youth', '0734568709', 34527, 'Peter'));
console.log(mkulima.getFarm(656));
console.log(mkulima.addProduct('ryu', "rice", 300));
console.log(mkulima.getProduct('kj'));
console.log(mkulima.removeProduct('kj'));
console.log(mkulima.updateProduct('yams', 900));
mkulima.printProduct();
console.log(mkulima.calculateOrderCost('yuan', 70, 5))