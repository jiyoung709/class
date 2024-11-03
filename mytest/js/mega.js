window.addEventListener('load', function(){
  megaMenu()
});


  function megaMenu() {
    let megaCloseClass = 'btn_mega_close'
    let btnMegaMenu = document.querySelector('.btn_megamenu');
    let dimmedElem = document.querySelector('#layoutDimmed');
    if(btnMegaMenu){
      btnMegaMenu.addEventListener('click', function(e){
        e.preventDefault();
         if(!this.classList.contains(megaCloseClass)){
            document.documentElement.classList.add('mega-opened');
            this.classList.add(megaCloseClass);
         } else {
          document.documentElement.classList.remove('mega-opened');
            this.classList.remove(megaCloseClass);
         }
     });
     if(dimmedElem){
      dimmedElem.addEventListener('click', function(e){
        document.documentElement.classList.remove('mega-opened');
        btnMegaMenu.classList.remove(megaCloseClass);
      })
     }
    }


    // var btnClose = document.querySelector('#aside .btnClose');
   
    // var elements = document.getElementsByClassName("test");
    // btnClose.addEventListener('click', function(){
    //     document.body.classList.remove('expand');
    // });
    // handleDimmed(dimmed, document.body, 'expand');
}

