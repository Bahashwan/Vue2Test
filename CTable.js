Vue.component('c-table', {
  props: ['data', 'pagination', 'filters','fetch-data'],
  template: `<div>
        <table>
          <thead>
            <tr>
              <th>ISO Code (A2)</th>
              <th>ISO Code (A3)</th>
              <th>ISO Code (Numeric)</th>
              <th>Printable Name</th>
              <th>Name</th>
              
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in data" :key="index">
              <td>{{ item.iso_3166_1_a2 }}</td>
              <td>{{ item.iso_3166_1_a3 }}</td>
              <td>{{ item.iso_3166_1_numeric }}</td>
              <td>{{ item.printable_name }}</td>
              <td>{{ item.name }}</td>
              
            </tr>
          </tbody>
        </table>
        <div class="filters">
        <span>Filter by ISO Code (A2):</span><input v-model="filters.iso_3166_1_a2" @input="handleFilterChange"></div>
        <div class="pagination">
          <button @click="previousPage" >Previous</button>
          <button @click="nextPage" >Next</button>
        </div>
      </div>`,
  methods: {
    previousPage() {
      this.$emit('page-changed', this.pagination.previous_page_number);
    },
    nextPage() {
      this.$emit('page-changed', this.pagination.next_page_number);
    },
    handleFilterChange(e) {    
       this.$emit('fetch-data');
    //   this.filter.iso_3166_1_a2 = e.target.value;
    },
  },
});
