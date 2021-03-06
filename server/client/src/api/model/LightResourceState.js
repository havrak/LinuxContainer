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
import LightResourceStateCPU from './LightResourceStateCPU';
import LightResourceStateDisk from './LightResourceStateDisk';
import LightResourceStateNetwork from './LightResourceStateNetwork';
import LightResourceStateRAM from './LightResourceStateRAM';
import Limits from './Limits';

/**
* The LightResourceState model module.
* @module model/LightResourceState
* @version 1.0
*/
export default class LightResourceState {
    /**
    * Constructs a new <code>LightResourceState</code>.
    * This object is used to represent the project and user state, their history and history of normal containers. Each object also contains limit information that were in effect in the time of measuring the state.
    * @alias module:model/LightResourceState
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>LightResourceState</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/LightResourceState} obj Optional instance to populate.
    * @return {module:model/LightResourceState} The populated <code>LightResourceState</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LightResourceState();
                        
            
            if (data.hasOwnProperty('limits')) {
                obj['limits'] = Limits.constructFromObject(data['limits']);
            }
            if (data.hasOwnProperty('timestamp')) {
                obj['timestamp'] = ApiClient.convertToType(data['timestamp'], 'String');
            }
            if (data.hasOwnProperty('CPU')) {
                obj['CPU'] = LightResourceStateCPU.constructFromObject(data['CPU']);
            }
            if (data.hasOwnProperty('RAM')) {
                obj['RAM'] = LightResourceStateRAM.constructFromObject(data['RAM']);
            }
            if (data.hasOwnProperty('disk')) {
                obj['disk'] = LightResourceStateDisk.constructFromObject(data['disk']);
            }
            if (data.hasOwnProperty('network')) {
                obj['network'] = LightResourceStateNetwork.constructFromObject(data['network']);
            }
            if (data.hasOwnProperty('numberOfProcesses')) {
                obj['numberOfProcesses'] = ApiClient.convertToType(data['numberOfProcesses'], 'Number');
            }
        }
        return obj;
    }

    /**
    * @member {module:model/Limits} limits
    */
    'limits' = undefined;
    /**
    * Date and time when this state was measured
    * @member {String} timestamp
    */
    'timestamp' = undefined;
    /**
    * @member {module:model/LightResourceStateCPU} CPU
    */
    'CPU' = undefined;
    /**
    * @member {module:model/LightResourceStateRAM} RAM
    */
    'RAM' = undefined;
    /**
    * @member {module:model/LightResourceStateDisk} disk
    */
    'disk' = undefined;
    /**
    * @member {module:model/LightResourceStateNetwork} network
    */
    'network' = undefined;
    /**
    * Process count (without any limit)
    * @member {Number} numberOfProcesses
    */
    'numberOfProcesses' = undefined;




}
