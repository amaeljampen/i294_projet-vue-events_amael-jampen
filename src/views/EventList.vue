<template>
  <div class="events">
    <EventCard :events="events" />
  </div>
</template>

<script>
import EventCard from '@/components/EventCard.vue'

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Home',
  components: {
    EventCard,
  },
  data() {
    return {
      events: [
        {
          id: 11101,
          category: 'Promotion',
          title: 'Portes ouvertes',
          description: 'Présentation des activités de la filière au public.',
          date: '25 novembre 2024',
          time: '08:00',
        },
        {
          id: 20201,
          category: 'Loisir',
          title: 'Journée ski',
          description:
            'Activité neige dans Ste-croix et à la station des Rasses pour du ski de fond, ski de descente et randonnée.',
          date: '14 février',
          time: '08:00',
        },
        {
          id: 30901,
          category: 'Loisir',
          title: 'Semaine spéciale',
          description:
            "voyage à l' étranger avec des activités proposées par les élèves.",
          date: '14 février',
          time: '08:00',
        },
      ],
    }
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
