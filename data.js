  $(document).ready(function() {

      function Flower(name, color, petals, petalSize, stemLength, smellsPretty, carnivorous, parent1, parent2, imgURL) {
          this.name = name;
          this.color = color;
          this.petals = petals;
          this.petalSize = petalSize;
          this.stemLength = stemLength;
          this.smellsPretty = smellsPretty;
          this.carnivorous = carnivorous;
          this.parent1 = parent1 || this.name;
          this.parent2 = parent2 || this.name;
          this.imgURL = imgURL;
          this.sniff = function() {
              console.log("Sniff Sniff Sniff!");

          };

          // Demonstrates use of arguments with methods
          this.smellsGood = function(answer) {
              if (answer) {
                  return 'This flower smells amazing!';
              } else {
                  return 'What a noxious weed!';
              }
          };

          // Demonstrates use of local object variables
          this.describe = function(answer) {
              alert("This flower is " + this.color + ".");
          };

          // Demonstrates object to object interaction
          this.compare = function(otherFlower) {
              return ("My " + this.color + " flower is much prettier than your " +
                  otherFlower.color + " flower :P");
          };
          this.render = function() {
              $('body').append("<p>My pretty flower is " + this.color +
                  " and has " + this.petals + " pristine petals.</p>");
          };
          this.crossPollinate = function(otherFlower) {
              var name = this.name.slice(0, 3) + otherFlower.name.slice(4);
              var color = this.color + '-' + otherFlower.color;
              var petals = (this.petals + otherFlower.petals) / 2;
              var petalSize = (this.petalSize + otherFlower.petalSize) / 2;
              var stemLength = (this.stemLength + otherFlower.stemLength) / 2;
              var smellsPretty = this.smellsPretty && otherFlower.smellsPretty;
              var carnivorous = this.carnivorous || otherFlower.carnivorous;
              var childFlower = new Flower(name, color, petals, petalSize, stemLength, smellsPretty, carnivorous, this.name, otherFlower.name);
              console.log(childFlower);
          };
      }



      var vase = [];
      var tulip = new Flower("Tulip", "red", 6, 2, 6, true, false, false, false, "https://upload.wikimedia.org/wikipedia/commons/f/f9/Tulip_cv._04.JPG");
      var delphinium = new Flower("Delphinium", "purple", 8, 2, 3, true, false, false, false, "https://www.anniesannuals.com/signs/d%20-%20g/images/delphinium_bellamosum_front.jpg");
      var snap_dragon = new Flower("Snapdragon", "orange", 4, 1, 2, true, true, false, false, "http://www.parkswholesaleplants.com/wp-content/uploads/2008/11/Montego-Orange-Bi-color-Snapdragon-e1377630971524.jpg?fea8bc");
      var stink_weed = new Flower("Stinkweed", "green", 12, 3, 5, false, false, false, false, "http://www.ifish.net/gallery/data/500/weed.jpg");

      vase.push(tulip);
      vase.push(delphinium);
      vase.push(snap_dragon);
      vase.push(stink_weed);
      var data = {
          bud: vase
      };
      var source = $('#flowers-template').html();
      var template = Handlebars.compile(source);

      var compileHTML = template(data);
      $("#flowers").html(compileHTML);



  });