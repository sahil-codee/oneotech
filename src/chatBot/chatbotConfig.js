import { createChatBotMessage } from "react-chatbot-kit";
import LinkWidget from "./LinkWidget.js";
import Options from "./Options.js";

const config = {
  botName: "OnotechBot",
  initialMessages: [
    createChatBotMessage(
      "Hi, welcome to Onotech Enterprises! How can I assist you today?",
      {
        widget: "options",
      }
    ),
  ],
  widgets: [
    {
      widgetName: "options",
      widgetFunc: (props) => <Options {...props} />,
    },
    {
      widgetName: "links",
      widgetFunc: (props) => <LinkWidget {...props} />,
    },
  ],
};

export default config;
