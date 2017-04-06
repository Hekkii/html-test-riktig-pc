window.addEventListener('scroll', function(){
   if(wScrollCurrent <= 0)
       element.style.top = '0px';
    else if(wScrollDiff > 0)
        element.style.top = (elTop > 0 ? 0 : elTop) + 'px';
    else if( wScrollDiff < 0){
        if( wScrollCurrent + wHeight >= dHeight - elHeight)
            element.style.top = ((elTop = wScrollCurrent + wHeight - dHeight) < 0 ? elTop : 0) + 'px';
        else 
            element.style.top = (Math.abs( elTop ) > elHeight ? -elHeight : elTop) + 'px';
    }
});