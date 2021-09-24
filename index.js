let blockValue;

let distanceFromHqInBlocks = function(blockValue){
    return Math.abs(blockValue - 42)
}

let distanceFromHqInFeet = function(blockValue){
    return Math.abs(blockValue - 42) * 264;
}

let distanceTravelledInFeet = function(begBlock, destBlock){
    return Math.abs(destBlock - begBlock) * 264;
}

let calculatesFarePrice = function(begBlock, destBlock){
    if ((Math.abs(destBlock - begBlock) * 264) >= 0 && (Math.abs(destBlock - begBlock) * 264) <= 400){
        return 0;
    } else if (Math.abs(destBlock - begBlock) * 264 >= 401 && Math.abs(destBlock - begBlock) * 264 <= 2000){
        return ((Math.abs(destBlock - begBlock) * 264) - 400) * 0.02;
    } else if (Math.abs(destBlock - begBlock) * 264 > 2000 && Math.abs(destBlock - begBlock) * 264 < 2500){
        return 25;
    } else if (Math.abs(destBlock - begBlock) * 264 >= 2500){
        return 'cannot travel that far'
    }
}