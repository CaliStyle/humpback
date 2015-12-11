//events/settings.js

var ev = sails.config.redisevent;

ev.pub('settings:test', {
	now: new Date(),
	from: ''
});

ev.on('settings:test', function(data) {
	sails.log.verbose("settings grid test", data.now, 'from', data.from);
});

ev.on('settings:created', function(data){
	console.log("settings:created", data);
	
	var setting = data.setting;
	if(setting.secure){
		sails.config.humpback.secure[setting.name] = Setting.convertType(setting.type, setting.setting);
	}else{
		sails.config.humpback.notsecure[setting.name] = Setting.convertType(setting.type, setting.setting);
	}
	
});

ev.on('settings:update', function(data){
	console.log("settings:update", data);
	var setting = data.setting;

	if(setting.secure){
		sails.config.humpback.secure[setting.name] = Setting.convertType(setting.type, setting.setting);
		delete sails.config.humpback.notsecure[setting.name];
	}else{
		sails.config.humpback.notsecure[setting.name] = Setting.convertType(setting.type, setting.setting);
		delete sails.config.humpback.secure[setting.name];
	}
	Setting.updateSetting('name', setting);

});

ev.on('settings:destroy', function(data){
	console.log("settings:destroy", data);
	var setting = data.setting;

	delete sails.config.humpback.secure[setting.name];
	delete sails.config.humpback.notsecure[setting.name];

	Setting.removeSetting('name', setting);

	next();

});

module.exports.settings = ev;