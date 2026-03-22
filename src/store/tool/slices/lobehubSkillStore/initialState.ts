import { type LobehubSkillServer } from './types';

/**
 * Student-AI Skill Store state interface
 *
 * NOTE: All connection states and tool data are fetched in real-time from Market API, not stored in local database
 */
export interface LobehubSkillStoreState {
  /** Set of executing tool call IDs */
  lobehubSkillExecutingToolIds: Set<string>;
  /** Set of loading Provider IDs */
  lobehubSkillLoadingIds: Set<string>;
  /** List of connected Student-AI Skill Servers */
  lobehubSkillServers: LobehubSkillServer[];
}

/**
 * Student-AI Skill Store initial state
 */
export const initialLobehubSkillStoreState: LobehubSkillStoreState = {
  lobehubSkillExecutingToolIds: new Set(),
  lobehubSkillLoadingIds: new Set(),
  lobehubSkillServers: [],
};
