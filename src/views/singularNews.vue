<template>
  <div>
    {{getSingularNews}}
    she raboti li e
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'SingularNews',
  data() {
    return {

    }
  },
  computed: {
    ...mapGetters([
    'getSingularNews'
  ])
  }
}
</script>
