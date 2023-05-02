$(document).ready(function() {
    $('#choix').change(function() {
      var selectedDiv = $('#' + $(this).val() + '-div');
      
      $('.visible').removeClass('visible').addClass('invisible');
      selectedDiv.removeClass('invisible').addClass('visible');
    });
  });

  $(document).ready(function() {
    $('#formulaire').submit(function(event) {
      event.preventDefault(); // empêche l'envoi du formulaire
      
      let age = new Date($('#age').val());
      let now = new Date();
      let ageDiff = now.getTime() - age.getTime();
      let ageDate = new Date(ageDiff);
      let ageYears = Math.abs(ageDate.getUTCFullYear() - 1970);
      
      if (ageYears < 18) {
        $('#age-message').text("Vous devez avoir au moins 18 ans.");
        $('.cart').hide();
        $('.cart').prop('disabled', true);
        return false; // empêche l'envoi du formulaire

      } else {
        $('#age-message').text("Votre inscription est validée");
        $('.cart').show();
        $('.cart').prop('disabled', false); // active le bouton "cart"
        $('#inscription-message').text("Formulaire envoyé avec succès!");
        this.submit(); // envoie le formulaire
      }
      
    });
  });
  
 
  
  