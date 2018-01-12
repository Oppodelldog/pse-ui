import PubSub from "pubsub-js";
import Action from "./Constants";

export default class Receiver {
    static subscribeBuildMap(f) {
        PubSub.subscribe(Action.BUILD_MAP, f);
    }
    static subscribeSearch(f) {
        PubSub.subscribe(Action.SEARCH, f);
    }
}