import React, {useCallback} from 'react';
import {Image, Pressable, StyleSheet, View} from 'react-native';
import {images} from '../../assets/images';
import colors from '../../constants/colors';
import lists from '../../constants/lists';
import Font400 from '../fonts/Font400';
import {useNavigation} from '@react-navigation/native';
import screens from '../../constants/screens';

const TaskItem = ({data}) => {
  const {priority, completed, date, task} = data;

  const {navigate} = useNavigation();

  const onNavigateTaskDetail = useCallback(() => {
    navigate(screens.TaskDetail);
  }, []);

  return (
    <Pressable onPress={onNavigateTaskDetail} style={styles.taskContainer}>
      <Pressable style={styles.completeContainer}>
        {completed ? <View style={styles.complete} /> : false}
      </Pressable>
      <View style={styles.taskDetail}>
        <Font400 style={styles.taskTitle}>{task}</Font400>
        <Font400 style={styles.taskDate}>{date}</Font400>
      </View>
      <View style={styles.taskFooter}>
        {priority !== lists.taskTypeList[1].value ? (
          <View style={styles.priorityContainer}>
            <Image
              source={images.flag}
              resizeMode="contain"
              style={styles.flagIcon}
            />
            <Font400 style={styles.priority}>
              {priority === lists.taskTypeList[2].value
                ? 1
                : priority === lists.taskTypeList[3].value
                ? 2
                : priority === lists.taskTypeList[3].value
                ? 3
                : 4}
            </Font400>
          </View>
        ) : null}
        <Pressable>
          <Image
            source={images.watch}
            resizeMode="contain"
            style={styles.watchIcon}
          />
        </Pressable>
      </View>
    </Pressable>
  );
};

export default TaskItem;

const styles = StyleSheet.create({
  taskContainer: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  completeContainer: {
    width: 16,
    height: 16,
    borderWidth: 1,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: colors.black,
  },
  complete: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: colors.colorE43958,
  },
  taskDetail: {
    flex: 1,
    paddingVertical: 16,
    paddingHorizontal: 16,
    justifyContent: 'space-between',
  },
  taskTitle: {
    fontSize: 15,
    paddingBottom: 6,
    color: colors.color363942,
  },
  taskDate: {
    fontSize: 13,
    color: colors.darkLightGray,
  },
  taskFooter: {
    flexDirection: 'row',
    alignSelf: 'flex-end',
    paddingBottom: 16,
  },
  priorityContainer: {
    height: 24,
    borderWidth: 1,
    borderRadius: 4,
    marginRight: 10,
    alignItems: 'center',
    paddingHorizontal: 4,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  flagIcon: {
    width: 14,
    height: 14,
    marginHorizontal: 4,
  },
  priority: {
    fontSize: 12,
  },
  watchIcon: {
    height: 24,
    width: 24,
  },
});
