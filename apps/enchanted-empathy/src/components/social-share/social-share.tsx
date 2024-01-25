import React, { FC } from 'react';
import {
  Alert,
  Share,
  View,
  ViewStyle,
  Text,
  TouchableOpacity,
  TextStyle,
} from 'react-native';

interface SocialShareProps {
  text: string;
  style?: ViewStyle;
  textStyle?: TextStyle;
  link?: string;
}

export const SocialShare: FC<SocialShareProps> = ({
  text,
  style,
  textStyle,
}) => {
  const onShare = async () => {
    try {
      const result = await Share.share({
        message:
          'React Native | A framework for building native apps using React',
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error: any) {
      Alert.alert(error.message);
    }
  };
  return (
    <View style={style || {}}>
      <TouchableOpacity onPress={onShare}>
        <Text style={textStyle || {}}>{text || 'Share'}</Text>
      </TouchableOpacity>
    </View>
  );
};
