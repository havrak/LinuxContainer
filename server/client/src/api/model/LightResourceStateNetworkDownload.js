/**
 * User API
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
* The LightResourceStateNetworkDownload model module.
* @module model/LightResourceStateNetworkDownload
* @version 1.0
*/
export default class LightResourceStateNetworkDownload {
    /**
    * Constructs a new <code>LightResourceStateNetworkDownload</code>.
    * @alias module:model/LightResourceStateNetworkDownload
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>LightResourceStateNetworkDownload</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/LightResourceStateNetworkDownload} obj Optional instance to populate.
    * @return {module:model/LightResourceStateNetworkDownload} The populated <code>LightResourceStateNetworkDownload</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LightResourceStateNetworkDownload();
                        
            
            if (data.hasOwnProperty('downloadSpeed')) {
                obj['downloadSpeed'] = ApiClient.convertToType(data['downloadSpeed'], 'Number');
            }
            if (data.hasOwnProperty('downloadBandwidthUsage')) {
                obj['downloadBandwidthUsage'] = ApiClient.convertToType(data['downloadBandwidthUsage'], 'Number');
            }
            if (data.hasOwnProperty('allocatedDownloadSpeed')) {
                obj['allocatedDownloadSpeed'] = ApiClient.convertToType(data['allocatedDownloadSpeed'], 'Number');
            }
            if (data.hasOwnProperty('allocatedBandwidthUsage')) {
                obj['allocatedBandwidthUsage'] = ApiClient.convertToType(data['allocatedBandwidthUsage'], 'Number');
            }
        }
        return obj;
    }

    /**
    * last recorded download speed in bytes/s in connection to the internet
    * @member {Number} downloadSpeed
    */
    'downloadSpeed' = undefined;
    /**
    * usage of download bandwidth in percent in connection to the internet
    * @member {Number} downloadBandwidthUsage
    */
    'downloadBandwidthUsage' = undefined;
    /**
    * last recorded allocated download speed in bytes/s in connection to the internet (sum of container limits - downloadSpeed)
    * @member {Number} allocatedDownloadSpeed
    */
    'allocatedDownloadSpeed' = undefined;
    /**
    * allocation of download bandwidth in percent in connection to the internet
    * @member {Number} allocatedBandwidthUsage
    */
    'allocatedBandwidthUsage' = undefined;




}
