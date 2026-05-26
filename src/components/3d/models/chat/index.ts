// Barrel export — the registry imports from here so model folders stay
// fully encapsulated (their file names are internal implementation details).
export { ChatModel as Model } from "./ChatModel";
export { ChatContent as Content } from "./ChatContent";
export { chatConfig as config } from "./chat.config";
