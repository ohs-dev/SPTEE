//using System.Text.Json.Serialization;

//namespace SPTarkov.Server.Core.Models.Eft.Bot.GlobalSettings;

// See BotGlobalAimingSettings in the client, this record should match that
// These are all nullable so that only values get written if they are set, we don't 
// want default values to be written to the client

interface IAiming {

  /// <summary>
  /// Time for Maximum shooting improvement depending on how long the bot aims
  /// </summary>
  MAX_AIM_PRECICING: number
  BETTER_PRECICING_COEF: number
  RECLC_Y_DIST: number
  RECALC_DIST: number
  RECALC_SQR_DIST: number

  /// <summary>
  /// increased aiming when peeking out from behind cover
  /// </summary>
  COEF_FROM_COVER: number
  PANIC_COEF: number
  PANIC_ACCURATY_COEF: number

  /// <summary>
  /// Improved Aiming Factor
  /// </summary>
  HARD_AIM: number

  /// <summary>
  /// aim chance while shooting [0;100]
  /// </summary>
  HARD_AIM_CHANCE_100: number

  /// <summary>
  /// Panic time is normal
  /// </summary>
  PANIC_TIME: number
  RECALC_MUST_TIME: number
  RECALC_MUST_TIME_MIN: number
  RECALC_MUST_TIME_MAX: number
  DAMAGE_PANIC_TIME: number

  /// <summary>
  /// danger point firing level
  /// </summary>
  DANGER_UP_POINT: number

  /// <summary>
  /// how much better can shooting be from zeroing in - 0.15 == 85%, 0.5 == 50%,  1 == 0%
  /// </summary>
  MAX_AIMING_UPGRADE_BY_TIME: number

  /// <summary>
  /// this is the probability that the bot will mow down the shot when hit. The alternative is to worsen the aiming time
  /// </summary>
  DAMAGE_TO_DISCARD_AIM_0_100: number
  MIN_TIME_DISCARD_AIM_SEC: number
  MAX_TIME_DISCARD_AIM_SEC: number
  XZ_COEF: number
  XZ_COEF_STATIONARY_BULLET: number
  XZ_COEF_STATIONARY_GRENADE: number

  /// <summary>
  /// How many shots on target are needed approximately to change the priority to shooting at legs
  /// </summary>
  SHOOT_TO_CHANGE_PRIORITY: number
  BOTTOM_COEF: number

  /// <summary>
  /// Added to the first time a bot aims at a player
  /// </summary>
  FIRST_CONTACT_ADD_SEC: number

  /// <summary>
  /// Chance of triggering the delay specified in FIRST_CONTACT_ADD_SEC
  /// </summary>
  FIRST_CONTACT_ADD_CHANCE_100: number
  BASE_HIT_AFFECTION_DELAY_SEC: number
  BASE_HIT_AFFECTION_MIN_ANG: number
  BASE_HIT_AFFECTION_MAX_ANG: number

  /// <summary>
  /// Base shift in meters for aiming (example: BASE_SHIEF=5 => means at a distance of 20 meters the aiming will be as at 20+5=25)
  /// </summary>
  BASE_SHIEF: number
  BASE_SHIEF_STATIONARY_BULLET: number
  BASE_SHIEF_STATIONARY_GRENADE: number
  SCATTERING_HAVE_DAMAGE_COEF: number
  SCATTERING_DIST_MODIF: number
  SCATTERING_DIST_MODIF_CLOSE: number
  AIMING_TYPE: number
  DIST_TO_SHOOT_TO_CENTER: number
  DIST_TO_SHOOT_NO_OFFSET: number
  SHPERE_FRIENDY_FIRE_SIZE: number
  COEF_IF_MOVE: number
  TIME_COEF_IF_MOVE: number
  BOT_MOVE_IF_DELTA: number
  NEXT_SHOT_MISS_CHANCE_100: number
  NEXT_SHOT_MISS_Y_OFFSET: number

  /// <summary>
  /// Chance that the bot will turn on the flashlight when aiming
  /// </summary>
  ANYTIME_LIGHT_WHEN_AIM_100: number

  /// <summary>
  /// How many seconds after first spotting an enemy will it be possible to shoot at any part of the body?
  /// default 900  // <- Calling bs on that
  /// </summary>
  ANY_PART_SHOOT_TIME: number
  WEAPON_ROOT_OFFSET: number
  MIN_DAMAGE_TO_GET_HIT_AFFETS: number

  /// <summary>
  /// Maximum aiming time
  /// </summary>
  MAX_AIM_TIME: number
  OFFSET_RECAL_ANYWAY_TIME: number
  Y_TOP_OFFSET_COEF: number
  Y_BOTTOM_OFFSET_COEF: number
  STATIONARY_LEAVE_HALF_DEGREE: number

  /// <summary>
  /// Base number of hits past MIN
  /// </summary>
  BAD_SHOOTS_MIN: number
  BAD_SHOOTS_MAX: number
  BAD_SHOOTS_OFFSET: number
  BAD_SHOOTS_MAIN_COEF: number
  START_TIME_COEF: number
  AIMING_ON_WAY: number

  /// <summary>
  /// The distance to the target, if exceeded, the bot misses on first contact if visibility is obstructed
  /// </summary>
  FIRST_CONTACT_HARD_TO_SEE_MISS_SHOOTS_DISTANCE: number
  FIRST_CONTACT_HARD_TO_SEE_MISS_SHOOTS_COUNT: number
  MISS_FIRST_SOOTS: number
  MISS_ON_START: number
  MISS_DIST: number
  UnderbarrelLauncherAiming: number
}

/// <summary>
/// See BotUnderbarrelLauncherAimingSettings in the client, this record should match that
/// </summary>
interface BotUnderbarrelLauncherAimingSettings {
  AIMING_ON_WAY: number
  ANYTIME_LIGHT_WHEN_AIM_100: number
  BAD_SHOOTS_MIN: number
  BAD_SHOOTS_MAX: number
  START_TIME_COEF: number
  DAMAGE_TO_DISCARD_AIM_0_100: number
  MIN_TIME_DISCARD_AIM_SEC: number
  MAX_TIME_DISCARD_AIM_SEC: number
  MAX_AIM_PRECICING: number
  MAX_AIMING_UPGRADE_BY_TIME: number

  /// <summary>
  /// The bot is considered to be moving if it has passed more than X frame
  /// </summary>
  BOT_MOVE_IF_DELTA: number

  /// <summary>
  /// Panic time is normal
  /// default 6
  /// </summary>
  PANIC_TIME: number
  RECALC_MUST_TIME_MIN: number
  RECALC_MUST_TIME_MAX: number
  RECLC_Y_DIST: number
  RECALC_SQR_DIST: number
  TIME_COEF_IF_MOVE: number
  PANIC_COEF: number
  COEF_FROM_COVER: number
  BOTTOM_COEF: number
  MAX_AIM_TIME: number
  SCATTERING_DIST_MODIF: number
  SCATTERING_DIST_MODIF_CLOSE: number
  DIST_TO_SHOOT_NO_OFFSET: number
  PANIC_ACCURATY_COEF: number
  HARD_AIM: number
  COEF_IF_MOVE: number
  Y_TOP_OFFSET_COEF: number
  Y_BOTTOM_OFFSET_COEF: number
  NEXT_SHOT_MISS_Y_OFFSET: number
  BAD_SHOOTS_OFFSET: number

  /// <summary>
  /// Base coefficient from the formula == Y*ln(x/5+1.2)
  /// </summary>
  BAD_SHOOTS_MAIN_COEF: number
  OFFSET_RECAL_ANYWAY_TIME: number
}