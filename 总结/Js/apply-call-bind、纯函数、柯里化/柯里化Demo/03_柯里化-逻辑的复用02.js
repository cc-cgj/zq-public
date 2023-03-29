function log1(date, type, message) {
  console.log(`[${date.getHours()}:${date.getMinutes()}][${type}]: ${message}`);
}

log1(new Date, 'DEBUG', 'bug1')
log1(new Date, 'DEBUG', 'bug2')
log1(new Date, 'DEBUG', 'bug3')

// 柯里化
var log2 = (date) => (type) => message => {
  console.log(`[${date.getHours()}:${date.getMinutes()}][${type}]: ${message}`);
}

var nowLogDate = log2(new Date)

var nowAndDebugLog = log2(new Date)('DEBUG')

nowAndDebugLog('bug1')
nowAndDebugLog('bug2')
nowAndDebugLog('bug3')

