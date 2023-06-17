export interface ContentItem {
  ID: string;
  URI: string;
  ChainType: string;
  ChainID: string;
  Contract: string;
  TokenID: string;
  FileName: string;
}

enum BackupState {
  DefaultBackupState  = 'DefaultBackupState',
  BackupStateNone     = 'BackupStateNone',
  BackupStateCreated  = 'BackupStateCreated',
  BackupStateProposed = 'BackupStateProposed',
  BackupStateAccepted = 'BackupStateAccepted',
  BackupStateSuccess  = 'BackupStateSuccess',
  BackupStateFail     = 'BackupStateFail',
}

export interface Snapshot {
  ID: string;
  Index: number;
  SnapshotCommP: string;
  SnapshotRoot: string;
  SnapshotURI: string;
  Items: ContentItem[];
  BackupState: BackupState;
  ProposalCID: string;
  DealID: number;
}

export interface GetSnapshotsRequest {
  Indexes: number[];
}

export interface GetSnapshotsResponse {
  Infos: Snapshot[];
  Total: number;
}

export interface CreateBackupRequest {
  Index: number;
}

export interface CreateBackupResponse {
  Info: Snapshot;
}