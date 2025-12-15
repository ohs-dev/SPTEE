//namespace SPTarkov.Server.Core.Models.Eft.Bot.GlobalSettings;

interface IScattering {

  "AMPLITUDE_FACTOR": number;
  "AMPLITUDE_SPEED": number;

  // Float to Coefficient of change in working circle of accuracy during bleeding
  "BloodFall": number;

  "Caution": number;
  "DIST_FROM_OLD_POINT_TO_NOT_AIM": number;
  "DIST_FROM_OLD_POINT_TO_NOT_AIM_SQRT": number;
  "DIST_NOT_TO_SHOOT": number;

  // Degrees How much the bot's spread angle diverges when it is hit, multiplied by the damage
  "FromShot": number;

  "HandDamageScatteringMinMax": number;
  "HandDamageAccuracySpeed": number;

  // At the moment of changing the position to prone/non-prone, the current circle of convergence will increase by X
  "LayFactor": number;

  "MaxScatter": number;
  "MinScatter": number;
  "MovingSlowCoef": number
  "PoseChnageCoef": number;
  "RecoilControlCoefShootDone": number;
  "RecoilControlCoefShootDoneAuto": number;
  "RecoilYCoef": number;
  "RecoilYCoefSppedDown": number;
  "RecoilYMax": number;
  "SpeedDown": number;
  "SpeedUp": number;
  "SpeedUpAim": number;
  "ToCaution": number;
  "ToLowBotAngularSpeed": number;
  "ToLowBotSpeed": number;
  "ToSlowBotSpeed": number;
  "ToUpBotSpeed": number;
  "ToStopBotAngularSpeed": number;
  "TracerCoef": number;
  "WorkingScatter": number;
}