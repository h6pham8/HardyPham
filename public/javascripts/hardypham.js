var MainMenu = {
  menu: {
      experience: $("#experience"),
      projects: $("#projects"),
      education: $("#education")

  },
  init: function(){
      m = this.menu;
      this.bindClickAction(m.experience, $("#experienceSection"));
      this.bindClickAction(m.projects, $("#projectsSection"));
      this.bindClickAction(m.education, $("#educationSection"));
      this.scrollAction();
  },
  bindClickAction: function(menu, destination) {
      menu.click(function () {
          $('html, body').animate({
              scrollTop: destination.offset().top - 50
          }, 1000);
      });
  }
};

$(function(){
    MainMenu.init();
});