/*
var creep = Game.creeps.Worker1;
var sources = creep.room.find(Game.SOURCES);
creep.moveTo(sources[0]);
creep.harvest(sources[0]);
  // Game.spawns.Spawn1.createCreep( [Game.WORK, Game.CARRY, Game.MOVE], 'Worker'+i );
  
*/
var numWorkers = 99;
var numBuidersRatio = 20;
var numBuilders = Math.floor(numWorkers/numBuidersRatio);
var numWorkersPerSource = numWorkers/5;

for (var i=0;i<numWorkers;i++) {
   //var creep =  
     var bNum = Math.floor(i/numBuidersRatio); // var wNum = i; var j=0;
     
   if (bNum > 0 && (i % numBuidersRatio === 0) && Game.creeps['Builder'+bNum] === undefined) {
        Game.spawns.Spawn1.createCreep( [Game.WORK, Game.WORK, Game.WORK, Game.CARRY, Game.MOVE], 'Builder'+i );
        console.log('SK creep created new Builder'+bNum);
    }
    if ( Game.creeps['Worker'+i] === undefined) { //else {
        Game.spawns.Spawn1.createCreep( [Game.WORK, Game.CARRY, Game.MOVE], 'Worker'+i );
        console.log('SK creep created new Worker'+i);
    }
    
     

  if ( Game.creeps['Worker'+i] !== undefined) { 
      var harvester = require('harvester');
      	harvester(i,numWorkersPerSource);
      /*
        var creep =Game.creeps['Worker'+i];
             console.log('SK creep Worker'+i+' energy '+creep.energy+' capacity '+creep.energyCapacity);
       if(creep.energy < creep.energyCapacity) {
        	var sources = creep.room.find(Game.SOURCES);
        	console.log('SK creep Worker'+i+' found '+sources.length+' sources');
        	if ((i/numWorkersPerSource) > 0) { 
        	    j=Math.floor(i/numWorkersPerSource); 
        	    if (j > sources.length) { j = 0; }
        	}
        	creep.moveTo(sources[j]);
        	creep.harvest(sources[j]);
        	console.log('SK creep Worker'+i+' harvesting from source '+j);
        }
        else {
        	creep.moveTo(Game.spawns.Spawn1);
        	creep.transferEnergy(Game.spawns.Spawn1);
        	console.log('SK creep Worker'+i+' transferring energy');
        }
        */

   } 
   
}
