//using System.Text.Json.Serialization;
//using SPTarkov.Server.Core.Models.Eft.Common;

import type { WildSpawnType } from "../ILocationBase.js";

interface IMind {

  /// <summary>
  /// Should the bot ignore damage from grenades
  /// </summary>
  "GRENADE_DAMAGE_IGNORE": boolean;

  /// <summary>
  /// Min. number of shots fired at random at the position from which fire was conducted at close range
  /// </summary>
  "MIN_SHOOTS_TIME": number;

  /// <summary>
  /// Max number of shots fired at random at the position from which the fire was conducted at close range
  /// </summary>
  "MAX_SHOOTS_TIME": number;

  /// <summary>
  /// The bot can only punish after this amount of time has passed since the last enemy it saw disappeared from the field.
  /// </summary>
  "TIME_TO_RUN_TO_COVER_CAUSE_SHOOT_SEC": number;

  /// <summary>
  /// The time after which the bot will restore its characteristics after receiving damage
  /// </summary>
  "DAMAGE_REDUCTION_TIME_SEC": number;

  /// <summary>
  /// Minimum damage a bot must take to get a danger point
  /// default 20
  /// </summary>
  "MIN_DAMAGE_SCARE": number;

  /// <summary>
  /// The probability that a bot will run if it is hit while it is in cover and cannot/cannot see to shoot at the enemy
  /// </summary>
  "CHANCE_TO_RUN_CAUSE_DAMAGE_0_100": number;

  /// <summary>
  /// After X seconds, the enemy stops being given out by the task distributor to bots
  /// </summary>
  "TIME_TO_FORGOR_ABOUT_ENEMY_SEC": number;

  /// <summary>
  /// After X seconds the bot will search for the enemy by coming to the place of his last vision! must be less than TIME_TO_FORGOR_ABOUT_ENEMY_SEC
  /// </summary>
  "TIME_TO_FIND_ENEMY": number;
  "MAX_AGGRO_BOT_DIST": number;

  /// <summary>
  /// The coefficient of accuracy of perception of the position from which the player was hit is higher - more accurate
  /// </summary>
  "HIT_POINT_DETECTION": number;

  /// <summary>
  /// Danger point coefficient when seeking shelter. Danger point
  /// </summary>
  "DANGER_POINT_CHOOSE_COEF": number;

  /// <summary>
  /// Danger point coefficient when seeking shelter. Simple point
  /// </summary>
  "SIMPLE_POINT_CHOOSE_COEF": number;
  "LASTSEEN_POINT_CHOOSE_COEF": number;
  "COVER_DIST_COEF": number;
  "DIST_TO_FOUND_SQRT": number;

  /// <summary>
  /// Does the player search for the opponent when there is a GoalTarget?
  /// </summary>
  "SEARCH_TARGET": boolean;

  /// <summary>
  /// if the flag is set on at least one bot in a bot group, then the entire group becomes hostile, in which there is one hostile PMC player
  /// </summary>
  "ENEMY_BY_GROUPS_PMC_PLAYERS": boolean;

  /// <summary>
  /// if the flag is set on at least one bot in a bot group, then the entire group becomes hostile, which contains one hostile wild player
  /// </summary>
  "ENEMY_BY_GROUPS_SAVAGE_PLAYERS": boolean;

  /// <summary>
  /// If true then bosses do not change their behavior for a player with a high reputation as a fencer
  /// </summary>
  "BOSS_IGNORE_LOYALTY": boolean;
  "DEFAULT_BEAR_BEHAVIOUR": EWarnBehaviour;

  "DEFAULT_USEC_BEHAVIOUR": EWarnBehaviour;

  "DEFAULT_SAVAGE_BEHAVIOUR": EWarnBehaviour
  /// <summary>
  /// Must be sent to client as strings
  /// </summary>
  "FRIENDLY_BOT_TYPES": WildSpawnType;

  /// <summary>
  /// Must be sent to client as strings
  /// </summary>
  "WARN_BOT_TYPES": WildSpawnType;

  /// <summary>
  /// Must be sent to client as strings
  /// </summary>
  "ENEMY_BOT_TYPES": WildSpawnType;

  /// <summary>
  /// Must be sent to client as strings
  /// </summary>
  "REVENGE_BOT_TYPES": WildSpawnType;

  "FOLLOWER_AND_BOSS_WARN_EQUAL_PRIORITY": boolean;
  "MUTUAL_IGNORE_FRIENDLY_FIRE": boolean;
  "MAX_AGGRO_BOT_DIST_UPPER_LIMIT": number;
  "MAX_AGGRO_BOT_DIST_SQR_UPPER_LIMIT": number;
  "MAX_AGGRO_BOT_DIST_SQR": number;
  "DIST_TO_STOP_RUN_ENEMY": number;

  /// <summary>
  /// The angle at which the bot understands that the enemy is looking at it
  /// </summary>
  "ENEMY_LOOK_AT_ME_ANG": number;
  "MIN_START_AGGRESION_COEF": number;
  "MAX_START_AGGRESION_COEF": number;

  /// <summary>
  /// Distance from which a bot can "feel" a bullet
  /// </summary>
  "BULLET_FEEL_DIST": number;
  "BULLET_FEEL_CLOSE_SDIST": number;

  /// <summary>
  /// Chance that after losing sight of an enemy and not having a new one, the bot will immediately go looking for an enemy.
  /// Only applicable for attack tactics. (Then there is a check for your own strength and the strength of the enemy.)
  /// </summary>
  "ATTACK_IMMEDIATLY_CHANCE_0_100": number;

  /// <summary>
  /// Chance to show a faq when the bot sees the player
  /// </summary>
  "CHANCE_FUCK_YOU_ON_CONTACT_100": number;

  /// <summary>
  /// How much does a bot's aggression drop if someone in its group is killed?
  /// </summary>
  "FRIEND_DEAD_AGR_LOW": number;
  "FRIEND_AGR_KILL": number;
  "LAST_ENEMY_LOOK_TO": number;
  "CAN_RECEIVE_PLAYER_REQUESTS_BEAR": boolean;
  "CAN_RECEIVE_PLAYER_REQUESTS_USEC": boolean;
  "CAN_RECEIVE_PLAYER_REQUESTS_SAVAGE": boolean;
  "REVENGE_TO_GROUP": boolean;
  "REVENGE_FOR_SAVAGE_PLAYERS": boolean;
  "CAN_USE_MEDS": boolean;
  "SUSPETION_POINT_CHANCE_ADD100": number;
  "AMBUSH_WHEN_UNDER_FIRE": boolean;
  "AMBUSH_WHEN_UNDER_FIRE_TIME_RESIST": number;
  "CAN_LOOT_BOSS_CLUSTER": boolean;
  "ATTACK_ENEMY_IF_PROTECT_DELTA_LAST_TIME_SEEN": number;
  "HOLD_IF_PROTECT_DELTA_LAST_TIME_SEEN": number;
  "FIND_COVER_TO_GET_POSITION_WITH_SHOOT": number;
  "PROTECT_TIME_REAL": boolean;
  "CHANCE_SHOOT_WHEN_WARN_PLAYER_100": number;
  "CAN_PANIC_IS_PROTECT": boolean;
  "NO_RUN_AWAY_FOR_SAFE": boolean;
  "PART_PERCENT_TO_HEAL": number;
  "PROTECT_DELTA_HEAL_SEC": number;
  "CAN_STAND_BY": boolean;
  "CAN_THROW_REQUESTS": boolean;
  "GROUP_ANY_PHRASE_DELAY": number;
  "GROUP_EXACTLY_PHRASE_DELAY": number;
  "GROUP_EXACTLY_PHRASE_DELAY_MAX": number;
  "DIST_TO_ENEMY_YO_CAN_HEAL": number;

  /// <summary>
  /// Chance that after the first 2 actions when warning the bot will stand and wait for the next 4 seconds
  /// </summary>
  "CHANCE_TO_STAY_WHEN_WARN_PLAYER_100": number;
  "DOG_FIGHT_OUT": number;

  /// <summary>
  /// Will enter dogfight
  /// default 3
  /// </summary>
  "DOG_FIGHT_IN": number;
  "SHOOT_INSTEAD_DOG_FIGHT": number;
  "PISTOL_SHOTGUN_AMBUSH_DIST": number;
  "STANDART_AMBUSH_DIST": number;
  "AI_POWER_COEF": number;
  "COVER_SECONDS_AFTER_LOSE_VISION": number;
  "COVER_SELF_ALWAYS_IF_DAMAGED": boolean;
  "SEC_TO_MORE_DIST_TO_RUN": number;
  "HEAL_DELAY_SEC": number;
  "HIT_DELAY_WHEN_HAVE_SMT": number;
  "HIT_DELAY_WHEN_PEACE": number;
  "TALK_WITH_QUERY": boolean;
  "DANGER_EXPIRE_TIME_MIN": number;
  "DANGER_EXPIRE_TIME_MAX": number;
  "PANIC_RUN_WEIGHT": number;
  "PANIC_SIT_WEIGHT": number;
  "PANIC_LAY_WEIGHT": number;
  "PANIC_NONE_WEIGHT": number;
  "PANIC_SIT_WEIGHT_PEACE": number;
  /// <summary>
  /// Can a bot execute requests?
  /// </summary>
  "CAN_EXECUTE_REQUESTS": boolean;
  "CAN_WARN_SELF": boolean;
  "DIST_TO_ENEMY_SPOTTED_ON_HIT": number;
  "UNDER_FIRE_PERIOD": number;
  "MEDS_ONLY_SAFE_CONTAINER": boolean;
  "CAN_DROP_ITEMS": boolean;
  "CAN_TAKE_ITEMS": boolean;
  "THROW_DIST_TO_SEE": number;
  "CAN_TAKE_ANY_ITEM": boolean;
  "WILL_PERSUE_AXEMAN": boolean;
  "MAX_DIST_TO_RUN_PERSUE_AXEMAN": number;
  "MAX_DIST_TO_PERSUE_AXEMAN": number;
  /// <summary>
  /// Use surgeon kit only from safe container
  /// </summary>
  "SURGE_KIT_ONLY_SAFE_CONTAINER": boolean;
  "CAN_USE_LONG_COVER_POINTS": boolean;
  "CAN_USE_FOOD_DRINK": boolean;
  "FOOD_DRINK_DELAY_SEC": number;
  /// <summary>
  /// What exactly to do when you come to a corpse 1 - use a medicine kit 2 - loot. Default - watch. public bool CAN_TALK = true;
  /// </summary>
  "HOW_WORK_OVER_DEAD_BODY": number;
  "DEADBODYWORK_INITIAL_DELAY": number;
  "DEADBODYWORK_CHECK_ITEMS_DELAY": number;
  "DEADBODYWORK_MOVE_ITEMS_DELAY": number;
  "DEADBODYWORK_DROP_ITEMS_DELAY": number;
  "CAN_TALK": boolean;
  "ACTIVE_FORCE_ATTACK_EVENTS": boolean;
  "ACTIVE_FOLLOW_PLAYER_EVENTS": boolean;
  /// <summary>
  /// The bot can be called to help by the boss (for example, Tagilla or Boar
  /// </summary>
  "MAY_BE_CALLED_FOR_HELP": boolean;
  "GIFTER_ADDITIONAL_GIFTS": number;
  "ANGLE_TO_SHOOT_BTR": number;
  "ROTATION_SPEED_BTR": number;
  "IGNORE_ANOTHER_BOTS_BEING_HIT": boolean;
  "AVOID_BTR_RADIUS_SQR": number;
  "SNIPER_FIRE_IMMUNE": boolean;

  /// <summary>
  /// If the flag is set, then enemies are added only for reasons from the VALID_REASONS_TO_ADD_ENEMY list.
  /// </summary>
  "USE_ADD_TO_ENEMY_VALIDATION": boolean;

  /// <summary>
  /// List of valid reasons for adding enemies, provided that the USE_ADD_TO_ENEMY_VALIDATION flag is set
  /// </summary>
  "VALID_REASONS_TO_ADD_ENEMY": EBotEnemyCause;

  "CHECK_MARK_OF_UNKNOWS": boolean;
  "SDIST_TO_DELIVER_INFO_WHEN_ENEMY": number;
  "TRIPWIRE_INERT_TIME": number;
  "IGNORE_TRAP": boolean;
  "CHANCE_TO_IGNORE_TRIPWIRE": number;
  "CHACE_TO_DEACTIVATE": number;
  "REACT_ADD_DRUNK_ENEMY": boolean;
  "DIST_TO_HIDE_ASSAULT": number;
  "KEEP_ZONE_ON_SPAWN_TIME_SEC": number;
  "IGNORE_DANGER_PLACES": boolean;
  "PUSH_AND_SUPPRESS_HIDE": number;
  /// <summary>
  /// For the PushAndSuppressLayer layer, the distance from which the bot will push HARD
  /// </summary>
  "PUSH_AND_SUPPRESS_PUSH": number;

}

enum EWarnBehaviour {
  Default = 1,
  Neutral = 2,
  Warn = 4,
  AlwaysEnemies = 8,
  AlwaysFriends = 16,
  ChancedEnemies = 32,
}

enum EBotEnemyCause {
  pairLogic,
  initial,
  zryachiyLogic,
  addPlayerToBoss,
  addPlayer,
  addCauseGroup,
  initCauseEnemy,
  checkAddTODO,
  addBotAtGroup,
  addBotNoGroup,
  AddNewMember,
  byKill,
  AddEnemyToAllGroupsInBotZone,
  AddEnemyToAllGroups,
  warn,
  callBot,
  followGetHit,
  gifterKill,
  bossKillArena,
  KillaSyncTagilla,
  tagillaFindENemy,
  fuckGestus,
  pmcBossKill,
  rndWanrRequest,
  christmas,
  synWithKilla,
  death,
  doFollow2,
  doFollow,
  callForHelp2,
  callForHelp1,
  ravangeZryachiy,
  lighthouseKeeperServices,
  lighthouseKeeperServicesTarget,
  partisanBadKarma,
  attackBTR,
  serviceBTR,
  tagillaAlarm,
  drunk,
  Unknown,
  MarkOfUnknowsDist,
}