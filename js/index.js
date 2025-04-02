 $(document).ready(function(){
      // Force menu to be closed on page load
      $('#navbar ul').hide().removeClass('show');
      $('#menu-toggle').removeClass('open');
  
      // Toggle on click
      $('#menu-toggle').click(function(){
        $(this).toggleClass('open');
        $('#navbar ul').slideToggle().toggleClass('show');
      });
    });