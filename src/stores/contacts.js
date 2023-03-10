import { defineStore } from 'pinia'
import useProfileStore from './profile'
import useMessagesStore from './messages'

export default defineStore('contacts', {
  state: () => ({
    contacts: [
      { id: 2, name: 'Jason', avatar: '/avatars/avatar-02.jpg' },
      { id: 3, name: 'Janet', avatar: '/avatars/avatar-03.jpg' }
    ]
  }),
  getters: {
    getContactById: (state) => (contactId) => {
      const profileStore = useProfileStore();
      if(contactId === profileStore.id) return {
        id: profileStore.id,
        avatar: profileStore.avatar
      }
      return state.contacts.find((contact) => contact.id === contactId); 
    },
    getAvatarById: (state) => (contactId) => {
      const messagesStore = useMessagesStore();
      return messagesStore.findMessagesByChannelId(contactId).map((message) => {
        return state.getContactById(message.author)
      }).filter((contact, index, listContacts) => {
        return index === listContacts.findIndex((elementList) => {
          return elementList.id == contact.id
        })
      })
      }
  }
})