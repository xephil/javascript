/**
 * Kubernetes
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1.18.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from '../api';
import { V1ContainerState } from './v1ContainerState';

/**
* ContainerStatus contains details for the current status of this container.
*/
export class V1ContainerStatus {
    /**
    * Container\'s ID in the format \'docker://<container_id>\'.
    */
    'containerID'?: string;
    /**
    * The image the container is running. More info: https://kubernetes.io/docs/concepts/containers/images
    */
    'image': string;
    /**
    * ImageID of the container\'s image.
    */
    'imageID': string;
    'lastState'?: V1ContainerState;
    /**
    * This must be a DNS_LABEL. Each container in a pod must have a unique name. Cannot be updated.
    */
    'name': string;
    /**
    * Specifies whether the container has passed its readiness probe.
    */
    'ready': boolean;
    /**
    * The number of times the container has been restarted, currently based on the number of dead containers that have not yet been removed. Note that this is calculated from dead containers. But those containers are subject to garbage collection. This value will get capped at 5 by GC.
    */
    'restartCount': number;
    /**
    * Specifies whether the container has passed its startup probe. Initialized as false, becomes true after startupProbe is considered successful. Resets to false when the container is restarted, or if kubelet loses state temporarily. Is always true when no startupProbe is defined.
    */
    'started'?: boolean;
    'state'?: V1ContainerState;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "containerID",
            "baseName": "containerID",
            "type": "string"
        },
        {
            "name": "image",
            "baseName": "image",
            "type": "string"
        },
        {
            "name": "imageID",
            "baseName": "imageID",
            "type": "string"
        },
        {
            "name": "lastState",
            "baseName": "lastState",
            "type": "V1ContainerState"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "ready",
            "baseName": "ready",
            "type": "boolean"
        },
        {
            "name": "restartCount",
            "baseName": "restartCount",
            "type": "number"
        },
        {
            "name": "started",
            "baseName": "started",
            "type": "boolean"
        },
        {
            "name": "state",
            "baseName": "state",
            "type": "V1ContainerState"
        }    ];

    static getAttributeTypeMap() {
        return V1ContainerStatus.attributeTypeMap;
    }
}

