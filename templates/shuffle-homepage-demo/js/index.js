var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}var Shuffle = window.Shuffle;var

Demo = function () {
  function Demo(element) {_classCallCheck(this, Demo);
    this.element = element;
    this.shuffle = new Shuffle(element, {
      itemSelector: '.picture-item',
      sizer: element.querySelector('.my-sizer-element') });


    // Log events.
    this.addShuffleEventListeners();
    this._activeFilters = [];
    this.addFilterButtons();
    this.addSorting();
    this.addSearchFilter();
  }

  /**
     * Shuffle uses the CustomEvent constructor to dispatch events. You can listen
     * for them like you normally would (with jQuery for example).
     */_createClass(Demo, [{ key: 'addShuffleEventListeners', value: function addShuffleEventListeners()
    {
      this.shuffle.on(Shuffle.EventType.LAYOUT, function (data) {
        console.log('layout. data:', data);
      });
      this.shuffle.on(Shuffle.EventType.REMOVED, function (data) {
        console.log('removed. data:', data);
      });
    } }, { key: 'addFilterButtons', value: function addFilterButtons()

    {
      var options = document.querySelector('.filter-options');
      if (!options) {
        return;
      }

      var filterButtons = Array.from(options.children);
      var onClick = this._handleFilterClick.bind(this);
      filterButtons.forEach(function (button) {
        button.addEventListener('click', onClick, false);
      });
    } }, { key: '_handleFilterClick', value: function _handleFilterClick(

    evt) {
      var btn = evt.currentTarget;
      var isActive = btn.classList.contains('active');
      var btnGroup = btn.getAttribute('data-group');

      this._removeActiveClassFromChildren(btn.parentNode);

      var filterGroup = void 0;
      if (isActive) {
        btn.classList.remove('active');
        filterGroup = Shuffle.ALL_ITEMS;
      } else {
        btn.classList.add('active');
        filterGroup = btnGroup;
      }

      this.shuffle.filter(filterGroup);
    } }, { key: '_removeActiveClassFromChildren', value: function _removeActiveClassFromChildren(

    parent) {var
      children = parent.children;
      for (var i = children.length - 1; i >= 0; i--) {
        children[i].classList.remove('active');
      }
    } }, { key: 'addSorting', value: function addSorting()

    {
      var buttonGroup = document.querySelector('.sort-options');
      if (!buttonGroup) {
        return;
      }
      buttonGroup.addEventListener('change', this._handleSortChange.bind(this));
    } }, { key: '_handleSortChange', value: function _handleSortChange(

    evt) {
      // Add and remove `active` class from buttons.
      var buttons = Array.from(evt.currentTarget.children);
      buttons.forEach(function (button) {
        if (button.querySelector('input').value === evt.target.value) {
          button.classList.add('active');
        } else {
          button.classList.remove('active');
        }
      });

      // Create the sort options to give to Shuffle.
      var value = evt.target.value;
      var options = {};

      function sortByDate(element) {
        return element.getAttribute('data-created');
      }

      function sortByTitle(element) {
        return element.getAttribute('data-title').toLowerCase();
      }

      if (value === 'date-created') {
        options = {
          reverse: true,
          by: sortByDate };

      } else if (value === 'title') {
        options = {
          by: sortByTitle };

      }
      this.shuffle.sort(options);
    }

    // Advanced filtering
  }, { key: 'addSearchFilter', value: function addSearchFilter() {
      var searchInput = document.querySelector('.js-shuffle-search');
      if (!searchInput) {
        return;
      }
      searchInput.addEventListener('keyup', this._handleSearchKeyup.bind(this));
    }

    /**
       * Filter the shuffle instance by items with a title that matches the search input.
       * @param {Event} evt Event object.
       */ }, { key: '_handleSearchKeyup', value: function _handleSearchKeyup(
    evt) {
      var searchText = evt.target.value.toLowerCase();
      this.shuffle.filter(function (element, shuffle) {
        // If there is a current filter applied, ignore elements that don't match it.
        if (shuffle.group !== Shuffle.ALL_ITEMS) {
          // Get the item's groups.
          var groups = JSON.parse(element.getAttribute('data-groups'));
          var isElementInCurrentGroup = groups.indexOf(shuffle.group) !== -1;
          // Only search elements in the current group
          if (!isElementInCurrentGroup) {
            return false;
          }
        }
        var titleElement = element.querySelector('.picture-item__title');
        var titleText = titleElement.textContent.toLowerCase().trim();
        return titleText.indexOf(searchText) !== -1;
      });
    } }]);return Demo;}();


document.addEventListener('DOMContentLoaded', function () {
  window.demo = new Demo(document.getElementById('grid'));
});