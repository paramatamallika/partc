function createwallet(){
    let balance=0;
    return {
        addmoney: function(amount){
            balance+=amount;
            console.log(amount+ "added");
        },
        checkbalance: function(){
            console.log("Balance", balance);
        }
    };
}
let mywallet = createwallet();
mywallet.addmoney(500);
mywallet.addmoney(200);
mywallet.checkbalance();