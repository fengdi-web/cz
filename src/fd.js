export default function fd(callback, time){
    let timer;
    return function (){
        clearTimeout(timer);
        let args = arguments
        timer = setTimeout(function(){
            callback.apply(null,args)
        },time)
    }
}