var MainMenu = {
  menu: {
      experience: $("#experience"),
      projects: $("#projects"),
      education: $("#education")
  },
  modal: {
      micromouse: $("#disp-MM")
  },
  init: function(){
      m = this.menu;
      this.bindClickAction(m.experience, $("#experienceSection"));
      this.bindClickAction(m.projects, $("#projectsSection"));
      this.bindClickAction(m.education, $("#educationSection"));

  },
  bindClickAction: function(menu, destination) {
      menu.click(function () {
          $('html, body').animate({
              scrollTop: destination.offset().top - 50
          }, 1000);
      });
  }
};

var Modal = {
    modal: {
        micromouse: $("#disp-MM"),
        triviaTrip: $("#disp-TT"),
        igs: $("#disp-IGS")
    },
    init: function(){
        modal = this.modal;
        this.addModalFunctionality();
        this.bindModal(modal.micromouse, $("#micromouseModalTrigger"));
        this.bindModal(modal.triviaTrip, $("#triviaTripModalTrigger"));
        this.bindModal(modal.igs, $("#igsModalTrigger"));


    },
    bindModal: function(modalButton, modalTrigger){
        modalButton.on('click', function(){
            console.log('hello');
            modalTrigger.addClass('is-active');
        });
    },
    addModalFunctionality: function(){
        $('.modal-background, .modal-close').on('click', function(){
            $('.modal').removeClass('is-active');
        });
    }
};

$(document).ready(function(){
    MainMenu.init();
    Modal.init();
});