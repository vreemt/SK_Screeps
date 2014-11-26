/*
 * Module code goes here. Use 'module.exports' to export things:
 * module.exports = 'a thing';
 *
 * You can import it from another modules like this:
 * var mod = require('harvester'); // -> 'a thing'
 */
 module.exports = function (i, numWorkersPerSource) {
     var j = 0;
     var creep =Game.creeps['Worker'+i];
     if (creep !== undefined) {
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

   } 
  }
