class ActionProvider {
    constructor(createChatBotMessage, setStateFunc) {
      this.createChatBotMessage = createChatBotMessage;
      this.setState = setStateFunc;
    }
  
    handleHome = () => {
      const message = this.createChatBotMessage(
        "Sure! Here is the link to the Home page.",
        { widget: "links", payload: { text: "Home", url: "/" } }
      );
      this.setChatbotMessage(message);
    };
  
    handleAbout = () => {
      const message = this.createChatBotMessage(
        "Here is the About Us page.",
        { widget: "links", payload: { text: "About Us", url: "/about" } }
      );
      this.setChatbotMessage(message);
    };
  
    handleProducts = () => {
      const message = this.createChatBotMessage(
        "Check out our Products here.",
        { widget: "links", payload: { text: "Products", url: "/products" } }
      );
      this.setChatbotMessage(message);
    };
  
    handleServices = () => {
      const message = this.createChatBotMessage(
        "Learn more about our Services.",
        { widget: "links", payload: { text: "Services", url: "/services" } }
      );
      this.setChatbotMessage(message);
    };
  
    handleContact = () => {
      const message = this.createChatBotMessage(
        "Get in touch with us through the Contact Us page.",
        { widget: "links", payload: { text: "Contact Us", url: "/contact" } }
      );
      this.setChatbotMessage(message);
    };
  
    handlePersonalInfo = () => {
      const message = this.createChatBotMessage(
        "Please provide your name and email so we can assist you further."
      );
      this.setChatbotMessage(message);
    };
  
    setChatbotMessage = (message) => {
      this.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, message],
      }));
    };
  }
  
  export default ActionProvider;
  