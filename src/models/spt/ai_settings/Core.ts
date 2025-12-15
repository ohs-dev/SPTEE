//using System.Text.Json.Serialization;

//namespace SPTarkov.Server.Core.Models.Eft.Bot.GlobalSettings;

// See GClass611 (To be remapped to BotGlobalsCoreSettingsClass) in the client, this record should match that
// These are all nullable so that only values get written if they are set, we don't want default values to be written to the client

interface ICore {
  "VisibleAngle": number
  "VisibleDistance": number
  "ScatteringPerMeter": number
  "ScatteringClosePerMeter": number
  "DamageCoeff": number
  "HearingSense": number
  "CanRun": number
  "CanGrenade": number
  "AimingType": EAimingType
  "PistolFireDistancePref": number
  "ShotgunFireDistancePref": number
  "RifleFireDistancePref": number
  "AccuratySpeed": number
  "WaitInCoverBetweenShotsSec": number
}

enum EAimingType {
  normal,
  regular,
}