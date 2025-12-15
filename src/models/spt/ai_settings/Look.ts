//using System.Text.Json.Serialization;

//namespace SPTarkov.Server.Core.Models.Eft.Bot.GlobalSettings;


/// See BotGlobalLookData in the client, this record should match that
/// These are all nullable so that only values get written if they are set, we don't want default values to be written to the client

interface BotGlobalLookData {

  /// <summary>
  /// The lifetime of the point up to which the bot will pay attention to it with the standard inspection algorithm
  /// </summary>
  "OLD_TIME_POINT": number
  "WAIT_NEW_SENSOR": number
  "WAIT_NEW__LOOK_SENSOR": number
  "LOOK_AROUND_DELTA": number
  "MAX_VISION_GRASS_METERS": number
  "MAX_VISION_GRASS_METERS_FLARE": number
  "MAX_VISION_GRASS_METERS_OPT": number
  "MAX_VISION_GRASS_METERS_FLARE_OPT": number
  "LightOnVisionDistance": number
  "FAR_DISTANCE": number
  "FarDeltaTimeSec": number
  "MIDDLE_DIST": number
  "MiddleDeltaTimeSec": number
  "CloseDeltaTimeSec": number
  "POSIBLE_VISION_SPACE": number
  "VISIBILITY_CHANGE_SPEED": number
  "VISIBILITY_CHANGE_DECREASE_SPEED": number
  "BASE_RUNTIME_EFFECT_K": number
  // The maximum value of the coefficient of the speed of change of the visibility 
  // scale at a minimum distance. The higher it is, the faster the scale 
  // will increase near the enemy
  "MIN_DISTANCE_VISIBILITY_CHANGE_SPEED_K": number
  "MAX_DISTANCE_VISIBILITY_CHANGE_SPEED_K": number
  "GOAL_TO_FULL_DISSAPEAR": number
  "GOAL_TO_FULL_DISSAPEAR_GREEN": number
  "GOAL_TO_FULL_DISSAPEAR_SHOOT": number
  "BODY_DELTA_TIME_SEARCH_SEC": number
  "COME_TO_BODY_DIST": number
  "MARKSMAN_VISIBLE_DIST_COEF": number
  "VISIBLE_DISNACE_WITH_LIGHT": number
  "ENEMY_LIGHT_ADD": number
  "ENEMY_LIGHT_START_DIST": number
  "DIST_NOT_TO_IGNORE_WALL": number
  "DIST_CHECK_WALL": number
  "LOOK_LAST_POSENEMY_IF_NO_DANGER_SEC": number
  "MIN_LOOK_AROUD_TIME": number
  "LOOK_THROUGH_GRASS": number
  "LOOK_THROUGH_GRASS_DIST_METERS": number
  "SEC_REPEATED_SEEN": number
  "DIST_SQRT_REPEATED_SEEN": number
  "DIST_REPEATED_SEEN": number
  "COEF_REPEATED_SEEN": number
  "MAX_DIST_CLAMP_TO_SEEN_SPEED": number
  "NIGHT_VISION_ON": number
  "NIGHT_VISION_OFF": number
  "NIGHT_VISION_DIST": number
  "VISIBLE_ANG_LIGHT": number
  "VISIBLE_ANG_NIGHTVISION": number

  /// <summary>
  /// if the distance between players is less than X then grass and foliage are ignored at the Layers level
  /// </summary>
  "NO_GREEN_DIST": number

  /// <summary>
  /// if the distance between players is less than X then grass is ignored at the Layers level
  /// </summary>
  "NO_GRASS_DIST": number

  /// <summary>
  /// Coefficient applied to the speed of notice if the bot is inside the bush
  /// </summary>
  "INSIDE_BUSH_COEF": number

  /// <summary>
  /// what curve to use for vision range by time of day
  /// </summary>
  "SELF_NIGHTVISION": boolean
  "FULL_SECTOR_VIEW": boolean

  /// <summary>
  /// How many seconds after being hit will you be able to see through the greenery?
  /// </summary>
  "LOOK_THROUGH_PERIOD_BY_HIT": number
  "CHECK_HEAD_ANY_DIST": boolean
  "MIDDLE_DIST_CAN_SHOOT_HEAD": boolean
  "CAN_USE_LIGHT": boolean
  "RAIN_DEBUFF_MAXVISIBILITY_MULTIPLYER": number
  "FOG_DEBUFF_MAXVISIBILITY_MULTIPLYER": number
  "RAIN_DEBUFF_SEENCOEFF_MULTIPLYER": number
  "FOG_DEBUFF_SEENCOEFF_MULTIPLYER": number
  "SHOOT_FROM_EYES": boolean
  "ANGLE_FOR_GETUP": number
  "MINIMUM_VISIBLE_DIST": number
  "CAN_USE_STRIBOSCOPE": number
  "LOOK_TO_ENEMY_TIME": number
  "ANGLE_VISION_COEF_FILTER": number
  "HEAD_ROTATE_SPEED": number
  "VISIBILITY_LEVEL_TO_TURN_HEAD": number
}