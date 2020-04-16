(function() {
  var items = {
    all: window.itemsData,

    getByCategory: function(category) {
      var list = [];
      for (var item of items.all) {
        if (category === 'All') {
          list.push(item);
        } else {
          if (item.category === category) {
            list.push(item);
          }
        }
      }
      return list;
    }
  };

  var Helper = {
    clearCards: function() {
      var games = document.getElementById('games');
      while (games.firstChild) {
        games.firstChild.remove();
      }
    },

    changeSubTitle: function(attach) {
      var sbt = {
        Original: 'List of the Games of ',
        Home: 'Playstation4 Game Shop',
        All: 'All Categories',
        Sports: 'Sports Category',
        Adventure: 'Adventure Category'
      };

      document.getElementById('subtitle').innerHTML = sbt.Original;
      if (attach) {
        document.getElementById('subtitle').innerHTML += sbt[attach];
      }
    },

    itemToCard: function(item) {
      var div = document.createElement('div');
      var img = document.createElement('img');
      img.src = 'img/' + item.code.toLowerCase() + '.jpg';
      img.alt = item.code.toLowerCase() + '.jpg';
      div.appendChild(img);

      var title = document.createElement('h3');
      title.appendChild(document.createTextNode(item.title));
      div.appendChild(title);

      var price = document.createElement('h3');
      price.appendChild(document.createTextNode('CAD($): ' + item.price));
      div.appendChild(price);

      var description = document.createElement('p');
      description.style.wordWrap = 100;
      description.appendChild(document.createTextNode(item.description));
      div.appendChild(description);
      return div;
    },

    cardsToTable: function(items) {
      Helper.clearCards();
      var content = document.getElementById('games');
      for (var item of items) {
        var card = Helper.itemToCard(item);
        content.appendChild(card);
      }
    }
  };

  function setupMenuHandlers() {
    document.getElementById('Home').onclick = function() {
      Helper.clearCards();
      Helper.changeSubTitle('Home');
    };

    document.getElementById('All_Categories').onclick = function() {
      Helper.changeSubTitle('All');
      Helper.cardsToTable(items.getByCategory('All'));
    };

    document.getElementById('Sports').onclick = function() {
      Helper.changeSubTitle('Sports');
      Helper.cardsToTable(items.getByCategory('Sports'));
    };

    document.getElementById('Adventure').onclick = function() {
      Helper.changeSubTitle('Adventure');
      Helper.cardsToTable(items.getByCategory('Adventure'));
    };
  }

  // When the page loads, setup all event handlers by calling setup function.
  window.onload = setupMenuHandlers;
})();
