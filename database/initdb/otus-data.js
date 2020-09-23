db = db.getSiblingDB('otus');

db.auth ("USER", "PASS")

db.getCollection("project_configuration").insert({
  "objectType" : "ProjectConfiguration",
  "participantRegistration" : false,
  "autoGenerateRecruitmentNumber" : false
});


db.getCollection("user_permission_profile").insert({
  "name": "DEFAULT",
  "permissions": [
    {
      "objectType": "ActivityPermission",
      "participantActivityAccess": false,
      "offlineActivitySincAccess": false,
    },
    {
      "objectType": "ParticipantPermission",
      "participantListAccess": false,
      "participantCreateAccess": false,
      "anonymousParticipantAccess": false
    },
    {
      "objectType": "MonitoringPermission",
      "centerActivitiesAccess": false,
      "activityFlagsAccess": false,
      "laboratoryFlagsAccess": false,
      "laboratoryControlAccess": false,
      "pendencyVisualizerAccess": false
    },
    {
      "objectType": "SurveyGroupPermission",
      "groups": []
    },
    {
      "objectType": "LaboratoryPermission",
      "participantLaboratoryAccess": false,
      "sampleTransportationAccess": false,
      "examLotsAccess": false,
      "examSendingAccess": false,
      "unattachedLaboratoriesAccess": false,
      "laboratoryMaterialManagerAccess": false
    }
  ]
});

db.system.js.save({
  _id: "syncResults",
  value: function() {
    var AliquotExamCorrelation = db.laboratory_configuration.findOne({
      objectType: "AliquotExamCorrelation"
    });

    var result = db.exam_result.aggregate([{
        $match: {
          aliquotValid: false
        }
      },
      {
        $group: {
          _id: '$aliquotCode'
        }
      },
      {
        $group: {
          _id: {},
          aliquotCodeList: {
            $push: '$_id'
          }
        }
      }
    ]).toArray();

    if (result[0]) {
      db.aliquot.find({
        code: {
          $in: result[0].aliquotCodeList
        }
      }).forEach((aliquot) => {
        var aliquotExams = AliquotExamCorrelation.aliquots.filter((oneAliquotExams) => {
          return oneAliquotExams.name === aliquot.name;
        });
        print(aliquotExams[0].exams);
        db.exam_result.updateMany({
          aliquotCode: aliquot.code,
          examName: {
            $in: aliquotExams[0].exams
          }
        }, {
          $set: {
            recruitmentNumber: aliquot.recruitmentNumber,
            sex: aliquot.sex,
            birthdate: aliquot.birthdate,
            aliquotValid: true
          }
        })
      })
    }
  }
})
