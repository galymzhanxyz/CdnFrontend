<template>
  <v-data-table
    :headers="headers"
    :items="statistics"
    :items-per-page="5"
    class="elevation-1"
  ></v-data-table>
</template>


<script>
  import StatisticService from "../../services/StatisticService" 

  export default {
    data () {
      return {
        headers: [
          {
            text: 'Идентификатор Браузера Клиента',
            align: 'start',
            sortable: false,
            value: 'browserId',
          },
          { text: 'Имя Ресурса', value: 'sourceName' },
          { text: 'Тип Ресурса', value: 'sourceType' },
          { text: 'Дата и время последнего доступа', value: 'downloadTime' },
        ],
        statistics: [
        ],
      }
    },
    methods: {
        retrieveStatics() {
            StatisticService
              .getLastDownloadeds()
              .then((response)=>{
                this.statistics = response.data;
              })
              .catch((e)=>{
                console.log(e);
              });
        },
    },
    mounted(){
        this.retrieveStatics();
    },
  }
</script>