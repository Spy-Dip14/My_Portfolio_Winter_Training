$(document).ready(function(){
    const bars=document.querySelectorAll('.progress_bar');
    bars.forEach(function(bar){
        let percentage=bar.dataset.percent;
        let tooltip=bar.children[0];
        tooltip.innerText=percentage+'%';
        bar.style.width=percentage+'%';
        console.log(percentage);
    });

    var $wrapper=$('.portfolio_wrapper');
    $wrapper.isotope({
        filter :'*',
        layoutMode :'masonry',
        animationOptions :{
            duration :750,
            easing :'linear'
        }
    });

    let links=document.querySelectorAll('.tabs a');
    links.forEach(link =>{
        let selector=link.dataset.filter;
        link.addEventListener('click',function(c){
            c.preventDefault();
            $wrapper.isotope({
                filter :selector,
                layoutMode :'masonry',
                animationOptions :{
                    duration :750,
                    easing :'linear'
                }
            });
            
            links.forEach(link =>{
                link.classList.remove('active');
            });
            c.target.classList.add('active');
        });
    });

    $('.slider').slick({
        arrows:false,
        autoplay:true
    });
});