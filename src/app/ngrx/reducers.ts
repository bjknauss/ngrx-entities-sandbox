import {
  UserState,
  userAdapter,
  initialUserState,
  demoUserState,
} from "./entities";
import { UserActions, UserActionTypes } from "./actions";

export function userReducer(
  state: UserState = demoUserState,
  action: UserActions
): UserState {
  switch (action.type) {
    case UserActionTypes.AddOne:
      return userAdapter.addOne(action.payload, state);

    case UserActionTypes.AddMany:
      return userAdapter.addMany(action.payload, state);

    case UserActionTypes.Update:
      return userAdapter.updateOne(
        {
          id: action.payload.id,
          changes: action.payload.changes,
        },
        state
      );

    case UserActionTypes.Upsert:
      return userAdapter.upsertOne(action.payload, state);

    default:
      return state;
  }
}
