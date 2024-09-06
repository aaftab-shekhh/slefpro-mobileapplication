import React from 'react';
import {Pressable, StyleSheet} from 'react-native';
import colors from '../../constants/colors';
import fontFamily from '../../constants/fontFamily';
import Font400 from '../fonts/Font400';

const TaskTypeItem = ({data, selected, onPress}) => {
  const {title, value} = data;

  return (
    <Pressable
      onPress={onPress?.bind(null, value)}
      style={[
        styles.taskTypeContainer,
        selected === value
          ? {
              borderColor: colors.colorE43958,
              backgroundColor: colors.colorE43958,
            }
          : null,
      ]}>
      <Font400
        style={[
          styles.task,
          selected === value
            ? {fontFamily: fontFamily.Font700, color: colors.white}
            : null,
        ]}>
        {title}
      </Font400>
    </Pressable>
  );
};

export default TaskTypeItem;

const styles = StyleSheet.create({
  taskTypeContainer: {
    height: 36,
    borderWidth: 1,
    borderRadius: 20,
    alignItems: 'center',
    paddingHorizontal: 16,
    justifyContent: 'center',
    borderColor: colors.lightGray,
  },
});
