import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/auth';
import userReducer from './slices/user';
import conversationReducer from './slices/conversations'
import friendReducer from './slices/friends';
import notificationReducer from './slices/notifications';
import settingsReducer from './slices/settings';
import chatroomReducer from './slices/chatroom'
import searchReducer from './slices/search'
import userStatusReducer from './slices/userStatus'

export default configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
    friends: friendReducer,
    conversations: conversationReducer,
    notifications: notificationReducer,
    settings: settingsReducer,
    chatroom: chatroomReducer,
    search: searchReducer,
    userStatus: userStatusReducer,
  }
})
