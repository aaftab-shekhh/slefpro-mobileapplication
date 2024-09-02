import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Font400 from '../fonts/Font400';
import {colors} from '../../constants/constants';

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
          selected === value ? {fontWeight: 700, color: colors.white} : null,
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
