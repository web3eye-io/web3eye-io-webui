<template>
  <div v-for='(values, index) in snapshotsMap' :key='index'>
    <q-table
      flat bordered
      :title='values?.[0]'
      :rows='values?.[1]'
      :columns='columns'
      row-key='name'
      binary-state-sort
    >
      <template v-slot:body='props'>
        <q-tr :props='props'>
          <q-td key='ID' :props='props'>
            {{ props.row.ID }}
          </q-td>
          <q-td key='Index' :props='props'>
            {{ props.row.Index }}
          </q-td>
          <q-td key='SnapshotCommP' :props='props'>
            {{ props.row.SnapshotCommP }}
          </q-td>
          <q-td key='SnapshotRoot' :props='props'>
            {{ props.row.SnapshotRoot }}
          </q-td>
          <q-td key='SnapshotURI' :props='props'>{{ props.row.SnapshotURI }}</q-td>
          <q-td key='BackupState' :props='props'>{{ props.row.BackupState }}</q-td>
          <q-td key='ProposalCID' :props='props'>{{ props.row.ProposalCID }}</q-td>
          <q-td key='DealID' :props='props'>{{ props.row.DealID }}</q-td>
          <q-td key='Items' :props='props'>{{ props.row.Items?.join(',') }}</q-td>
        </q-tr>
    </template>
  </q-table>
  </div>
</template>

<script setup lang='ts'>
import { useSnapshotStore } from 'src/teststore/snapshot';
import { Snapshot, BackupState } from 'src/teststore/snapshot/types';
import { computed, onMounted } from 'vue';

const snapshot = useSnapshotStore()
const snapshots = computed(() => snapshot.Snapshots.Snapshots)

const snapshotsMap = computed(() => {
  const rowMap = new Map<string, Snapshot[]>() 
  Object.values(BackupState).forEach((state) => {
    const stateStr = state.toString()
    const rows = [] as Array<Snapshot>
    snapshots.value.forEach((sl) => {
      if (sl.BackupState === state) {
        rows?.push(sl)
      }
    })
    rowMap.set(stateStr, rows)
  } )
  console.log('rowMap: ', rowMap)
  return rowMap
})
onMounted(() => {
  if(snapshots.value?.length === 0) {
    getSnapshots()
  }
})

const getSnapshots = () => {
  snapshot.GetSnapshots({
    Message: {}
  }, () => {
    // TODO
  })
}

const columns = computed(() => [
  {
    name: 'ID',
    label: 'ID',
    field: 'ID',
    align: 'left',
  },
  {
    name: 'Index',
    label: 'Index',
    field: 'Index',
    align: 'left',
  },
  {
    name: 'SnapshotCommP',
    label: 'SnapshotCommP',
    field: 'SnapshotCommP',
    align: 'left',
  },
  {
    name: 'SnapshotRoot',
    label: 'SnapshotRoot',
    field: 'SnapshotRoot',
    align: 'left',
  },
  {
    name: 'SnapshotURI',
    label: 'SnapshotURI',
    field: 'SnapshotURI',
    align: 'left',
  },
  {
    name: 'BackupState',
    label: 'BackupState',
    field: 'BackupState',
    align: 'left',
  },
  {
    name: 'ProposalCID',
    label: 'ProposalCID',
    field: 'ProposalCID',
    align: 'left',
  },
  {
    name: 'DealID',
    label: 'DealID',
    field: 'DealID',
    align: 'left',
  },
  {
    name: 'Items',
    label: 'Items',
    field: (row: Snapshot) => row.Items.join(','),
    align: 'left',
  },
]) 
</script>
