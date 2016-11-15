(function() {
   function HomeCtrl() {
     this.heroTitle = "Welcome to Atlas Risk";
     console.log("yo")
   }

   angular
      .module('atlasRisk')
      .controller('HomeCtrl', HomeCtrl);
})();
