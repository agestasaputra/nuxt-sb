import Vuex from 'vuex';
import QModal from './index.vue'
import QButton from '../QButton/index.vue'
import { action } from '@storybook/addon-actions'

export default {
  title: 'QModal',
  component: QModal,
  parameters: {
    docs: {
      description: {
        component: 'QModal is Custom modal for Qontak UI Component',
      },
    },
  },
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {},
}

const DefaultTemplate = (_args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { QModal, QButton },
  template: `
    <div>
      <h6> Default Modal </h6>
      <hr />
      <QButton variant="success" @click="onToggleModal"> Open Modal </QButton>
      <QModal 
        v-model="$store.state.modal.isShow"
        v-bind="$props"
      >
        <template #header>
          <section class="w-100 d-flex">
            Ini Header
          </section>
        </template>
        <template #body>
          <section class="w-100 text-center p-0">
            <b-icon icon="exclamation-circle" variant="danger" font-scale="6" class="mb-3"></b-icon>
            <p class="m-0">
              <strong>Error!</strong>
            </p>
          </section>
        </template>
        <template #footer>
          <section class="w-100 d-flex justify-content-center p-0">
            <QButton
              variant="primary"
              @click="onToggleModal"
            >
              <strong>Close</strong>
            </QButton>
          </section>
        </template>
      </QModal>
    </div>
  `,
  store: new Vuex.Store({
    state: { 
      modal: {
        isShow: false
      } 
    },
    mutations: {
      SET_TOGGLE_MODAL(state) {
        console.log('SET_TOGGLE_MODAL - state:', state)
        state.modal.isShow = !state.modal.isShow
        action('vuex state')(state);
      },
    },
  }),
  methods: { 
    onToggleModal() {
      console.log('onToggleModal!')
      this.$store.commit('SET_TOGGLE_MODAL');
    }
  }
});
export const Default = DefaultTemplate.bind({})
Default.args = {
  centered: true,
  contentClass: "rounded-lg",
  headerClass: "",
  bodyClass: "",
  footerClass: "border-0",
  hideHeader: true,
  hideFooter: false,
  scrollable: true,
  noCloseOnBackdrop: true,
  noCloseOnEsc: true,
}