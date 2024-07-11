/// <reference types="./@types/jquery" />
const width = $('.text-2').outerWidth(true);




$('document').ready(function (){
    $('.icon').on('click', function(){
        $('.nav').addClass('d-block' , 4000 )
            $('.nav').removeClass('d-none' , 2000 ) 
        
        })
       
          
        
    
    $('.icons').on('click' , function(){
        $('.nav').addClass('d-none' , 2000 ,)
    })
    
    
    
    $('.toggle').on('click' , function(){
        $('.inner').toggleClass('d-block',2000)
        $('.inner').toggleClass('d-none',2000)
      
    })
    $('.toggle-1').on('click' , function(){
        $('.inner-1').toggleClass('d-block',2000)
        $('.inner-1').toggleClass('d-none',2000)
      
    })
    $('.toggle-2').on('click' , function(){
        $('.inner-2').toggleClass('d-block',2000)
        $('.inner-2').toggleClass('d-none',2000)
      
    })
    $('.toggle-3').on('click' , function(){
        $('.inner-3').toggleClass('d-block',2000)
        $('.inner-3').toggleClass('d-none',2000)
      
    })
    
    let myData = new Date("oct 25 2025 23:59:59").getTime();
    let counter = setInterval(() => {
    let dateNow = new Date().getTime();
    
    let dateDiff =  myData - dateNow;
    
    
    let days = Math.floor(dateDiff / (1000  * 60 * 60 *24)) ;
    let hours = Math.floor((dateDiff % (1000  * 60 * 60 *24)) / (1000 *60 *60) ) ;
    let minutes = Math.floor((dateDiff % (1000  * 60 * 60 )) / (1000 * 60)) ;
    let seconds  = Math.floor((dateDiff % (1000  * 60)) / 1000) ;
    
    document.querySelector('.days').innerHTML =days;
    document.querySelector('.hours').innerHTML = hours;
    document.querySelector('.minutes').innerHTML =minutes ;
    document.querySelector('.seconds').innerHTML =seconds ;
    
    
    
    }, 1000);
    
    
    var $chers = document.getElementById('chers'),
     $textarea = document.getElementById('text'),
    
     $maxLength  = $textarea.getAttribute('maxLength');
    
    $textarea.oninput = function (){
        $chers.innerHTML = $maxLength - this.value.length;
    
    }
    
})

   
  
