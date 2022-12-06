  // ==========modal window===============
$(function(){
  // ============открытие модального окна============
  
  
    const modalCall = $('[data-modal]');

    modalCall.on("click",function(event){
      event.preventDefault();
      let $this = $(this);
      let modalId = $this.data('modal');
      $(modalId).addClass("show");
      $("body").addClass("no-scroll");

      setTimeout(function(){ // устанавливаем задержку , т.к. без нее резко все открывается
        $(modalId).find(".modal").css({//ищем цсс свойство которое нужно изменить
          transform: "rotateX(0)"
        });
       },200); // 200милисекунд задержка.

    });


      // ===============закрытие модального окна============

      const modalClose = $('[data-close]');
      
      modalClose.on("click",function(event){
        event.preventDefault();
        let $this= $(this);
        let closeId = $this.data('close');

        //возвращаем трасфорацию
        $(closeId).find(".modal").css({//ищем цсс свойство которое нужно изменить
          transform: "rotateX(90deg)"});

        setTimeout(function(){ // устанавливаем задержку , т.к. без нее резко все открывается
          $(closeId).removeClass('show');
          $('body').removeClass('no-scroll');
         },200); // 200милисекунд задержка.

      });


      // ===========закрытие модального окна по маске===========
       $(".section__window").on("click",function(event){
          //возвращаем трасфорацию
          let $this= $(this);
          $this.find(".modal").css({//ищем цсс свойство которое нужно изменить
          transform: "rotateX(90deg)"});        
          
          setTimeout(function(){
            $this.removeClass('show');
            $('body').removeClass('no-scroll');
          },200);

      });


      // =======исключение дочернего div элемента, чтоб не закрывалось окно при нажатии====

      $(".modal").on("click",function(event){
        event.stopPropagation();
      });

  
      //============плавный скролл дл id===========
        $('[data-scroll]').on("click",function(event){
          event.preventDefault();
          let elementId = $(this).data('scroll');           //получаем атрибут элемента по которому кликнули (который мы сами написали ранее)
          let elemenetOffset = $(elementId).offset().top;
          // получаем значение нужного нам идентификатра от верха при помощи offset().top
          console.log(elemenetOffset);
          $("html,body").animate({
            scrollTop:elemenetOffset
          }); 
          // при помощи метода анимэйт вызываем скролл топ на велечину которую узнали на предыдущем этапе
        });
});

