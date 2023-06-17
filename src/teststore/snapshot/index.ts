import { defineStore } from 'pinia'
import { doActionWithError } from '../action'
import { API } from './const'
import { GetSnapshotsRequest, GetSnapshotsResponse } from './types'

export const useFrontendSnapshotStore = defineStore('frontend-Snapshot-v4', {
  state: () => ({}),
  getters: {},
  actions: {
    GetSnapshots (req: GetSnapshotsRequest, done: (error: boolean) => void) {
      doActionWithError<GetSnapshotsRequest, GetSnapshotsResponse>(
        API.GET_SNAPSHOTS,
        req,
        req.Message,
        (): void => {
          done(false)
        }, () => {
          done(true)
      })
    }
  }
})