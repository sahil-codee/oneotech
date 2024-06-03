class MessageParser {
    constructor(actionProvider) {
      this.actionProvider = actionProvider;
    }
  
    parse(message) {
      const lowerCaseMessage = message.toLowerCase();
  
      if (lowerCaseMessage.includes("home")) {
        this.actionProvider.handleHome();
      } else if (lowerCaseMessage.includes("about")) {
        this.actionProvider.handleAbout();
      } else if (lowerCaseMessage.includes("products")) {
        this.actionProvider.handleProducts();
      } else if (lowerCaseMessage.includes("services")) {
        this.actionProvider.handleServices();
      } else if (lowerCaseMessage.includes("contact")) {
        this.actionProvider.handleContact();
      } else if (lowerCaseMessage.includes("requirement")) {
        this.actionProvider.handlePersonalInfo();
      } else {
        const message = this.actionProvider.createChatBotMessage("I'm not sure how to help with that.");
        this.actionProvider.setChatbotMessage(message);
      }
    }
  }
  
  export default MessageParser;
  