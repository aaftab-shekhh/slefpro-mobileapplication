import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {memo, useCallback} from 'react';
import Header from '../../components/styles/Header';
import ChatUserItem from '../../components/items/ChatUserItem';

const Message = () => {
  const renderItemHandler = useCallback(() => {
    return <ChatUserItem />;
  }, []);

  return (
    <View style={{flex: 1}}>
      <Header />
      <FlatList
        contentContainerStyle={{flexGrow: 1, paddingHorizontal: 22}}
        ItemSeparatorComponent={<View style={{height: 40}} />}
        ListHeaderComponent={<View style={{height: 40}} />}
        ListFooterComponent={<View style={{height: 40}} />}
        data={Array(10).fill(0)}
        renderItem={renderItemHandler}
        showsVerticalScrollIndicator={false}
        keyExtractor={(_, index) => index?.toString()}
      />
    </View>
  );
};

export default memo(Message);

const styles = StyleSheet.create({});
