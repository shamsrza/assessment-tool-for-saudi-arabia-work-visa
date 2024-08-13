$(document).ready(function(){
  $("header .navigation li .tool").addClass('active');
  $("header .navigation-mobile li .tool").addClass('active');


  $(window).load(function(){
    var currentURL = window.location.href;
    var currentPageId = currentURL.split("#")[1];
    $("header .navigation li a").removeClass('active');
    
    if (window.location.href.indexOf("#") > -1) {
      $("main section").css({"display":"none"});
      $(`main #${currentPageId}`).css({"display":"block"});
      $(`header .navigation li a#${currentPageId}`).addClass('active');
    }else{
      $("main section").css({"display":"none"});
      $(`main section#assessment-tool`).css({"display":"block"});
      $("header .navigation li a#assessment-tool").addClass('active');
    }





// dropdown arrow icon
      $("div.bootstrap-select button[data-id='select1']").append("<div class='dd-icon'><img src='./assets/images/icons/dropdown-toggle-close-icon.png' id='dd-icon-close-1' alt='arrow'/><img style='display: none' src='./assets/images/icons/dropdown-toggle-open-icon.png' id='dd-icon-open-1' alt='arrow'/></div>");
      $("div.bootstrap-select button[data-id='select2']").append("<div class='dd-icon'><img src='./assets/images/icons/dropdown-toggle-close-icon.png' id='dd-icon-close-2' alt='arrow'/><img style='display: none' src='./assets/images/icons/dropdown-toggle-open-icon.png' id='dd-icon-open-2' alt='arrow'/></div>" );
      $("div.bootstrap-select button[data-id='select3']").append("<div class='dd-icon'><img src='./assets/images/icons/dropdown-toggle-close-icon.png' id='dd-icon-close-3' alt='arrow'/><img style='display: none' src='./assets/images/icons/dropdown-toggle-open-icon.png' id='dd-icon-open-3' alt='arrow'/></div>" );
      $("div.bootstrap-select button[data-id='select4']").append("<div class='dd-icon'><img src='./assets/images/icons/dropdown-toggle-close-icon.png' id='dd-icon-close-4' alt='arrow'/><img style='display: none' src='./assets/images/icons/dropdown-toggle-open-icon.png' id='dd-icon-open-4' alt='arrow'/></div>" );


      $("div.bootstrap-select button[data-id='select1']").attr('id', 'select1-btn');
      $("div.bootstrap-select button[data-id='select2']").attr('id', 'select2-btn');
      $("div.bootstrap-select button[data-id='select3']").attr('id', 'select3-btn');
      $("div.bootstrap-select button[data-id='select4']").attr('id', 'select4-btn');
      var specifiedElement1 = document.getElementById('select1-btn');
      var specifiedElement2 = document.getElementById('select2-btn');
      var specifiedElement3 = document.getElementById('select3-btn');
      var specifiedElement4 = document.getElementById('select4-btn');
    
      document.addEventListener('click', function(event) {
        var isClickInside1 = specifiedElement1.contains(event.target);
        var isClickInside2 = specifiedElement2.contains(event.target);
        var isClickInside3 = specifiedElement3.contains(event.target);
        var isClickInside4 = specifiedElement4.contains(event.target);
          if (isClickInside1) {
            $( "button[data-id='select1'] .dd-icon img").toggle();
          }else if(isClickInside2){
            $( "button[data-id='select2'] .dd-icon img").toggle();
          }else if(isClickInside3){
            $( "button[data-id='select3'] .dd-icon img").toggle();
          }else if(isClickInside4){
            $( "button[data-id='select4'] .dd-icon img").toggle();
          } else{
              $( "#dd-icon-open-1" ).css('display','none');
              $( "#dd-icon-close-1" ).css('display','block');
              $( "#dd-icon-open-2" ).css('display','none');
              $( "#dd-icon-close-2" ).css('display','block');
              $( "#dd-icon-open-3" ).css('display','none');
              $( "#dd-icon-close-3" ).css('display','block');
              $( "#dd-icon-open-4" ).css('display','none');
              $( "#dd-icon-close-4" ).css('display','block');
          }
      });
  });


  
    $('form').on('keyup keypress', function(e) {
      var keyCode = e.keyCode || e.which;
      if (keyCode === 13) { 
        e.preventDefault();
        return false;
      }
    });

    // onclick nav
    $('a.arabic').on('click', function(e){
          e.preventDefault();

        var currentURL = window.location.href;
        var currentPageId = currentURL.split("#")[1];

        if (window.location.href.indexOf("#") > -1) {
          location.replace(`./index_arabic.html#${currentPageId}`);
        }else{
          location.replace("./index_arabic.html");
        }

        return false;
    })

    $("header .navigation li a").on('click', function(e){
      e.preventDefault();

      var navId = $(this).attr('id')
      location.href = `#${navId}`;

      console.log(navId); 
      $("main section").css({"display":"none"});
      $(`main #${navId}`).css({"display":"block"});

      // if(navId === 'criteria'){
      //   $('html, body').show();
      // }
      return false;

    });

    $("#go-to-criteria").on('click', function(e){
      e.preventDefault();
      location.href ="#criteria";

      $("main section").css({"display":"none"});
      $("main #criteria").css({"display":"block"});

      $(".faq").removeClass("active");
      $(".criteria").addClass("active");
    });

    var $link_menu = $("header .navigation li a");
    $link_menu.on('click', function() {
      $link_menu.removeClass('active');
      $(this).addClass('active');
    });

    // onclick mobile nav

    $("header .navigation-mobile li a").on('click', function(e){
      var navIdMob = $(this).attr('id')
      location.href = `#${navIdMob}`;
      // console.log(navIdMob); 
      $("main section").css({"display":"none"});
      $(`main #${navIdMob}`).css({"display":"block"});
      $(".menu-mobile").css("transform", "translateX(100%)");

      return false;
    });

    var $link_menu_mobile = $("header .navigation-mobile li a");
    $link_menu_mobile.on('click', function() {
      $link_menu_mobile.removeClass('active');
      $(this).addClass('active');
    });
    $(".hamburger img").on('click', function(e){
      e.preventDefault();
      $(".menu-mobile").css({"display":"block", "transform": "translateX(0%)"});
    });

    $(".close-icon img").on('click', function(e){
      e.preventDefault();
      $(".menu-mobile").css("transform", "translateX(100%)");
    });



// ----  OCCUPATION -----

    //dropdown/select onchange
    $("#select1").on("change", function(){
      $(".desc-occupation").css({'display' : 'flex', 'flex-direction':'row', 'justify-content':'left', 'align-items':'center', 'gap':'8px', 'margin-top':'24px'});
      $(".submit-btn-occupation button").removeAttr("disabled");

      if($(".selectpicker#select1").val() === "High"){
        $(".occupation-span").html('high').css('font-weight','bold');
      }else if($(".selectpicker#select1").val() === "Medium"){
        $(".occupation-span").html('medium').css('font-weight','bold');
      }else{
        $(".occupation-span").html('low').css('font-weight','bold');
      }
  });

      //continue button onclick - on occupation page
      $(".submit-btn-occupation button").on('click', function(){
        $(".welcome p").css("display", "none");
        $(".border-line").css("min-height", "42vh");
        $(".dropdown-occupation").css('display','none');
        $(".submit-btn-occupation button").css('display','none');
        $(".selectpicker#select4").selectpicker('val', '');
        $(".submit-btn-sector button").attr('disabled', 'disabled');

        if($(".selectpicker#select1").val() === "High"){
          // high
          $(".occupation-span").html('high').css('font-weight','bold');

          $(".dropdown-sector").css('display','block');
          $(".submit-btn-sector button").css('display','block');

          $(".desc-sector").css('display','none');

          $(".input-age").css('display','none');
          $(".submit-btn-age").css('display','none');
          $(".submit-btn-age button").css('display','none');
        }else if($(".selectpicker#select1").val() === "Medium"){
          // Medium
          $(".dropdown-sector").css('display','block');
          $(".submit-btn-sector button").css('display','block');
          $(".desc-sector").css('display','none');
        }else{
          // Low
          $(".dropdown-sector").css('display','block');
          $(".submit-btn-sector button").css('display','block');
          $(".desc-sector").css('display','none');

        }
        
      })

      // SECTOR GROUP
      $("#select4").on("change", function(){

        if($("selectpicker#select4").val() === ""){
          $(".submit-btn-sector button").attr("disabled","disabled");
        }else{
          $(".submit-btn-sector button").removeAttr("disabled");
        }
    });

    $(".submit-btn-sector button").on('click', function(){     
      if($(".selectpicker#select1").val() === "High"){
        // High
        $(".input-salary").css('display','block');
        $(".dropdown-sector").css('display','none');
        $(".desc-sector").css('display','none');
        $(".cumulative-points#salary").css({'display':'block', 'font-family': 'Open Sans Condensed', 'font-size': '18px', 'font-style' : 'normal', 'font-weight' : '400', 'line-height' : '26px'});
        $(".cumulative-points#salary").css('visibility','hidden');
        $(".submit-btn-sector button").css('display','none');
        $(".submit-btn-salary").css('display','flex');
        $(".submit-btn-salary button").css('display','block');
        $(".input-age").css('display','none');
        $(".submit-btn-age").css('display','none');
        $(".submit-btn-age button").css('display','none');
      }else if($(".selectpicker#select1").val() === "Medium"){
          // Medium
          $("#salary-input").val("");
          $(".desc-salary").css('display','none');

            $(".dropdown-sector").css('display','none');
            $(".submit-btn-sector button").css('display','none');
            $(".input-salary").css('display','block');    
            $(".submit-btn-salary").css({'display':'flex', 'justify-content' : 'space-between'});
            $(".submit-btn-salary button").css('display','block');
            $(".submit-btn-salary button").attr('disabled','disabled');
            $('.sum-btn span').css('display','block');   
            $(".cumulative-points#salary").css({"display":"flex", "flex-direction":"row", "justify-content":"left", "align-items":"center",'gap':'5px'});
            $(".cumulative-points#salary").css("visibility","hidden");
      }else if($(".selectpicker#select1").val() === "Low"){
          // Low
          $(".dropdown-sector").css('display','none');
          $(".desc-sector").css('display','none');
          $(".submit-btn-sector button").css('display','none');
          $(".input-age").css('display','block');
          $(".submit-btn-age").css('display','flex');
          $(".submit-btn-age button").css('display','block');
      }
    });

    // last step btn - sector part
    $(".back-to-last-step#sector").click(function(e){
      e.preventDefault();
      $(".dropdown-occupation").css('display','block');
      $(".dropdown-sector").css('display','none'); 
      $(".submit-btn-occupation button").css('display','block');

    });

    

       // ----  AGE -----

      //  low
      $(".input-age #age-input").on("input", function(){
        $(".desc-age").css({'display' : 'flex', 'flex-direction':'row', 'justify-content':'left', 'align-items':'center', 'gap':'8px', 'margin-top':'24px'});
        var ageValue = $(".input-age #age-input").val(); 
        if(ageValue === ""){
          $(".desc-age p").html("<span>0</span>");
          $(".desc-age p span").css('display','none');
          $(".desc-age img").css('display','none');
        }else if(ageValue < 18 || ageValue > 60){
          $(".desc-age p").css('display','block');
          $(".desc-age p").html("Lorem ipsum <b>lorem</b> lorem ipsum dolor sit amet consectetur adipisicing");
          $(".desc-age img").attr('src','./assets/images/icons/salary-icon-negative.png').css({'display':'block','border':'1px solid #C53532', 'border-radius': '50% 50%', 'width': '28px', 'height':'28px','padding':'6px'});
          $(".submit-btn-age button").attr('disabled','disabled');
        }else {
          $(".desc-age p").css('display','block');
          $(".desc-age p").html("Lorem ipsum <b>lorem</b> lorem ipsum dolor sit amet consectetur adipisicing");
          $(".desc-age img").attr('src','./assets/images/icons/salary-icon-positive.png').css({'display':'block','border':'none', 'padding': '0'});
          $(".submit-btn-age button").removeAttr('disabled');
        }
      })

      $(".input-age .submit-btn-age button").on('click', function(){
        $(".input-age").css('display','none');
        $(".input-age .submit-btn-age button").css('display','none');
        
        var id = $("#select1").children(":selected").attr("id");
        if(parseInt(id) ===  962301 || parseInt(id) === 962302 || parseInt(id) === 962303 || parseInt(id) === 962401 || parseInt(id) === 962402 || parseInt(id) === 962901 || parseInt(id) === 962902){
          $(".input-svp").css('display','block');    
          $(".submit-btn-svp").css('display','block');   
        }else{
          $("#final-page").css({"display": "flex", "flex-direction": "column", "justify-content": "center", "align-items": "center"});
          $(".final-title").css('display','block');
          $(".final-cumulative-points").css('display','none');
          if($(".input-age #age-input").val() < 18 || $("#age-input").val() > 60){
            $(".final-title").html("Lorem ipsum dolor sit amet consectetur adipisicing").css("margin-bottom","50px");
          }else {
            $(".final-title").html("Lorem ipsum dolor sit amet consectetur adipisicing!").css("margin-bottom","50px");
          }
        }
      });

    // last step btn - age part
    $(".input-age .back-to-last-step").click(function(e){
      e.preventDefault();
      $(".dropdown-occupation").css('display','block');
      $(".input-age").css('display','none');
      $(".submit-btn-occupation button").css('display','block');
      $(".desc-occupation").css('display','flex');
    });


      // high
      $(".input-age-high #age-input").on("input", function(){
        $(".desc-age").css({'display' : 'flex', 'flex-direction':'row', 'justify-content':'left', 'align-items':'center', 'gap':'8px', 'margin-top':'24px'});
        var ageValue = $(".input-age-high #age-input").val(); 
        if(ageValue === ""){
          $(".desc-age p").html("<span>0</span>");
          $(".desc-age p span").css('display','none');
          $(".desc-age img").css('display','none');
        }else if(ageValue < 18){
          $(".desc-age p").css('display','block');
          $(".desc-age p").html("Lorem ipsum  <b>dolor</b> sit amet consectetur adipisicing");
          $(".desc-age img").attr('src','./assets/images/icons/salary-icon-negative.png').css({'display':'block','border':'1px solid #C53532', 'border-radius': '50% 50%', 'width': '28px', 'height':'28px','padding':'6px'});
          $(".submit-btn-age button").attr('disabled','disabled');
        }else if(ageValue >= 30){
          $(".desc-age p").css('display','block');
          $(".desc-age p").html("Lorem ipsum  <b>dolor</b> sit amet consectetur adipisicing");
          $(".desc-age img").attr('src','./assets/images/icons/salary-icon-positive.png').css({'display':'block','border':'none', 'padding': '0'});
          $(".submit-btn-age button").removeAttr('disabled');
        }else{
          $(".desc-age p").css('display','block');
          $(".desc-age p").html("Lorem ipsum  <b>dolor</b> sit amet consectetur adipisicing");
          $(".desc-age img").attr('src','./assets/images/icons/salary-icon-positive.png').css({'display':'block','border':'none', 'padding': '0'});
          $(".submit-btn-age button").removeAttr('disabled');
        }
      })

      $(".input-age-high .back-to-last-step").on('click', function(){
        $('.input-age-high').css("display","none");
        $('.dropdown-occupation').css("display","none");
        $(".input-experience").css('display','block');
      })



      $(".input-age-high .submit-btn-age button").on('click', function(){
        $(".input-age-high").css('display','none');
        $(".input-age-high .submit-btn-age button").css('display','none');
        $(".final").css('display','block');

        var ageInputHS = $(".input-age-high input#age-input");

        if(ageInputHS.val() >= 30 ){
          $("#final-page").css({"display": "flex", "flex-direction": "column", "justify-content": "center", "align-items": "center"});
          $(".final-title").css('display','block');
          $(".final-cumulative-points").css('display','none');
          $(".final-title").html("Lorem ipsum  <b>dolor</b> sit amet consectetur adipisicing!").css("margin-bottom","50px");
          $("#final-page img").attr('src','./assets/images/icons/final-positive.png');
        }else if(ageInputHS.val() < 30){
          $("#final-page").css({"display": "flex", "flex-direction": "column", "justify-content": "center", "align-items": "center"});
          $(".final-title").css('display','block');
          $(".final-cumulative-points").css('display','none');
          $(".final-title").html("Lorem ipsum  <b>dolor</b> sit amet consectetur adipisicing!").css("margin-bottom","50px");
          $("#final-page img").attr('src','./assets/images/icons/final-positive.png');
        } 
      });


       // ----  SVP TEST -----
       $('#svp-form input').on('change', function() {
        $(".submit-btn-svp button").removeAttr("disabled");
      });


    // continue btn - svp part
      $(".submit-btn-svp button").on('click', function(){
        $("#final-page").css({"display": "flex", "flex-direction": "column", "justify-content": "center", "align-items": "center"});
        $(".move-to-mid-visa").css('display','none'); 
        $(".input-svp").css('display','none');
        $(".submit-btn-svp").css('display','none');
        $(".final").css('display','block');

        if($('input[name=radioName]:checked', '#svp-form').val() === 'yes'){
            if($(".selectpicker#select1").val() === "High"){
              if($("#salary-input").val() >= 3500){
                $(".final-title").html("Lorem ipsum sit amet consectetur adipisicing!").css("margin-bottom","50px");
              }else{
                $(".final-title").html("Lorem ipsum sit amet consectetur adipisicing!").css("margin-bottom","50px");
              }
            }else if($(".selectpicker#select1").val() === "Medium"){

              if($("#salary-input").val() >= 3500){
                $(".final-title").html("Lorem ipsum sit amet consectetur adipisicing!").css("margin-bottom","50px");
              }else{
                $(".final-title").html("Lorem ipsu sit amet consectetur adipisicing!").css("margin-bottom","50px");
              }

            }else if($(".selectpicker#select1").val() === "Low"){
              $(".final-title").html("Lorem ipsum sit amet consectetur adipisicing!").css("margin-bottom","50px");
            }
            $("#final-page img").attr('src','./assets/images/icons/final-positive.png');
            $(".final-cumulative-points").css('display','none');
        }else if($('input[name=radioName]:checked', '#svp-form').val() === 'no'){

            if($(".selectpicker#select1").val() === "High"){
              if($("#salary-input").val() >= 3500){
                $(".final-title").html("Lorem ipsum sit amet consectetur adipisicing").css("margin-bottom","50px");
              }else{
                $(".final-title").html("Lorem ipsum dolor sit amet consectetur adipisicing").css("margin-bottom","50px");
              }
            }else if($(".selectpicker#select1").val() === "Medium"){
              if($("#salary-input").val() >= 3500){
                $(".final-title").html("Lorem ipsum sit amet consectetur adipisicing").css("margin-bottom","50px");
              }else{
                $(".final-title").html("Lorem ipsum sit amet consectetur adipisicing").css("margin-bottom","50px");
              }
            }else if($(".selectpicker#select1").val() === "Low"){
              $(".final-title").html("Lorem ipsum sit amet consectetur adipisicing").css("margin-bottom","50px");
            }
            $("#final-page img").attr('src','./assets/images/icons/final-negative.png');
            $(".final-cumulative-points").css('display','none');
        }

      });

    // last step btn - svp part
    $(".back-to-last-step#svp").click(function(e){
      e.preventDefault();
      if($(".selectpicker#select1").val() === "High"){
        $(".input-salary").css('display','block');
        $(".input-svp").css('display','none');
        $(".submit-btn-salary button").css('display','block');
        $(".desc-salary").css('display','flex'); 
        $(".submit-btn-svp button").attr('disabled','disabled');

      } else if($(".selectpicker#select1").val() === "Medium"){
        $(".input-salary").css('display','block');
        $(".input-svp").css('display','none');
        $(".submit-btn-salary button").css('display','block');
        $(".desc-salary").css('display','flex'); 
      }else if($(".selectpicker#select1").val() === "Low"){
        $(".input-age").css('display','block');
        $(".input-svp").css('display','none');
        $(".submit-btn-age button").css('display','block');
        $(".desc-age").css('display','flex');      
      }
    });

      // ----  SALARY -----
    //input onchange

    const sectorRanges = [
      { sector: 'group-1', min: '11000', max: '30000'},
      { sector: 'group-2', min: '5000', max: '18000'},
      { sector: 'group-3', min: '6000', max: '25000'},
      { sector: 'group-4', min: '6000', max: '20000'},
      { sector: 'group-5', min: '5000', max: '19000'},
      { sector: 'group-6', min: '5000', max: '18000'},
      { sector: 'group-7', min: '5000', max: '17000'},
      { sector: 'group-8', min: '12000', max: '30000'},
      { sector: 'group-9', min: '5000', max: '18000'},
      { sector: 'group-10', min: '6000', max: '23000'},
      { sector: 'group-11', min: '5000', max: '15000'},
      { sector: 'group-12', min: '5000', max: '15000'},
      { sector: 'group-13', min: '5000', max: '19000'},
      { sector: 'group-14', min: '5000', max: '19000'},
    ]

    $("#salary-input").on("input", function(){
        $(".desc-salary").css({'display' : 'flex', 'flex-direction':'row', 'justify-content':'left', 'align-items':'center', 'gap':'8px', 'margin-top':'24px'});
        var salaryValue = $("#salary-input").val(); 
        $('.desc-salary span').css('display','none');
        $(".submit-btn-salary button").attr('disabled','disabled');

        for( i = 0; i <= sectorRanges.length; i++){
          if($(".selectpicker#select1").val() === "High"){
            if($(".selectpicker#select4").val() === sectorRanges[i].sector){
              if(salaryValue === ""){
                $(".desc-salary p").html("<span>0</span>");
                $(".desc-salary p span").css('display','none');
                $(".desc-salary img").css('display','none');
                $(".cumulative-points#salary").css("visibility","hidden");
              }else if(salaryValue >= parseInt(sectorRanges[i].max)){
                $(".desc-salary p").html("Lorem ipsum  <b>dolor</b> sit amet consectetur adipisicing visa and gets <span>50</span> <span>points</span>, please continue with the application");
                $(".desc-salary p span").css('font-weight','bold');
                $(".desc-salary img").attr('src','./assets/images/icons/salary-icon-positive.png').css({'display':'block','border':'none', 'padding': '0'});
                $(".submit-btn-salary button").removeAttr("disabled");
                $(".cumulative-points#salary").css("visibility","visible");
                $(".cumulative-points span:first").html($(".desc-salary p span:first").html());
              }else if(salaryValue >= parseInt(sectorRanges[i].min)){
                $(".desc-salary p").html("Lorem ipsum  <b>dolor</b> sit amet consectetur adipisicing and gets <span>25</span> <span>points</span>");
                $(".desc-salary p span").css('font-weight','bold');
                $(".desc-salary img").attr('src','./assets/images/icons/salary-icon-positive.png').css({'display':'block','border':'none', 'padding': '0'});
                $(".submit-btn-salary button").removeAttr("disabled");
                $(".cumulative-points#salary").css("visibility","visible");
                $(".cumulative-points#salary").css({'display':'flex', 'flex-direction':'row', 'justify-content':'left', 'align-items':'center', 'gap': '5px'});
                $(".cumulative-points span:first").html($(".desc-salary p span:first").html());

              }else if(salaryValue >= 3500 && salaryValue < parseInt(sectorRanges[i].min)){
                // mid skill visa
                $(".desc-salary p").html("Candidate is eligible for applying <b>mid</b> skilled visa");
                $(".desc-salary p span").css('font-weight','bold');
                $(".desc-salary img").attr('src','./assets/images/icons/salary-icon-positive.png').css({'display':'block','border':'none', 'padding': '0'});
                $(".submit-btn-salary button").removeAttr("disabled");
                $(".cumulative-points#salary").css("visibility","hidden");
                $(".cumulative-points#salary").css({'display':'flex', 'flex-direction':'row', 'justify-content':'left', 'align-items':'center', 'gap': '5px'});
              }else if(salaryValue < 3500){
                // low skill visa
                $('.desc-salary p').html("Lorem ipsum  <b>dolor</b> sit amet consectetur adipisicing skill visa application<span></span>");
                $(".desc-salary img").attr('src','./assets/images/icons/salary-icon-positive.png');
                $(".submit-btn-salary button").removeAttr('disabled');
                $('.desc-salary span').css('display','none');
                $('.desc-salary p').css('display','block');
                $(".desc-salary p span").html("0");
                $(".desc-salary p span").css('display','none');
                $(".cumulative-points#salary").css('display','flex');
                $(".cumulative-points#salary").css("visibility","hidden");
              }

            }
          }else if ($(".selectpicker#select1").val() === "Medium"){
            if(salaryValue === ""){
              $(".desc-salary p").html("<span>0</span>");
              $(".desc-salary p span").css('display','none');
              $(".desc-salary img").css('display','none');
              var id = $("#select1").children(":selected").attr("id");
              if(parseInt(id) < 411001){
                $(".cumulative-points#salary").css("visibility","hidden");
              }
            }else if(salaryValue >= parseInt(sectorRanges[i].max)){
            $(".desc-salary p").css('display','block');
            $(".cumulative-points#salary").css({"display":"flex", "flex-direction":"row", "justify-content":"left", "align-items":"center",'gap':'5px'});
            $(".cumulative-points#salary").css("visibility","visible");
            $('.desc-salary p').html("Lorem ipsum with <b>mid</b> consectetur adipisicing<span></span>");
            $(".submit-btn-salary button").removeAttr("disabled");
            $(".sum-btn#mid-salary").css("display","none");
            $(".cumulative-points#salary").css("visibility","hidden");
            }else if(salaryValue >= parseInt(sectorRanges[i].min)){
              $(".desc-salary p").css('display','block');
              $(".cumulative-points#salary").css({"display":"flex", "flex-direction":"row", "justify-content":"left", "align-items":"center",'gap':'5px'});
              $(".cumulative-points#salary").css("visibility","visible");
              
                $('.desc-salary p').html("Lorem ipsum <b>mid</b> consectetur adipisicing<span></span>");
                $(".submit-btn-salary button").removeAttr("disabled");
                $(".sum-btn#mid-salary").css("display","none");
                $(".cumulative-points#salary").css("visibility","hidden");
            }else if(salaryValue >= 3500 && salaryValue < parseInt(sectorRanges[i].min)){
              $(".desc-salary p").css('display','block');
              $(".cumulative-points#salary").css({"display":"flex", "flex-direction":"row", "justify-content":"left", "align-items":"center",'gap':'5px'});
              $('.desc-salary p').html("Lorem ipsumh <b>mid</b> consectetur adipisicing<span></span>");
              $(".submit-btn-salary button").removeAttr("disabled");
              $(".sum-btn#mid-salary").css("display","none");
              $(".cumulative-points#salary").css("visibility","hidden");
            }else if(salaryValue < 3500){
              $(".desc-salary img").css('display','block');
              $('.desc-salary p').html("Lorem ipsum with <b>low</b> consectetur adipisicing<span></span>");
              $(".desc-salary img").attr('src','./assets/images/icons/salary-icon-positive.png');
              $(".submit-btn-salary button").removeAttr('disabled');
              $('.desc-salary span').css('display','none');
              $('.desc-salary p').css('display','block');
              $(".desc-salary p span").html("0");
              $(".desc-salary p span").css('display','none');
              $(".cumulative-points#salary").css('display','flex');
              $(".cumulative-points#salary").css("visibility","hidden");

              if (window.matchMedia('(max-width: 768px)').matches){
                $(".desc-salary span").css('font-size', '18px');
                $(".desc-salary span a").css('font-size', '18px');
              }
            }
          }
        }

        $(".cumulative-points span:first").html($(".desc-salary p span:first").html());
        
    });

      //continue button onclick - on salary level page
      $(".submit-btn-salary button").on('click', function(){
        $(".input-salary").css('display','none');
        $(".submit-btn-salary button").css('display','none');
        $(".salary-page-buttons").css('display','flex');

        var salaryValue = $("#salary-input").val(); 

        if($(".selectpicker#select1").val() === "High"){

          $(".input-svp").css('display','block');
          $(".svp-title").css('display','none');
          $(".svp-title-high").css('display','block');
          $(".submit-btn-svp").css('display','block');


          if(parseInt($(".cumulative-points#salary span:first").html()) >= 25){
            $(".dropdown-education").css('display','block');
            $(".cumulative-points").css('display','block');
            $(".cumulative-points#edu span:first").html( (parseInt($(".cumulative-points#salary span:first").html())).toString());
            $(".submit-btn-education button").attr("disabled", "disabled");
            $(".selectpicker#select2").selectpicker('val', '');
            $(".selectpicker#select3").selectpicker('val', '');
            $(".desc-education").css('display' , 'none');
            $(".school-dd").css('display' , 'none');

            $(".input-svp").css('display','none');
            $(".svp-title-high").css('display','none');
            $(".submit-btn-svp").css('display','none');
          }
        }else if($(".selectpicker#select1").val() === "Medium"){
          $(".cumulative-points#salary").css({'display':'flex', 'flex-direction':'row', 'justify-content':'left', 'align-items':'center', 'gap': '5px'});
          $(".desc-education").css('display' , 'none');

          $(".master").css('display','none');
          $(".doctorate").css('display','none');
          $(".no-education").css('display','none');
          $(".selectpicker#select2").selectpicker('val', '');

          $(".input-svp").css('display','block');
          $(".svp-title").css('display','block');
          $(".svp-title-mid").css('display','none');
          $(".submit-btn-svp").css('display','block');
          $(".cumulative-points#salary").css('visibility','hidden');


            $(".cumulative-points#edu span:first").html( (parseInt($(".cumulative-points#salary span:first").html())).toString());

        }
      })


    // last step btn - salary part
    $(".back-to-last-step#salary").click(function(e){
      e.preventDefault();
      $(".dropdown-sector").css('display','block');
      $(".input-salary").css('display','none');
      $(".submit-btn-sector button").css('display','block');
      $(".desc-sector").css('display','flex');

      $(".cumulative-points#salary").css({'display':'flex', 'flex-direction':'row', 'justify-content':'left', 'align-items':'center', 'gap': '5px'});

    });

    // ----  EDUCATION -----

    // 1st dropdown
    $("#select2").on("change", function(){
      var dd1 = $(".selectpicker#select2").val();
      var dd2 = $(".selectpicker#select3").val();
      var slr = $(".cumulative-points#salary span:first").html();
      $(".desc-education").css({'display' : 'flex', 'flex-direction':'row', 'justify-content':'left', 'align-items':'center', 'gap':'8px', 'margin-top':'24px'});
      $(".desc-education:nth-child(2)").html('Lorem ipsum <span>25</span> <span>points</span> consectetur adipisicing selection'); 
      $(".desc-education p span").css('font-weight','bold');
      $(".desc-education:nth-child(3)").css('display','none');

      if(dd1 === "bachelor" || dd1 === "master"){
        $(".desc-education span").css('display','none');
        $(".desc-education p").css('display','block');
        $(".desc-education img").attr('src','./assets/images/icons/education-icon-positive.png');

        if($(".selectpicker#select1").val() === "High"){
          var id = $("#select1").children(":selected").attr("id");

          if(id.startsWith("14") || id.startsWith("3")){
            $(".school-dd").css('display','none');
            $(".desc-education p").html('Lorem ipsum <span>50</span> <span>points</span> consectetur adipisicing selection'); 
            $(".cumulative-points#edu span:first").html( ((parseInt(slr)) + 50).toString());

          }else{
            $(".school-dd").css('display','block');
            $(".selectpicker#select3").selectpicker('val', '');
            $(".desc-education p").html('Lorem ipsum <span>25</span> <span>points</span> consectetur adipisicing selection'); 
            $(".cumulative-points#edu span:first").html( ((parseInt(slr)) + 25).toString());
            $(".submit-btn-education button").attr("disabled","disabled");
          }

          $(".desc-education p span").css('font-weight','bold');

        }else if($(".selectpicker#select1").val() === "Medium"){
          $(".school-dd").css('display','none');
          $(".desc-education p").html('Lorem ipsum <span>50</span> <span>points</span> consectetur adipisicing selection'); 
          $(".desc-education p span").css('font-weight','bold');
          $(".cumulative-points#edu span:first").html( ((parseInt(slr)) + 50).toString());
          $(".submit-btn-education button").removeAttr("disabled");
        }
      }else{
        $(".school-dd").css('display','none');
        $(".desc-education img").attr('src','./assets/images/icons/education-icon-positive.png');
        $(".desc-education p").css('display','block');
        if($(".selectpicker#select1").val() === "High"){
          if(dd1 === "doctorate"){
            $(".desc-education p").html('Lorem ipsum <span>50</span> <span>points</span>,consectetur adipisicing application'); 
            $(".cumulative-points#edu span:first").html( ((parseInt(slr)) + 50).toString());
          }else{

          var id = $("#select1").children(":selected").attr("id");
          if(id.startsWith("14") || id.startsWith("3")){
            if(dd1 === "diploma"){
              $(".desc-education p").html('Lorem ipsum <span>25</span> <span>points</span>, consectetur adipisicing application'); 
              $(".cumulative-points#edu span:first").html( ((parseInt(slr)) + 25).toString());
            }else{
              $(".desc-education p").html('CLOrem ipsum <span>0</span> <span>points</span>, consectetur adipisicing the application'); 
              $(".cumulative-points#edu span:first").html( ((parseInt(slr).toString())));
            }
          }else{
            $(".desc-education p").html('Lorem ipsum <span>0</span> <span>points</span>, consectetur adipisicing application'); 
            $(".cumulative-points#edu span:first").html( ((parseInt(slr).toString())));
          }

          }

          $(".desc-education p span").css('font-weight','bold');
          

        }else if($(".selectpicker#select1").val() === "Medium"){

          if(dd1 === "diploma"){
            $(".desc-education p").html('Lorem ipsum <span>25</span> <span>points</span>, consectetur adipisicing application'); 
            $(".desc-education p span").css('font-weight','bold');
            $(".cumulative-points#edu span:first").html( ((parseInt(slr)) + 25).toString());
          }else if (dd1 === "high-school"){
            $(".desc-education p").html('Lorem ipsum <span>0</span> <span>points</span>, pconsectetur adipisicing application'); 
            $(".desc-education p span").css('font-weight','bold');
            $(".cumulative-points#edu span:first").html( ((parseInt(slr).toString())));
          }
          
        }

        $(".submit-btn-education button").removeAttr("disabled");
      }

    });

    // 2nd dropdown
    $("#select3").on("change", function(){
      var dd1 = $(".selectpicker#select2").val();
      var dd2 = $(".selectpicker#select3").val();
      var slr = $(".cumulative-points#salary span:first").html();

      $(".submit-btn-education button").removeAttr("disabled");

      if(dd1 === "bachelor" || dd1 === "master"){
        $(".school-dd").css('display','block');
        $(".desc-education p").html('Lorem ipsum <span>25</span> <span>points</span> consectetur adipisicing selection'); 
        $(".cumulative-points#edu span:first").html( ((parseInt(slr)) + 25).toString());
        $(".desc-education p span").css('font-weight','bold');
        $(".desc-education img").attr('src','./assets/images/icons/education-icon-positive.png');
        $(".desc-education:nth-child(3)").css('display','none');
        $(".submit-btn-education button").attr("disabled", "disabled");

        if(dd2 === "Other"){
          $(".desc-education p").html('Lorem ipsum <span>25</span> <span>points</span> consectetur adipisicing'); 
          $(".desc-education p span").css('font-weight','bold');
          $(".cumulative-points#edu span:first").html( ((parseInt(slr)) + 25).toString());
          $(".submit-btn-education button").removeAttr("disabled");
        }else {
          $(".desc-education p").html('Lorem ipsum <span>50</span> <span>points</span> consectetur adipisicing'); 
          $(".desc-education p span").css('font-weight','bold');
          $(".cumulative-points#edu span:first").html( ((parseInt(slr)) + 50).toString());
          $(".submit-btn-education button").removeAttr("disabled");
        }
      }else{
        $(".school-dd").css('display','none');
        $(".submit-btn-education button").removeAttr("disabled");
        $(".cumulative-points#edu span:first").html( (parseInt(slr)) );
        $(".desc-education p").html('Lorem <span>0</span> <span>points</span>, consectetur adipisicing'); 
        $(".desc-education p span").css('font-weight','bold');
        $(".desc-education img").attr('src','./assets/images/icons/education-icon-positive.png');
      }

    });

   // last step btn - education part
    $(".back-to-last-step#education").click(function(e){
      e.preventDefault();
      $(".input-salary").css('display','block');
      $(".dropdown-education").css('display','none');
      $(".submit-btn-salary button").css('display','block');
      $(".cumulative-points#salary").css({'display':'flex', 'flex-direction':'row', 'justify-content':'left', 'align-items':'center', 'gap': '5px'});

    });


    // continue button - on education part
    $(".submit-btn-education button").on('click',function(){
      $(".dropdown-education").css('display','none');
      $(".input-experience").css('display','block');
      $(".cumulative-points#experience").css({'display':'flex', 'flex-direction':'row', 'justify-content':'left', 'align-items':'center', 'gap': '5px'});
      $(".cumulative-points#experience span:first").html($(".cumulative-points#edu span:first").html());

      $(".desc-experience").css('display','none');
      $('#experience-form').get(0).reset();

      if($("#experience-input").val() !== ""){
        $(".cumulative-points#experience span:first").html((parseInt($(".desc-experience p span").html()) + (parseInt($(".cumulative-points#edu span:first").html()))).toString());
      }
    })


    // ----  EXPERIENCE -----
    $("#experience-input").on("input", function(){
      $(".desc-experience").css({'display' : 'flex', 'flex-direction':'row', 'justify-content':'left', 'align-items':'center', 'gap':'8px', 'margin-top':'24px'});
      var experienceValue = $("#experience-input").val();
      $(".submit-btn-experience button").removeAttr("disabled");

      if(experienceValue === ""){
        $(".desc-experience p").html("<span>0</span>");
         $(".desc-experience p span").css('display','none');
         $(".desc-experience img").css('display','none');
         $(".submit-btn-experience button").attr("disabled", "disabled");
      }else if( experienceValue >= 7){
          $(".desc-experience p").html("Lorem ipsum <span>50</span> <span>points</span>");
          $(".desc-experience p span").css('font-weight','bold');
          $(".desc-experience img").attr('src','./assets/images/icons/education-icon-positive.png').css({'display':'block', 'border':'none', 'padding': '0'});
          $(".submit-btn-experience button").removeAttr("disabled");
      }else if(experienceValue >= 3){
          $(".desc-experience p").html("Lorem ipsum <span>25</span> <span>points</span>");
          $(".desc-experience p span").css('font-weight','bold');
          $(".desc-experience img").attr('src','./assets/images/icons/education-icon-positive.png').css({'display':'block','border':'none', 'padding': '0'});
      } else if(experienceValue  < 3){
          $(".desc-experience p").html("Lorem ipsum <span>0</span> <span>points</span>");
          $(".desc-experience p span").css('font-weight','bold');
          $(".desc-experience img").attr('src','./assets/images/icons/education-icon-positive.png').css({'display':'block','border':'none', 'padding': '0'});
      }
      $(".cumulative-points#experience span:first").html((parseInt($(".desc-experience p span:first").html()) + (parseInt($(".cumulative-points#edu span:first").html()))).toString());
   });


   // last step btn - on experience part
   $(".back-to-last-step#experience").click(function(e){
    e.preventDefault();
    $(".dropdown-education").css('display','block');
    $(".input-experience").css('display','none');
    $(".sum-btn#edu").css('display','flex');
    $(".cumulative-points#edu").css({'display':'flex', 'flex-direction':'row', 'justify-content':'left', 'align-items':'center', 'gap': '5px'});
  });


  // continue button - on experience part - FINAL page
  // last changes here
  $(".submit-btn-experience button").on('click',function(){
    $("#final-page").css({"display": "flex", "flex-direction": "column", "justify-content": "center", "align-items": "center"});
    $(".input-experience").css('display','none');
    $(".final-cumulative-points span").html($(".cumulative-points#experience span:first").html());

    if($(".final-cumulative-points span").html() >= 75){
      $(".final-title").html("Lorem ipsum dolor sit amet consectetur adipisicing!");
      $("#final-page img").attr('src','./assets/images/icons/final-positive.png');
    }else {
      if($(".selectpicker#select1").val() === "High"){
        var educationDropdownVal = $(".selectpicker#select2").val();
        var id = $("#select1").children(":selected").attr("id");

        if($('input#experience-input').val() < 3 && $('input#experience-months-input').val() <= 11){
          if((id.startsWith("1") || id.startsWith("2")) && !id.startsWith("14")){
            if(educationDropdownVal === "bachelor" || educationDropdownVal === "master" || educationDropdownVal === "doctorate"){
              // check age
              $(".final").css('display','none');
              $(".input-experience").css('display','none');
              $('.input-age-high').css("display","block");
              $(".submit-btn-age").css('display','block');
              $(".submit-btn-age button").css('display','block');
            }else if(educationDropdownVal === "diploma"){
              var eduLevel = $(".selectpicker#select2").val();
              $(".final-title").html(`Congratulations, candidate has ${eduLevel} education and gets a mid skill visa!`);
              $("#final-page img").attr('src','./assets/images/icons/final-positive.png');
            }else{
              $(".final-title").html("Lorem ipsum dolor sit amet consectetur adipisicing");
              $("#final-page img").attr('src','./assets/images/icons/final-negative.png');
            }

          }else if(id.startsWith("14") || id.startsWith("3")){
            if(educationDropdownVal === "diploma" || educationDropdownVal === "bachelor" || educationDropdownVal === "master" || educationDropdownVal === "doctorate"){
              // check age
              $(".final").css('display','none');
              $(".input-experience").css('display','none');
              $('.input-age-high').css("display","block");
              $(".submit-btn-age").css('display','block');
              $(".submit-btn-age button").css('display','block');
            }else{
              $(".final-title").html("Lorem ipsum dolor sit amet consectetur adipisicing");
              $("#final-page img").attr('src','./assets/images/icons/final-negative.png');
            }

          }
        }else{
          if(educationDropdownVal === "diploma" || educationDropdownVal === "bachelor" || educationDropdownVal === "master" || educationDropdownVal === "doctorate"){
            var eduLevel = $(".selectpicker#select2").val();
            $(".final-title").html(`Congratulations, candidate has ${eduLevel} education and gets a mid skill visa!`);
            $("#final-page img").attr('src','./assets/images/icons/final-positive.png');
          }else{
            $(".final-title").html("Lorem ipsum dolor sit amet consectetur adipisicing");
            $("#final-page img").attr('src','./assets/images/icons/final-negative.png');
          }
        }
      }else if($(".selectpicker#select1").val() === "Medium"){
        var id = $("#select1").children(":selected").attr("id");
        if(parseInt(id) < 411001){
          $(".move-to-mid-visa").css({'display': 'inline-block', 'flex-direction': 'row', 'justify-content': 'left', 'align-items': 'center', 'gap' : '5px', 'font-family':'Open Sans Condensed', 'font-size':'20px', 'text-align': 'center'})

          $(".move-to-mid-visa a").css({"display": "inline-block","color": "#148287;"});

        }
      }
    }
  });


  $("a#no-mid").on('click',function(e){
    e.preventDefault();
    $(".final-title").html("Please exit the application");
  });

  $("a#yes-mid").on('click',function(e){
    e.preventDefault();
    $(".final").css("display","none");
    $(".input-svp").css('display','block');    
    $(".submit-btn-svp").css('display','block'); 

    $(".svp-title").css("display","none");
    $(".svp-title-mid").css('display','block');    
  });


  $(".retake-btn button").on('click',function(e){

    e.preventDefault();
    console.log($(location).attr('href')); 
      
    window.location.replace(URL + '#assessment-tool');
    location.reload();
  });




  // experience years/months input limitations
  $('.input-experience input').unbind('keyup change input paste').bind('keyup change input paste', function(e){
    var $this = $(this);
    var val = $this.val();
    var valLength = val.length;
    var maxCount = $this.attr('maxlength');
    var maxMonthInput = 12;
    var monthInput = $('#experience-months-input').val();

    if(valLength > maxCount){
      $this.val($this.val().substring(0, maxCount))
    }

    if(val === ''){
      $('.input-experience .submit-btn-experience button').attr('disabled', 'disabled');
    }else{
      $('.input-experience .submit-btn-experience button').removeAttr('disabled');
    }

    if(monthInput >= maxMonthInput){
      $this.val('11')
    }

  })

  $(window).on('resize', function(){
    var win = $(this);
    if (win.width() >= 768) { 
      $(".menu-mobile").css('display','none');
      $(".menu").css('display','flex');
      $(".hamburger").css('display','none');
    }else{
      $(".menu-mobile").css('opacity','1');
      $(".hamburger").css('display','block');
      $(".menu").css('display','none');
    }
});

});
