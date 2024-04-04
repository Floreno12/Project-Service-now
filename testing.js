var EmptyArray = [];
var configGR = new GlideRecord('x_akt_guardicore_config');
var server = new GlideRecord('cmdb_ci_service');
this.countname = 0;
// Call the function to process relationships
_processRelationships(server, EmptyArray, configGR);

// Function to process relationships
function _processRelationships(server, EmptyArray) {
var Tableserever = server;
    //var Tableserever = new GlideRecord(server);
    Tableserever.addNotNullQuery('name');
    //Tableserever.addNotNullQuery('ip_address'); // Add conditions to not null fields
    // Add more not null queries as needed
    Tableserever.query();
    while (Tableserever.next()) {
      if(Tableserever){
        var Values = 'Echive the value';
        var chenge = Tableserever;
        chenge.setValue('name' Values);
        chenge.insert();
      }
//I wont to add the statemt were i will be populate cheker if


        //Call the function to check duplicates and push into EmptyArray
        if (EmptyArray.indexOf(Tableserever.sys_id.toString()) == -1) {
            EmptyArray.push(Tableserever.sys_id.toString());
            //this.countname++;
        }
        this.countname++;

gs.info('Table name oll record insaide cmdb' +Tableserever.getValue('name'));

// Add conditions to not null fields

this.gelint = 0;


        //  if(var i = 0; i < this.gelint; i++){
        //     var configGR = new GlideRecord('x_akt_guardicore_config');
        //     var Counting = 0;
        //     configGR.setValue(Counting, this.gelint);
        //     configGR.update();

        //  }


        //gs.info('Counting the table ' + Tableserever.getValue('name') + ': ' + CountCI.getAggregate('COUNT'));
    }
             var CountCI = new GlideAggregate('cmdb_ci_service');
         CountCI.addNotNullQuery('ip_address');
         CountCI.addAggregate('COUNT','ip_address'); // Count the 'ip_address' field
         CountCI.query();

         while(CountCI.next()){
            var calculate = CountCI.getAggregate('COUNT', 'ip_address');
            gs.info('finde mant ip ' +calculate);
            this.gelint++;
         }
         gs.info('gu: find total ip address in this table ' +this.gelint);
         gs.info('actualy name here in cmdb ' +this.countname);
}
