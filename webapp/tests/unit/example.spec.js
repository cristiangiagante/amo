import { shallowMount, createLocalVue } from '@vue/test-utils'
import Home from '@/views/Home.vue'
import HelloI18n from '@/components/HelloI18n.vue'
import BootstrapVue from 'bootstrap-vue'
import VueI18n from 'vue-i18n'

describe('Home.vue', () => {
  it('renders props.msg when passed', () => {
    let localVue = createLocalVue()
    localVue.use(BootstrapVue)
    const wrapper = shallowMount(Home, {
      localVue
    })
    expect(wrapper.text()).toMatch('1 of 3')
  })

  it('renders language spanish in i18n', () => {
    let localVue = createLocalVue()
    localVue.use(VueI18n)
    const messages = {
      en: {
        hello: 'Enter a name'
      },
      es: {
        hello: 'hola'
      }
    }
    const i18n = new VueI18n({
      locale: 'es',
      fallbackLocale: 'es',
      messages
    })
    const wrapper = shallowMount(HelloI18n, {
      i18n,
      localVue
    })
    expect(wrapper).toMatchSnapshot()
  })
})
