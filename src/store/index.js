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
      let data = await fetch('https://yonelamangele.github.io/Yonela-Mangele-Portfolio2/src/json/myinfo.json')
      let about = await data.json();
      let {aboutMe} = about
      content.commit('setAboutMe', aboutMe[0].para)
    },
    async getSoftSkills(content){
      let data = await fetch('https://yonelamangele.github.io/Yonela-Mangele-Portfolio2/src/json/myinfo.json')
      let about = await data.json();
      let {softSkills} = about
      content.commit('setSoftSkills', softSkills)
      },
    async getResume(content){
      let data = await fetch('https://yonelamangele.github.io/Yonela-Mangele-Portfolio2/src/json/myinfo.json')
      let about = await data.json();
      let {resume} = about
      content.commit('setResume', resume)
      },
    async getProjects(content){
      let data = await fetch('https://yonelamangele.github.io/Yonela-Mangele-Portfolio2/src/json/myinfo.json')
      let about = await data.json();
      let {projects} = about
      content.commit('setProjects', projects)
      },
    async getContacts(content){
      let data = await fetch('https://yonelamangele.github.io/Yonela-Mangele-Portfolio2/src/json/myinfo.json')
      let about = await data.json();
      let {contacts} = about
      content.commit('setContacts', contacts)
      }
  },
  modules: {
  },
  getters: {
  }
})
