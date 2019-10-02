/*
 This is the generic message creation logic for CreateVnfRequest messages based on the 2.4.1 version of the ETSI SOL003 specification
 */
logger.debug('Parsing VnfInstance message for ETSI SOL003 v2.4.1');
load('classpath:scripts/lib.js');

var parsedMessage = JSON.parse(message);
outputs.put('vnfInstanceId', parsedMessage.id);

var flattenedProperties = flattenPropertyMap(parsedMessage);
for (var propertyName in flattenedProperties) {
    // Ignore certain property names
    if (propertyName !== 'id' && propertyName !== 'name' && propertyName !== 'index' && !propertyName.startsWith('_links.')) {
        outputs.put(propertyName, flattenedProperties[propertyName]);
    }
}

logger.debug('Message parsed successfully');
