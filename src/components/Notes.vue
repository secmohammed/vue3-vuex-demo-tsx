<script lang="tsx">
import { defineComponent, ref, computed } from 'vue';
import { useStore } from 'vuex';

export default defineComponent({
  setup() {
    const store = useStore();
    const notes = computed<string[]>(() => store.getters['notes/notes']);
    const title = ref('');
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === 'Enter') {
        store.dispatch('notes/save', title.value);
        title.value = '';
      }
    };
    return () => (
      <div>
        <ul>
        {notes.value.map((note, index) => (
            <li key={index}>{note}</li>
        ))}
        </ul>
        <input type="text" v-model={title.value} onKeypress={handleKeyPress}/>
      </div>

    );
  },
});
</script>
