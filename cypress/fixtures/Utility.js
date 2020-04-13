class Utility{

    makeEmail() { 
        var strValues="abcdefg12345"; 
        var strEmail = ""; 
        var strTmp; 
        for (var i=0;i<10;i++) { 
        strTmp = strValues.charAt(Math.round(strValues.length*Math.random())); 
        strEmail = strEmail + strTmp; 
        } 
        strTmp = ""; 
        strEmail = strEmail + "@"; 
        for (var j=0;j<8;j++) { 
        strTmp = strValues.charAt(Math.round(strValues.length*Math.random())); 
        strEmail = strEmail + strTmp; 
        } 
        strEmail = strEmail + ".com" 
        return strEmail; 
        }

         getfirstname() {
            var randomChars = 'abcdefghijklmnopqrstuvwxyz';
            var result = '';
            for ( var i = 0; i < 5; i++ ) {
                result += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
            }
            return result;
        }
        
        getLastName() {
            var randomChars = 'abcdefghijklmnopqrstuvwxyz';
            var result = '';
            for ( var i = 0; i < 5; i++ ) {
                result += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
            }
            return result;
        }

}

export default Utility;