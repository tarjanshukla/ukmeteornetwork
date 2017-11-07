(function() {

  new Vue({
    el: '#count-root',
    data: {
      years: [],
      stations: [],
      count: [],
    },
    methods: {
      fetchCount: function() {
        var self = this;
        $.get(window.BACKEND_URL + '/count', function(resp) {
          self.years = resp.year;
          self.stations = resp.station;
          self.count = resp.count;
        });
      },
    },
    computed: {
      /*
        Builds statistics object with the following structure:
        type Result = {
          [year: number]: {
            [station: string]: Array<?number>,
            "__TOTAL__": Array<number>
          }
        };
       */
      stats: function() {
        var i, j, year, station, record, month, count;
        var result = {};
        // Build result object with years and stations, fill empty month data
        for (i = 0; i < this.years.length; i++) {
          year = this.years[i];
          result[year] = {};

          // alphabetical order for station
          this.stations.sort();

          for (j = 0; j < this.stations.length; j++) {
            station = this.stations[j];
            // Use nulls here because zeroes should not be displayed per station
            result[year][station] = [null, null, null, null, null, null, null, null, null, null, null, null];
            // Use zeroes here because zeroes should be displayed for year total
            result[year]['__TOTAL__'] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
          }
        }
        // Fill month and year total data
        for (i = 0; i < this.count.length; i++) {
          record = this.count[i];
          year = parseInt(record.year, 10);
          count = parseInt(record.count, 10);
          month = parseInt(record.month, 10) - 1;
          result[year][record.station][month] = count;
          result[year]['__TOTAL__'][month] += count;
        }
        return result;
      }
    },
    mounted: function() {
      this.fetchCount();
    }
  });

  Vue.filter('sum', function (arr) {
    return arr.reduce(function(acc, x) { return acc + x }, 0)
  });
})();
