<template>
  <div>backup</div>
</template>

<script setup lang='ts'>
import { useSnapshotStore } from 'src/teststore/snapshot';
import { computed, onMounted } from 'vue';

const snapshot = useSnapshotStore()
const snapshots = computed(() => snapshot.Snapshots.Snapshots)
onMounted(() => {
  if(snapshots.value?.length === 0) {
    getSnapshots()
  }
})

const getSnapshots = () => {
  snapshot.GetSnapshots({
    Indexes: [10, 20],
    Message: {}
  }, () => {
    // TODO
  })
}
</script>
