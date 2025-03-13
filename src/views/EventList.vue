<template>
  <div class="events">
    <EventCard :events="events" />
  </div>
</template>

<script>
import EventCard from '@/components/EventCard.vue'
import axios from 'axios'

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Home',
  components: {
    EventCard,
  },
  data() {
    return {
      events: null,
    }
  },
  created() {
    axios
      .get(
        'http://my-json-server.typicode.com/fandolfatto/VueAPIOptions/events'
      )
      .then((response) => {
        console.log('events : ' + response.data)
        this.events = response.data
      })
      .catch((error) => {
        console.log(error)
      })
  },
}
</script>

<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
