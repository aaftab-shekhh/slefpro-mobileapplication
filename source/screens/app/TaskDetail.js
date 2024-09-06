import React from 'react';
import {Image, ScrollView, StyleSheet, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {images} from '../../assets/images';
import Font500 from '../../components/fonts/Font500';
import Font400 from '../../components/fonts/Font400';
import colors from '../../constants/colors';

const TaskDetail = () => {
  const title = 'Creating UI Screen';
  const description = 'Create screen 2 to 5 for next week';

  const {top} = useSafeAreaInsets();
  return (
    <View style={[styles.root, {paddingTop: top}]}>
      <Image
        resizeMode="contain"
        source={images.close}
        style={styles.closeIcon}
      />
      <ScrollView
        contentContainerStyle={{flexGrow: 1}}
        showsVerticalScrollIndicator={false}>
        <View style={styles.titleContainer}>
          <View style={styles.checkContainer} />
          <View style={styles.titleDetail}>
            <Font500 style={styles.title}>{title}</Font500>
            <Font400 style={styles.description}>{description}</Font400>
          </View>
          <Image
            source={images.edit}
            resizeMode="contain"
            style={styles.editIcon}
          />
        </View>
        <View style={styles.taskContainer}>
          <Image
            resizeMode="contain"
            source={images.timer}
            style={styles.taskIcon}
          />
          <Font400 style={styles.taskTitle}>{'Task Time :'}</Font400>
          <Font400 style={styles.taskValue}>{'Today At 16:45'}</Font400>
        </View>
        <View style={styles.taskContainer}>
          <Image
            resizeMode="contain"
            source={images.project}
            tintColor={colors.black}
            style={styles.taskIcon}
          />
          <Font400 style={styles.taskTitle}>{'Project :'}</Font400>
          <Font400 style={styles.taskValue}>{'University Project'}</Font400>
        </View>
        <View style={styles.taskContainer}>
          <Image
            resizeMode="contain"
            source={images.flag}
            style={styles.taskIcon}
          />
          <Font400 style={styles.taskTitle}>{'Task Priority :'}</Font400>
          <Font400 style={styles.taskValue}>{'Today At 16:45'}</Font400>
        </View>
        <View style={styles.taskContainer}>
          <Image
            resizeMode="contain"
            source={images.sub_task}
            style={styles.taskIcon}
          />
          <Font400 style={styles.taskTitle}>{'Sub - Task'}</Font400>
        </View>
        <View style={styles.taskContainer}>
          <Image
            resizeMode="contain"
            source={images.delete}
            style={styles.taskIcon}
          />
          <Font400 style={styles.deleteTaskTitle}>{'Delete Task'}</Font400>
        </View>
      </ScrollView>
    </View>
  );
};

export default TaskDetail;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    paddingHorizontal: 22,
  },
  closeIcon: {
    width: 32,
    height: 32,
  },
  titleContainer: {
    paddingTop: 26,
    flexDirection: 'row',
  },
  titleDetail: {
    flex: 1,
    paddingHorizontal: 21,
  },
  checkContainer: {
    width: 16,
    height: 16,
    borderWidth: 1,
    borderRadius: 8,
    marginTop: 4,
  },
  title: {
    fontSize: 17,
  },
  description: {
    paddingTop: 10,
    color: colors.colorAFAFAF,
  },
  editIcon: {
    height: 24,
    width: 24,
  },
  taskContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 50,
  },
  taskIcon: {
    width: 24,
    height: 24,
  },
  taskTitle: {
    flex: 1,
    paddingHorizontal: 8,
  },
  taskValue: {
    paddingHorizontal: 8,
  },
  deleteTaskTitle: {
    color: colors.colorE43958,
    paddingHorizontal: 8,
  },
});
