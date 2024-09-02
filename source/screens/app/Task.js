import React, {memo, useCallback, useState} from 'react';
import {FlatList, Pressable, SectionList, StyleSheet, View} from 'react-native';
import TaskTypeItem from '../../components/items/TaskTypeItem';
import Header from '../../components/styles/Header';
import {colors, lists} from '../../constants/constants';
import Font400 from '../../components/fonts/Font400';
import FastImage from 'react-native-fast-image';
import {images} from '../../assets/images';
import TaskItem from '../../components/items/TaskItem';

const Task = () => {
  const [taskType, setTaskType] = useState(lists.taskTypeList[0].value);

  const renderItemHandler = useCallback(
    ({item}) => {
      return (
        <TaskTypeItem data={item} selected={taskType} onPress={setTaskType} />
      );
    },
    [taskType],
  );

  const renderTaskItemHandler = useCallback(({item}) => {
    return <TaskItem data={item} />;
  }, []);

  const renderSectionHeaderHandler = useCallback(
    ({section: {title}}) => (
      <View style={styles.listTitleContainer}>
        <Font400 style={styles.listTitle}>{title}</Font400>
      </View>
    ),
    [],
  );

  const onAddTaskButton = useCallback(() => {}, []);

  return (
    <View style={{flex: 1}}>
      <Header />
      <Pressable onPress={onAddTaskButton} style={styles.addButtonContainer}>
        <FastImage
          resizeMode="contain"
          style={styles.add_button}
          source={images.add_button}
        />
      </Pressable>
      <View style={styles.taskTypeListContainer}>
        <FlatList
          horizontal
          data={lists.taskTypeList}
          renderItem={renderItemHandler}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(_, index) => index?.toString()}
          ListHeaderComponent={<View style={{width: 22}} />}
          ListFooterComponent={<View style={{width: 22}} />}
          ItemSeparatorComponent={<View style={{width: 8}} />}
        />
      </View>
      <SectionList
        sections={lists.taskList}
        renderItem={renderTaskItemHandler}
        renderSectionHeader={renderSectionHeaderHandler}
        contentContainerStyle={{
          flexGrow: 1,
          paddingHorizontal: 22,
          paddingBottom: 50,
        }}
        ItemSeparatorComponent={() => (
          <View style={{height: 1, backgroundColor: colors.lightGray}} />
        )}
      />
    </View>
  );
};

export default memo(Task);

const styles = StyleSheet.create({
  taskTypeListContainer: {
    paddingVertical: 16,
  },
  listTitleContainer: {
    paddingTop: 16,
    paddingBottom: 12,
    backgroundColor: colors.colorECF0F7,
  },
  listTitle: {
    fontSize: 12,
  },
  addButtonContainer: {
    right: 20,
    zIndex: 1,
    bottom: 20,
    position: 'absolute',
  },
  add_button: {
    width: 64,
    height: 64,
  },
});