import { createStore, createLogger } from 'vuex';

export default createStore({
  plugins: [createLogger()],
  modules: {
    notes: {
      namespaced: true,
      state: () => ({
        notes: [] as string[],
      }),
      getters: {
        notes(state): string[] {
          return state.notes;
        },
      },
      mutations: {
        SAVE_NOTE(state, note) {
          state.notes.push(note);
        },
      },
      actions: {
        save({ commit }, note: string) {
          commit('SAVE_NOTE', note);
        },
      },

    },
  },
});
