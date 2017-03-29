console.log("Octo 2");


function dive(lic, mCat){
    var oxyTank = 5;
    var totalCatch = mCat;
    return function (){
        oxyTank -= 1;
        totalCatch += lic;
        return [lic, mCat, oxyTank, totalCatch];
    }
}

var mat = new dive(3, 2);
