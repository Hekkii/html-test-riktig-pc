function init(){
    window.addEventListener('scroll', function(e){
        var distanceY = window.pageYOffset ||   document.documentElement.scrollTop, 
        shrinkOn = 300, 
        header = document.querySelector("header");
        if(distanceY > shrinkOn){
            navbar-scroll.add(header,"smaller");
        }else{
            if(navbar-scroll.has(header, "smaller")){
                navbar-scroll.remove(header, "smaller");
            }
        }
    });
}

window.onload = init();