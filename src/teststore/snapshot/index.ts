import { defineStore } from 'pinia'
import { doActionWithError } from '../action'
import { API } from './const'
import { GetSnapshotsRequest, GetSnapshotsResponse, Snapshot } from './types'

export const useSnapshotStore = defineStore('snapshot', {
  state: () => ({
    Snapshots: {
      Snapshots: [] as Array<Snapshot>,
      Total: 0,
    }
  }),
  getters: {},
  actions: {
    GetSnapshots (req: GetSnapshotsRequest, done: (error: boolean) => void) {
      doActionWithError<GetSnapshotsRequest, GetSnapshotsResponse>(
        API.GET_SNAPSHOTS,
        req,
        req.Message,
        (resp: GetSnapshotsResponse): void => {
          this.Snapshots.Snapshots = resp.Infos
          this.Snapshots.Total = resp.Total
          done(false)
        }, () => {
          done(true)
      })
    }
  }
})