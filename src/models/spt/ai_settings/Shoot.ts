//using System.Text.Json.Serialization;

//namespace SPTarkov.Server.Core.Models.Eft.Bot.GlobalSettings;


// See BotGlobalShootData in the client, this record should match that
// These are all nullable so that only values get written if they are set, 
// we don't want default values to be written to the client

interface BotGlobalShootData {

  "SWITCH_TO_UNDERBARREL_WEAPON_COOLDOWN": number;
  "MIN_TIME_TO_CHECK_FORCE_SWITCH_TO_GRENADE_LAUNCHER": number;
  "MAX_TIME_TO_CHECK_FORCE_SWITCH_TO_GRENADE_LAUNCHER": number;
  "MAX_TIME_SEEN_TO_SWITCH_TO_GRENADE_LAUNCHER": number;
  "MAX_SUCCESS_GRENADE_LAUNCHER_SHOOT_ATTEMPTS": number;
  "SHOOT_PROBABILITY_GRENADE_LAUNCHER": number;
  "LOW_DIST_K_FOR_GRENADE_LAUNCHER": number;
  "DEFAULT_LOW_DIST_TO_USE_GRENADE_LAUNCHER": number;
  "DISTANCE_TO_TARGET_NEAR_ENEMY_TRESHOLD": number;
  "DISTANCE_TO_TARGET_NEAR_ENEMY_DEVIATION": number;
  "RECOIL_TIME_NORMALIZE": number;
  "RECOIL_PER_METER": number;
  "MAX_RECOIL_PER_METER": number;
  "HORIZONT_RECOIL_COEF": number;
  "WAIT_NEXT_SINGLE_SHOT": number;
  "WAIT_NEXT_STATIONARY_BULLET": number;
  "WAIT_NEXT_STATIONARY_GRENADE": number;
  "WAIT_NEXT_SINGLE_SHOT_LONG_MAX": number;
  "WAIT_NEXT_SINGLE_SHOT_LONG_MIN": number;
  "NEXT_SINGLE_SHOT_PAUSE": number;
  "SINGLE_SHOT_SERIES_TIME_MIN": number;
  "SINGLE_SHOT_SERIES_TIME_MAX": number;
  "USE_SINGLE_SHOT_SERIES": boolean;
  "MARKSMAN_DIST_SEK_COEF": number;
  "FINGER_HOLD_SINGLE_SHOT": number;
  "FINGER_HOLD_STATIONARY_BULLET": number;
  "FINGER_HOLD_STATIONARY_GRENADE": number;
  "BASE_AUTOMATIC_TIME": number;
  "AUTOMATIC_FIRE_SCATTERING_COEF": number;
  "CHANCE_TO_CHANGE_TO_AUTOMATIC_FIRE_100": number;
  "FAR_DIST_ENEMY": number;
  "SHOOT_FROM_COVER": number;
  "FAR_DIST_ENEMY_SQR": number;
  "MAX_DIST_COEF": number;
  "RECOIL_DELTA_PRESS": number;
  "RUN_DIST_NO_AMMO": number;
  "RUN_DIST_NO_AMMO_SQRT": number;
  "CAN_SHOOTS_TIME_TO_AMBUSH": number;
  "NOT_TO_SEE_ENEMY_TO_WANT_RELOAD_PERCENT": number;
  "NOT_TO_SEE_ENEMY_TO_WANT_RELOAD_SEC": number;
  "RELOAD_PECNET_NO_ENEMY": number;
  "CHANCE_TO_CHANGE_WEAPON": number;
  "CHANCE_TO_CHANGE_WEAPON_WITH_HELMET": number;
  "LOW_DIST_TO_CHANGE_WEAPON": number;
  "FAR_DIST_TO_CHANGE_WEAPON": number;
  "SUPPRESS_BY_SHOOT_TIME": number;
  "SUPPRESS_TRIGGERS_DOWN": number;
  "SUPPRESS_TRIGGERS_DOWN_AS_LIST": number;
  "DIST_TO_CHANGE_TO_MAIN": number;
  "AGS_17_DIST_TO_LEAVE": number;
  "DIST_TO_HIT_MELEE": number;
  "DIST_TO_HIT_MELEE_CONTINUE_COMBO": number;
  "DIST_TO_STOP_SPRINT_MELEE": number;
  "TRY_HIT_PERIOD_MELEE": number;
  "BLOCK_PERIOD_WHEN_LAY": number;
  "CHANGE_WEAPON_PERIOD": number;
  "USE_MELEE_COMBOS": boolean
  "MELEE_RESET_HIT_TIME": number;
  "MELEE_STOP_MOVE_DISTANCE": number;
  "VALIDATE_MALFUNCTION_CHANCE": number;
  "REPAIR_MALFUNCTION_IMMEDIATE_CHANCE": number;
  "DELAY_BEFORE_EXAMINE_MALFUNCTION": number;
  "DELAY_BEFORE_FIX_MALFUNCTION": number;
  "TRY_CHANGE_WEAPON_INSTEAD_RELOAD": boolean;
  "MELEE_ATTACK_ZIG_ZAG": boolean
  "MIN_DIST_TO_ENEMY_TO_CHANGE_WEAPON_INSTEAD_RELOAD": number;
  "CHANCE_TO_CHANGE_WEAPON_INSTEAD_RELOAD": number;
  "CHANCE_TO_CHANGE_WEAPON_INSTEAD_RELOAD_ENEMY_WITHOUT_HELM": number;
  "MELEE_STOP_DIST": number;
  "BLOCK_STEERING": boolean;
  "USE_BTR_CANSHOOT": boolean;
  "FAR_DISTANCE_ALL_WEAPONS": number;
  "FAR_DISTANCE_PISTOLS": number;
  "FAR_DISTANCE_SHOTGUNS": number;
  "FAR_DIST_EYE_CONTACT_TIME_TO_CHANGE_COVER": number;
  "CHANGE_TO_MAIN_WEAPON_WHEN_PATROL": boolean;
  "SHOOT_IMMEDIATELY_DIST": number;
  "CAN_STOP_SHOOT_CAUSE_ANIMATOR": boolean;
  "TRY_CHANGE_WEAPON_WHEN_RELOAD": boolean;
  "CHANGE_TO_MAIN_WHEN_SUPPORT_NO_AMMO": boolean;
  "LAST_SEEN_TIME_TO_START_SUPPRESS_STATIONARY_AGS": number;
  "STATIONARY_GRENADE_MIN_DIST_TO_TAKE": number;
  "STATIONARY_SIMPLE_MIN_DIST_TO_TAKE": number;
  "NO_OFFSET_SHOOTING_FROM_PLAYER": boolean;
  "ALTERNATIVE_KNIFE_KICK": boolean;
  "DITANCE_TO_OFF_AUTO_FIRE": number;
  "DITANCE_TO_ON_AUTO_FIRE": number;
  "MISS_ON_CRITICAL_DIST": number;
  "MISS_AFTER_SPRINT": boolean;

  /// <summary>
  /// The bot misses the head
  /// </summary>
  "MISS_TO_HEAD": boolean;
  /// <summary>
  /// The bot misses while moving
  /// </summary>
  "MISS_ON_MOVE": boolean;
  /// <summary>
  /// Bot misses during transition animations
  /// </summary>
  "MISS_ON_TRANSITION": boolean;

}