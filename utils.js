/*
* @Author: UnsignedByte
* @Date:   00:38:18, 30-Apr-2020
* @Last Modified by:   UnsignedByte
* @Last Modified time: 00:38:31, 30-Apr-2020
*/

//setinterval alternative
function interval(func, wait, times){
    var interv = function(w, t){
        return function(){
            if(typeof t === "undefined" || t-- > 0){
                setTimeout(interv, w);
                try{
                    func.call(null);
                }
                catch(e){
                    t = 0;
                    throw e.toString();
                }
            }
        };
    }(wait, times);

    setTimeout(interv, wait);
};
