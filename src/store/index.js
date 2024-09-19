import { createStore } from 'vuex'
// import axios from 'axios'
export default createStore({
  state: {
    aboutMe: null,
    resume: null,
    softSkills: null,
    projects: null,
    contacts: null
  },
  mutations: {
    setAboutMe(state, code) {
      state.aboutMe = code
    },
    setResume(state, code) {
      state.resume = code
    },
    setSoftSkills(state, code) {
      state.softSkills = code
    },
    setProjects(state, code) {
      state.projects = code
    },
    setTestimonials(state, code) {
      state.testimonials = code
    },
    setContacts(state, code) {
      state.contacts = code
    },
  },
  actions: {
    async getAboutMe(content){
      let fetchedInfo = await fetch('https://yonelamangele.github.io/Yonela-Mangele-Portfolio2/src/json/myinfo.json')
      let about = await fetchedInfo.json();
      let {aboutMe} = about
      content.commit('setAboutMe', aboutMe[0].para)
    },
    async getSoftSkills(content){
      let fetchedInfo = await fetch('https://yonelamangele.github.io/Yonela-Mangele-Portfolio2/src/json/myinfo.json')
      let about = await fetchedInfo.json();
      let {softSkills} = about
      content.commit('setSoftSkills', softSkills)
      },
  },
  modules: {
  },
  getters: {
  }
})
