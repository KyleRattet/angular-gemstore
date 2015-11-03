(function () {

var app = angular.module('store', []);

app.controller("StoreController", function(){
  this.products = gems;


});

var gems = [
  {
    name: "Dodechahedron",
    price: 2,
    description: "Bacon ipsum dolor amet cow pig salami landjaeger picanha, venison shank meatball alcatra porchetta pork chop.",
    images: [
        'green.jpeg'
        ],
    reviews: [
      {stars: 5,
        body: "I love this product!",
        author: "bob@gmail.com"
       },
       {stars: 1,
        body: "I don't love this product!",
        author: "barb@gmail.com"
       },
        ],
    canPurchase: true
  },
  {
    name: "Pentagonal Gem",
    price: 5.95,
    description: "Porchetta ground round brisket pancetta pork chop tongue landjaeger salami alcatra biltong tenderloin venison. ",
    canPurchase: false,
    images: [
        'purple.png'
        ],
            reviews: [
      {stars: 4,
        body: "Awesome product",
        author: "sal@gmail.com"
       },
       {stars: 1,
        body: "Not awesome!",
        author: "sally@gmail.com"
       },
        ]
  }
];

app.controller("PanelController", function () {
  this.tab = 1;

  this.selectTab = function(setTab) {
    this.tab = setTab;
  };

  this.isSelected = function (checkTab) {
    return this.tab === checkTab;
  };

});

app.controller("ReviewController", function() {
  this.review = {};

  this.addReview = function (product) {
    product.reviews.push(this.review);
    this.review = {};
  };
})

})();
