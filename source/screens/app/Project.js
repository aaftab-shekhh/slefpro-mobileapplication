import React, {useCallback, useState} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import ProjectItem from '../../components/items/ProjectItem';
import ProjectTypeItem from '../../components/items/ProjectTypeItem';
import Header from '../../components/styles/Header';
import lists from '../../constants/lists';

const Project = () => {
  const [projectType, setProjectType] = useState(
    lists?.projectTypeList[0].value,
  );

  const renderItemHandler = useCallback(
    ({item}) => {
      return (
        <ProjectTypeItem
          data={item}
          selected={projectType}
          onPress={setProjectType}
        />
      );
    },
    [projectType],
  );

  const renderProjectItemHandler = useCallback(({item}) => {
    return <ProjectItem data={item} />;
  }, []);

  return (
    <View style={{flex: 1}}>
      <Header />
      <View style={styles.projectTypeListContainer}>
        <FlatList
          horizontal
          data={lists.projectTypeList}
          renderItem={renderItemHandler}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(_, index) => index?.toString()}
          ListHeaderComponent={<View style={{width: 22}} />}
          ListFooterComponent={<View style={{width: 22}} />}
          ItemSeparatorComponent={<View style={{width: 8}} />}
        />
      </View>
      <FlatList
        data={lists.projectList}
        contentContainerStyle={{flexGrow: 1, paddingHorizontal: 22}}
        renderItem={renderProjectItemHandler}
        showsVerticalScrollIndicator={false}
        keyExtractor={(_, index) => index?.toString()}
        ItemSeparatorComponent={<View style={{height: 16}} />}
      />
    </View>
  );
};

export default Project;

const styles = StyleSheet.create({
  projectTypeListContainer: {
    paddingVertical: 16,
  },
});
