/**
 * Created by Administrator on 2017/4/25.
 */
document.addEventListener('DOMContentLoaded',function(){
    function reset(){
        window.onresize=r;
        function r(n){
            var innerWidth=window.innerWidth;
            document.querySelector('html').style.fontSize=0.15625*innerWidth+"px";
            if(innerWidth>window.screen.width&&n<=10){
                setTimeout(function(n){
                    r(++n);
                },100)
            }else{
                document.querySelector('body').style.opacity=1;
            }
        }
        setTimeout(function(){
            r(0);
        },100)
    }
    reset();
},false)