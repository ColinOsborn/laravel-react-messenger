import { usePage } from "@inertiajs/react";

const ChatLayout = ({ children }) => {

  const page = usePage();
  const conversations = page.props.conversations;
  const selectedConversation = page.props.selectedConversations;
  console.log('conversations', conversations);
  console.log('selectedConversation', selecteedConversation);
   return (
    <div>
      ChatLayout
      <div>{ children }</div>
    </div>
   );
};

export default ChatLayout;