//namespace SPTarkov.Server.Core.Models.Eft.Bot.GlobalSettings;

interface ICover {

  // <summary>
  // Can it lie down in shelters if it is of the lying type?
  // </summary>
  "CAN_LAY_TO_COVER": boolean;

  "CAN_END_SHOOT_FROM_COVER_CAUSE_STATIONARY": boolean;
  "CAN_END_SHOOT_FROM_COVER_CAUSE_STATIONARY_DELTA": number;
  "CAN_END_SHOOT_FROM_COVER_CAUSE_STATIONARY_RADIUS": number;
  "CAN_LAY_TO_COVER_DIST_LOOK_TO_ENEMY": number;
  "CHANGE_COVER_IF_CANT_SHOOT_SEC": number;
  "CHECK_CLOSEST_FRIEND_DIST": number;
  "CLOSE_DIST_POINT_SQRT": number;
  "CHANGE_RUN_TO_COVER_SEC": number;
  "CHANGE_RUN_TO_COVER_SEC_GREANDE": number;
  "DELTA_SEEN_FROM_COVE_LAST_POS": number;
  "DIST_MAX_REWORK_NOT_TO_SHOOT": number;
  "DIST_CANT_CHANGE_WAY": number;
  "DIST_CHECK_SFETY": number;
  "DIST_CANT_CHANGE_WAY_SQR": number;
  "DEPENDS_Y_DIST_TO_BOT": boolean;

  "CHECK_COVER_ENEMY_LOOK": boolean;
  "CHECK_CLOSEST_FRIEND": boolean;
  "DOG_FIGHT_AFTER_LEAVE": number;
  "DELETE_POINTS_BEHIND_ENEMIES": boolean;
  "GOOD_DIST_TO_POINT_COEF": number;
  "HITS_TO_LEAVE_COVER": number;
  "HITS_TO_LEAVE_COVER_UNKNOWN": number;
  "HIDE_TO_COVER_TIME": number;
  "LOOK_LAST_ENEMY_POS_MOVING": number;
  "LOOK_LAST_ENEMY_POS_LONG": number;
  "LOOK_LAST_ENEMY_POS_DIST": number;
  "LOOK_TO_HIT_POINT_IF_LAST_ENEMY": number;
  "LOOK_LAST_ENEMY_POS_LOOKAROUND": number;
  "MAX_DIST_OF_COVER": number;
  "MAX_DIST_OF_COVER_SQR": number;
  "MAX_SPOTTED_TIME_SEC": number;
  "MIN_DEFENCE_LEVEL": number;
  "MIN_TO_ENEMY_TO_BE_NOT_SAFE_SQRT": number;
  "MIN_DIST_TO_ENEMY": number;

  // <summary>
  // If the enemy is closer than X to this point, the bot will consider that it is impossible to hide there.
  // </summary>
  "MIN_TO_ENEMY_TO_BE_NOT_SAFE": number;

  "MAX_ITERATIONS": number;
  "MOVE_TO_COVER_WHEN_TARGET": boolean;
  "NOT_LOOK_AT_WALL_IS_DANGER": boolean;
  "OFFSET_LOOK_ALONG_WALL_ANG": number;
  "RUN_COVER_IF_CAN_AND_NO_ENEMIES": boolean;
  "RETURN_TO_ATTACK_AFTER_AMBUSH_MIN": number;
  "RETURN_TO_ATTACK_AFTER_AMBUSH_MAX": number;

  // <summary>
  // The bot will run to cover if it is closer than X
  // </summary>
  "RUN_IF_FAR": number;
  "RUN_IF_FAR_SQRT": number;

  "SPOTTED_GRENADE_RADIUS": number;
  "SPOTTED_GRENADE_TIME": number;
  "SPOTTED_COVERS_RADIUS": number;
  "SOUND_TO_GET_SPOTTED": number;
  "TIME_CHECK_SAFE": number;
  "TIME_TO_MOVE_TO_COVER": number;

  // <summary>
  // The bot will go shooting into cover if it 
  // is closer than X but more than RUN_IF_FAR
  "STAY_IF_FAR": number;
  "STAY_IF_FAR_SQRT": number;
  "SHOOT_NEAR_TO_LEAVE": number;
  "SHOOT_NEAR_SEC_PERIOD": number;
  "REWORK_NOT_TO_SHOOT": boolean;
  "ENEMY_DIST_TO_GO_OUT": number;
  "SIT_DOWN_WHEN_HOLDING": boolean;
  "STATIONARY_WEAPON_NO_ENEMY_GETUP": number;
  "STATIONARY_WEAPON_MAX_DIST_TO_USE": number;
  "STATIONARY_SPOTTED_TIMES_TO_LEAVE": number;
  "STATIONARY_CAN_USE": boolean;

  // If the enemy is visible (we are not under fire) and closer than X meters, then we stop holding.
  // default 15
  "END_HOLD_IF_ENEMY_CLOSE_AND_VISIBLE": number;

  "SDIST_MAX_REWORK_NOT_TO_SHOOT": number;
  "USE_DANGER_AREAS": boolean;
  "SHALL_CHANGE_COVER_IF_CAN_SHOOT": boolean;
  "WAIT_INT_COVER_FINDING_ENEMY": number;


}