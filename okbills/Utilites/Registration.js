var Reg = {
	//1. Property
	//2. Methods/Functions
	getRndInteger:function(min,max){ //formal arg
		return  Math.floor(Math.random() * (max - min) ) + min;
	}
	
};

//exports.Details;
module.exports = Reg;