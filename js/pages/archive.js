(function () {
  var ORDER_LIST = [
    {text: 'Date desc', value: 'unixtime:desc'},
    {text: 'Date asc', value: 'unixtime:asc'},
    {text: 'Mag desc', value: 'mag:desc'},
    {text: 'Mag asc', value: 'mag:asc'},
    {text: 'Duration desc', value: 'sec:desc'},
    {text: 'Duration asc', value: 'sec:asc'}
  ];

  var PAGE_SIZE = 24;
  var PAGINATION_SIZE = 9;

  Vue.component('datepicker', Datepicker);

  new Vue({
    el: '#meteorList',
    data: {
      filters: {
        clip_name: '',
        station: '',
        start: 0,
        end: 0,
        class_name: '',
        order: '',
        page: 1
      },
      pages: [],
      pageTotal: 0,
      meteorList: [],
      meteorCount: 0,
      stationList: [],
      orderList: ORDER_LIST,
      highlighted: {
        dates: [new Date()]
      },
      spinner: false
    },
    computed: {
      startDisabled: function () {
        return this.filters.end ? {from: this.endDate} : {};
      },
      endDisabled: function () {
        return this.filters.start ? {to: this.startDate} : {};
      },
      searchString: function () {
        var vm = this;
        var paramsArray = [];

        Object.keys(this.filters).forEach(function (flt) {
          if (vm.filters[flt]) {
            paramsArray.push(encodeURIComponent(flt) + '=' + encodeURIComponent(vm.filters[flt]));
          }
        });

        return paramsArray.length ? ('?' + paramsArray.join('&')) : '';
      },
      startDate: {
        get: function () {
          return this.filters.start ? new Date(this.filters.start * 1000) : null;
        },
        set: function (val) {
          this.filters.start = Math.floor(val.getTime() / 1000);
        }
      },
      endDate: {
        get: function () {
          return this.filters.end ? new Date(this.filters.end * 1000) : null;
        },
        set: function (val) {
          this.filters.end = Math.floor(val.getTime() / 1000);
        }
      }
    },
    methods: {
      search: search,
      getParams: getParams,
      getStationList: getStationList,
      getClassList: getClassList,
      getMeteorList: getMeteorList,
      onDateChange: onDateChange,
      clearFilters: clearFilters,
      updateUrl: updateUrl,
      onInit: onInit,
      onTypeaheadSelect: onTypeaheadSelect,
      getPageUrl: getPageUrl,
      updatePagination: updatePagination
    },
    mounted: function () {
      this.onInit();
    }
  });

  function search() {
    this.filters.page = 1;
    this.updateUrl();
    this.getMeteorList();
  }

  function getParams() {
    var vm = this;
    var searchString = location.search.substring(1);
    var params = {};

    searchString.split('&').forEach(function (paramString) {
      var param = paramString.split('=');
      params[decodeURIComponent(param[0])] = decodeURIComponent(param[1]);
    });

    Object.keys(this.filters).forEach(function (flt) {
      vm.filters[flt] = params[flt] || '';
    });

    if (!this.filters.page) {
      this.filters.page = 1;
    }
  }

  function getStationList() {
    var vm = this;
    $.ajax({url: BACKEND_URL + '/station'})
      .success(function (data) {
        var temp = data;
        vm.stationList = data || [];
        vm.stationList.sort();
      })
      .error(function () {
        vm.stationList = [];
      });
  }

  function getClassList() {
    var vm = this;
    $.ajax({url: BACKEND_URL + '/class'})
      .success(function (data) {
        const $typeahead = $('.typeahead');
        $typeahead.typeahead({
          source: data,
          afterSelect: vm.onTypeaheadSelect.bind(vm)
        });

        if (vm.filters.class_name) {
          let value;
          data.some(function (item) {
            if (item.id === vm.filters.class_name) {
              value = item.name;
              return true;
            }
          });

          if (value) {
            $typeahead.val(value);
          }
        }
      });
  }

  function getMeteorList() {
    var vm = this;
    vm.spinner = true;
    $.ajax({url: BACKEND_URL + '/archive' + this.searchString})
      .success(function (res) {
        vm.meteorList = res.meteorList || [];
        vm.meteorCount = res.count || 0;
        vm.pageTotal = Math.ceil(vm.meteorCount / PAGE_SIZE);
        vm.updatePagination();
        vm.spinner = false;
      })
      .error(function () {
        vm.meteorList = [];
        vm.meteorCount = 0;
        vm.pageTotal = 0;
        vm.spinner = false;
      });
  }

  function onDateChange(field, value) {
    this[field] = value;
  }

  function clearFilters() {
    this.filters.clip_name = '';
    this.filters.station = '';
    this.filters.start = 0;
    this.filters.end = 0;
    this.filters.class_name = '';
    this.filters.order = '';
    this.search();
  }

  function updateUrl() {
    location.search = this.searchString;
  }

  function onInit() {
    this.getStationList();
    this.getClassList();
    this.getParams();
    this.getMeteorList();
  }

  function onTypeaheadSelect(item) {
    if (item) {
      this.filters.class_name = item.id;
    }
  }

  function getPageUrl(pageNumber) {
    var page = pageNumber;
    if (page === -1) {
      page = +this.filters.page - 1;
      if (page < 1) {
        page = 1;
      }
    }

    if (page === Infinity) {
      page = +this.pages[this.pages.length - 1] + 1;
      if (page > this.pageTotal) {
        page = this.pageTotal;
      }
    }

    return (location.href.split('?')[0] + this.searchString).replace(/(page=)\d+/, '$1' + page);
  }

  function updatePagination() {
    var pagesSize = (this.pageTotal < PAGINATION_SIZE) ? this.pageTotal : PAGINATION_SIZE;
    var start = +this.filters.page - Math.floor(pagesSize / 2);
    var end = +this.filters.page + Math.floor(pagesSize / 2);
    this.pages = [];

    while (start < 1) {
      start++;
      end++;
    }

    while (end > this.pageTotal) {
      start--;
      end--;
    }

    var current = start;
    while (current <= end) {
      this.pages.push(current++);
    }
  }

  Vue.filter('toDateTime', function (value) {
    var d = new Date(+value * 1000);
    if (isNaN(d.getTime())) {
      return value;
    }

    var dStr = d.toISOString().split('T');
    var date = dStr[0].split('-').reverse().join('/');
    var time = dStr[1].split('.')[0];

    return date + ' ' + time;
  });

})();
