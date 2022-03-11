var os = require('os');
var os_info ={
	
			osPlatform: os.platform(),
			osRelease: os.release(),
			modelNo: os.cpus()[0]['model'],
			deviceName: os.hostname(),
			deviceOs: os.type() + ', ' + os.platform() + ', ' + os.arch(),
			//deviceID : "98"+ Math.random().toString(36).substr(1,13),
			productCode : 'okbills',
			deviceID:new DeviceUUID().get(),
			pwd : process.cwd(),
}

module.exports = os_info;