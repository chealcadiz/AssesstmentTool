whoAPP.factory('section2Factory',['$http','$q',function($http,$q)
           {
               var section2Factory = {};
               
                section2Factory.statusOfBHSDamage = " ";
                section2Factory.bhsFunctioning = " ";
                section2Factory.tents = " ";
                section2Factory.tempLocation = " ";
                section2Factory.transHealthStation = " ";
                section2Factory.mobileTeams = " ";
                section2Factory.none = " ";
                section2Factory.other = " ";
                section2Factory.repaired = " ";
                section2Factory.rehabilitated=" ";
                section2Factory.notRestored=" ";
                section2Factory.isBHSRestorationNoRestored = " ";
                section2Factory.isBHSRestorationNoRestored = " ";
                section2Factory.noRestorationForResponsibleAngency1 = " ";
                section2Factory.noRestorationForResponsibleAngency2 = " ";
                section2Factory.noRestorationForResponsibleAngency3 = " ";
                section2Factory.isBHSRestorationCompleted = " ";
                section2Factory.isBHSRestorationCompleted=" ";
                section2Factory.restorationCompleteForResponsibleAgency1 = " ";
                section2Factory.restorationCompleteForResponsibleAgency2 = " ";
                section2Factory.restorationCompleteForResponsibleAgency3 = " ";
                section2Factory.isBHSRestorationIncompleted = " ";
                section2Factory.isBHSRestorationIncompleted = " ";
                section2Factory.incompleteRestorationCompleteForResponsibleAgency1 = " ";
                section2Factory.incompleteRestorationCompleteForResponsibleAgency2 = " ";
                section2Factory.incompleteRestorationCompleteForResponsibleAgency3 = " ";
                section2Factory.isBHSbeingReconstructed = " ";
                section2Factory.isBHSbeingReconstructed = " ";
                section2Factory.location = " ";
                section2Factory.bhsReconstructedResponsibleAngency1 = " ";
                section2Factory.bhsReconstructedResponsibleAngency2 = " ";
                section2Factory.bhsReconstructedResponsibleAngency3 = " ";
                section2Factory.isBHSbeingRelocated = " ";
                section2Factory.isBHSbeingRelocated = " ";
                section2Factory.ownersName = " ";
                section2Factory.contactInformation = " ";
                section2Factory.preYolandaWaterSupply = " ";
                section2Factory.preYolandaWaterSupply = " ";
                section2Factory.postYolandaWaterSupply = " ";
                section2Factory.postYolandaWaterSupply = " ";
                section2Factory.preYolandaPowerSupply = " ";
                section2Factory.preYolandaPowerSupply = " ";
                section2Factory.postYolandaPowerSupply = " ";
                section2Factory.postYolandaPowerSupply = " ";
                section2Factory.preYolandaCommunication = " ";
                section2Factory.preYolandaCommunication = " ";
                section2Factory.postYolandaCommunication = " ";
                section2Factory.postYolandaCommunication = " ";
                section2Factory.preYolandaSanitaryToilet = " ";
                section2Factory.preYolandaSanitaryToilet = " ";
                section2Factory.postYolandaSanitaryToilet = " ";
                section2Factory.postYolandaSanitaryToilet = " ";
                section2Factory.preYolandaDrainage = " ";
                section2Factory.preYolandaDrainage = " ";
                section2Factory.preYolandaDrainage = " ";
                section2Factory.postYolandaDrainage = " ";
                section2Factory.postYolandaDrainage = " ";
                section2Factory.isBHSRestorationIncompleted = " ";
               
               section2Factory.save = function(section2){
                   
                   section2Factory = section2;
                   console.log(section2Factory);
               };

               section2Factory.reset = function(){
                section2Factory.statusOfBHSDamage = " ";
                section2Factory.bhsFunctioning = " ";
                section2Factory.tents = " ";
                section2Factory.tempLocation = " ";
                section2Factory.transHealthStation = " ";
                section2Factory.mobileTeams = " ";
                section2Factory.none = " ";
                section2Factory.other = " ";
                section2Factory.repaired = " ";
                section2Factory.rehabilitated=" ";
                section2Factory.notRestored=" ";
                section2Factory.isBHSRestorationNoRestored = " ";
                section2Factory.isBHSRestorationNoRestored = " ";
                section2Factory.noRestorationForResponsibleAngency1 = " ";
                section2Factory.noRestorationForResponsibleAngency2 = " ";
                section2Factory.noRestorationForResponsibleAngency3 = " ";
                section2Factory.isBHSRestorationCompleted = " ";
                section2Factory.isBHSRestorationCompleted=" ";
                section2Factory.restorationCompleteForResponsibleAgency1 = " ";
                section2Factory.restorationCompleteForResponsibleAgency2 = " ";
                section2Factory.restorationCompleteForResponsibleAgency3 = " ";
                section2Factory.isBHSRestorationIncompleted = " ";
                section2Factory.isBHSRestorationIncompleted = " ";
                section2Factory.incompleteRestorationCompleteForResponsibleAgency1 = " ";
                section2Factory.incompleteRestorationCompleteForResponsibleAgency2 = " ";
                section2Factory.incompleteRestorationCompleteForResponsibleAgency3 = " ";
                section2Factory.isBHSbeingReconstructed = " ";
                section2Factory.isBHSbeingReconstructed = " ";
                section2Factory.location = " ";
                section2Factory.bhsReconstructedResponsibleAngency1 = " ";
                section2Factory.bhsReconstructedResponsibleAngency2 = " ";
                section2Factory.bhsReconstructedResponsibleAngency3 = " ";
                section2Factory.isBHSbeingRelocated = " ";
                section2Factory.isBHSbeingRelocated = " ";
                section2Factory.ownersName = " ";
                section2Factory.contactInformation = " ";
                section2Factory.preYolandaWaterSupply = " ";
                section2Factory.preYolandaWaterSupply = " ";
                section2Factory.postYolandaWaterSupply = " ";
                section2Factory.postYolandaWaterSupply = " ";
                section2Factory.preYolandaPowerSupply = " ";
                section2Factory.preYolandaPowerSupply = " ";
                section2Factory.postYolandaPowerSupply = " ";
                section2Factory.postYolandaPowerSupply = " ";
                section2Factory.preYolandaCommunication = " ";
                section2Factory.preYolandaCommunication = " ";
                section2Factory.postYolandaCommunication = " ";
                section2Factory.postYolandaCommunication = " ";
                section2Factory.preYolandaSanitaryToilet = " ";
                section2Factory.preYolandaSanitaryToilet = " ";
                section2Factory.postYolandaSanitaryToilet = " ";
                section2Factory.postYolandaSanitaryToilet = " ";
                section2Factory.preYolandaDrainage = " ";
                section2Factory.preYolandaDrainage = " ";
                section2Factory.preYolandaDrainage = " ";
                section2Factory.postYolandaDrainage = " ";
                section2Factory.postYolandaDrainage = " ";
                section2Factory.isBHSRestorationIncompleted = " "; 
                console.log("section 2 cleared");   
               };
               
               return section2Factory;
}]);