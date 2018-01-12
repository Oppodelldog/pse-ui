import PubSub from 'pubsub-js';
import Action from './Constants';

export default class Sender {
    static publishBuildMap(actionData) {
        PubSub.publish(Action.BUILD_MAP, actionData);
    }
    static publishSearch(actionData) {
        PubSub.publish(Action.SEARCH, actionData);
    }

    static publishNewMapNodes(actionData) {
        PubSub.publish(Action.NEW_MAP_NODES, actionData);
    }
}