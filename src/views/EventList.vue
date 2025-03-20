<template>
  <div class="events">
    <EventCard :events="events" @delete-event="DeleteEvent" />
  </div>
</template>

<script>
import EventCard from '@/components/EventCard.vue'
import EventService from '../services/EventService.js'

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
    EventService.getEvents()
      .then((response) => {
        this.events = response.data
      })
      .catch((error) => {
        console.log(error)
      })
  },
  methods: {
    DeleteEvent(id) {
      EventService.delEvents(id)
        .then(() => {
          console.log(id + ' à été supp')
        })
        .catch((error) => {
          console.log(error)
        })
    },
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
