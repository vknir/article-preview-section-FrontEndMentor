let isDisplay=false


 
function displayToggle()
{
            if(window.innerWidth < 1024)
            {
                mobileViewToggle()
            }
            else
            {
                largeScreenViewToggle()
            }
    
    
}


 function mobileViewToggle()
 {
    const alternateShare=document.getElementById('alternate-share')
    const primaryShare=document.getElementById('primary-share')  

    if(!isDisplay)
    {
       
        primaryShare.style.display='none'

        alternateShare.style.display='flex'
    }
    else{
        alternateShare.style.display='none'

        primaryShare.style.display='flex'
    }
    isDisplay=!isDisplay

 }

 function largeScreenViewToggle()
 {
    const alternateShareImg=document.getElementById('alternate-share-img')
    const alternateShare=document.getElementById('alternate-share')
    
    if(!isDisplay){
        alternateShare.style.display='flex'
        alternateShareImg.style.display='none'
    }
    else{
        alternateShareImg.style.display='block'
        alternateShare.style.display='none'
    }

    isDisplay=!isDisplay
 }