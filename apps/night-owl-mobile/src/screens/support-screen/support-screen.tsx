import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
} from 'react-native';
import AddSvg from '../../assets/add.svg';
import MicSvg from '../../assets/mic.svg';

export const SupportScreen = () => {
  const [messages, setMessages] = useState([
    {
      id: '1',
      text: "Hi, I'd like to place an order for a breakfast burrito and a large coffee.",
      type: 'user',
    },
    {
      id: '2',
      text: 'Great! Your order will be ready in approximately 10 minutes. Please let us know if you have any questions.',
      type: 'response',
    },
    { id: '3', text: 'Thanks! When will it be ready?', type: 'user' },
    {
      id: '4',
      text: 'Your order will be ready in about 5 minutes. Please let us know if you have any other questions.',
      type: 'response',
    },
    {
      id: '5',
      text: 'Hi, I just picked up my order and the burrito is missing the salsa.',
      type: 'user',
    },
    {
      id: '6',
      text: 'We apologize for the inconvenience. We will send out a replacement right away. Please let us know if there is anything else we can do.',
      type: 'response',
    },
    {
      id: '7',
      text: 'Thanks for the quick response. I appreciate it.',
      type: 'user',
    },
  ]);

  const [newMessage, setNewMessage] = useState('');

  const handleSend = () => {
    if (newMessage.trim()) {
      setMessages([
        ...messages,
        { id: `${messages.length + 1}`, text: newMessage, type: 'user' },
      ]);
      setNewMessage('');
    }
  };

  const renderMessage = ({ item }) => (
    <View
      style={[
        styles.messageBubble,
        item.type === 'user' ? styles.userBubble : styles.responseBubble,
      ]}
    >
      <Text style={styles.messageText}>{item.text}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Messages List */}
      <FlatList
        data={messages}
        keyExtractor={(item) => item.id}
        renderItem={renderMessage}
        contentContainerStyle={styles.messagesContainer}
      />

      {/* Input Section */}
      <View style={styles.inputContainer}>
        <TouchableOpacity style={styles.addButton}>
          <AddSvg />
        </TouchableOpacity>
        <TextInput
          style={styles.input}
          placeholder="New Chat"
          placeholderTextColor="#999"
          value={newMessage}
          onChangeText={setNewMessage}
        />
        <TouchableOpacity style={styles.sendButton} onPress={handleSend}>
          <MicSvg />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  messagesContainer: {
    padding: 10,
  },
  messageBubble: {
    padding: 12,
    borderRadius: 16,
    marginBottom: 10,
    maxWidth: '75%',
  },
  userBubble: {
    backgroundColor: '#E5E5E5',
    alignSelf: 'flex-start',
  },
  responseBubble: {
    backgroundColor: '#D8D8D8',
    alignSelf: 'flex-end',
  },
  messageText: {
    fontSize: 16,
    color: '#333',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },
  addButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#E5E5E5',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 20,
    paddingHorizontal: 15,
    backgroundColor: '#F9F9F9',
    color: '#333',
  },
  sendButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#E5E5E5',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
  },
});
