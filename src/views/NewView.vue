<script>
import EventService from '../services/EventService.js'

export default {
  data() {
    return {
      title: '',
      categ: '',
      desc: '',
      lieu: '',
      date: '',
      hour: '',
    }
  },
  methods: {
    OnSubmit() {
      let NewEvent = {
        title: this.title,
        category: this.categ,
        description: this.desc,
        lieu: this.lieu,
        date: this.date,
        hour: this.hour,
      }

      EventService.addEvents(NewEvent)
        .then(() => {
          console.log(NewEvent + ' à été add')
        })
        .catch((error) => {
          console.log(error)
        })
    },
  },
}
</script>

<template>
  <form @submit.prevent="OnSubmit">
    <h1>Ajouter un évennement</h1>
    <h3>Titre</h3>
    <input v-model="title" />
    <h3>Catégorie</h3>
    <input v-model="categ" />
    <h3>Description</h3>
    <textarea v-model="desc"></textarea>
    <h3>Lieu</h3>
    <input v-model="lieu" />
    <h3>Date</h3>
    <input type="date" v-model="date" />
    <h3>Heure</h3>
    <input type="time" v-model="hour" />
    <div>
      <button type="submit">Ajouter</button>
      <button>Annuler</button>
    </div>
  </form>
</template>

<style scoped></style>
