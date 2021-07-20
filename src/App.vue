<script lang="tsx">
import { defineComponent } from 'vue';
import Notes from './components/Notes.vue';

export default defineComponent({
  name: 'App',
  components: {
    Notes,
  },
  setup() {
    return () => (
      <div id="app">
        <Notes />
      </div>
    );
  },
});
</script>
