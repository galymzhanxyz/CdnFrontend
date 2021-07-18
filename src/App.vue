<template>
  <v-app>
    <v-toolbar>
      <v-tabs>
        <v-tab>Количество скачиваний уникальными пользователями</v-tab>
          <v-tab-item>
            <CountDownloaded/>
          </v-tab-item>
        <v-tab>Дата и время последнего доступа к ресурсу каждым пользователем</v-tab>
          <v-tab-item>
            <LastDownloaded/>
          </v-tab-item>
      </v-tabs>
      <v-main>
      </v-main>
    </v-toolbar>
  </v-app>
</template>

<script>
import CountDownloaded from './components/Statistics/CountDownloaded.vue'
import LastDownloaded from './components/Statistics/LastDownloaded.vue'

export default {
  name: 'App',

  components: {
    CountDownloaded,
    LastDownloaded,
  },

  data: () => ({
    //
  }),
};
</script>
