import React, {memo} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Font400 from '../fonts/Font400';
import ProjectTypeItem from './ProjectTypeItem';
import {colors, lists} from '../../constants/constants';
import FastImage from 'react-native-fast-image';
import {images} from '../../assets/images';
import ProgressBar from '../styles/ProgressBar';

// {
//     date: moment().format('D-M-YY'),
//     status: 'all',
//     title: 'Design NFT landing page shot',
//     description:
//       'Design a simple home pages with clean layout and color based on the guidelin to...',
//     comment: 5,
//     attachment: 4,
//     clint_detail: {
//       user_name: 'Merdan K.',
//       image:
//         'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',
//     },
// }

const ProjectItem = ({data}) => {
  const {date, status, title, description, comment, attachment, clint_detail} =
    data;

  const projectStatus = lists.projectTypeList?.find(
    ele => ele?.value === status,
  );

  return (
    <View style={styles.projectContainer}>
      <View style={styles.projectHeader}>
        <View style={styles.dateContainer}>
          <FastImage
            style={styles.flagIcon}
            resizeMode="contain"
            source={images.flag}
          />
          <Font400 style={styles.data}>{date}</Font400>
        </View>
        <ProjectTypeItem data={projectStatus} />
      </View>
      <View style={styles.dateContainer}>
        <FastImage
          source={{uri: clint_detail?.image}}
          resizeMode="contain"
          style={styles.clint_image}
        />
        <Font400 style={styles.clint_name}>{clint_detail?.user_name}</Font400>
      </View>
      <Font400 style={styles.title}>{title}</Font400>
      <Font400 style={styles.description}>{description}</Font400>
      <View style={styles.progressContainer}>
        <ProgressBar
          height={9}
          progress={65}
          barColor={colors.colorE43958}
          backgroundColor={colors.colorF0F0F0}
        />
        <Font400 style={styles.progress}>{'65' + '%'}</Font400>
      </View>
      <View style={styles.projectFooter}>
        <View style={{flex: 1}} />
        <View style={styles.dateContainer}>
          <FastImage
            style={styles.footerIcon}
            resizeMode="contain"
            source={images.project_attachment}
          />
          <Font400 style={styles.clint_name}>{'8'}</Font400>
        </View>
        <View style={[styles.dateContainer, {marginLeft: 12}]}>
          <FastImage
            style={styles.footerIcon}
            resizeMode="contain"
            source={images.project_comment}
          />
          <Font400 style={styles.clint_name}>{'5'}</Font400>
        </View>
      </View>
    </View>
  );
};

export default memo(ProjectItem);

const styles = StyleSheet.create({
  projectContainer: {
    padding: 20,
    elevation: 4,
    shadowRadius: 4,
    borderRadius: 10,
    shadowOpacity: 0.1,
    shadowColor: colors.black,
    backgroundColor: colors.white,
    shadowOffset: {height: 2, width: 0},
  },
  projectHeader: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  dateContainer: {
    height: 36,
    borderWidth: 1,
    borderRadius: 20,
    alignItems: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 12,
    alignSelf: 'flex-start',
    justifyContent: 'center',
    justifyContent: 'center',
    borderColor: colors.colorF0F0F0,
    backgroundColor: colors.colorF0F0F0,
    marginBottom: 8,
  },
  flagIcon: {
    height: 15,
    width: 15,
  },
  data: {
    paddingLeft: 10,
    fontSize: 13,
  },
  clint_image: {
    width: 16,
    height: 16,
    borderRadius: 8,
  },
  clint_name: {
    fontSize: 13,
    marginLeft: 10,
  },
  title: {
    fontSize: 22,
  },
  description: {
    fontSize: 15,
    marginTop: 8,
    color: colors.color8A8F9B,
  },
  progressContainer: {
    paddingBottom: 11,
    alignItems: 'center',
    flexDirection: 'row',
    borderBottomWidth: 1,
    justifyContent: 'center',
    borderColor: colors.lightGray,
  },
  progress: {
    fontSize: 13,
    marginLeft: 6,
  },
  projectFooter: {
    paddingTop: 12,
    flexDirection: 'row',
  },
  footerIcon: {
    height: 15,
    width: 15,
  },
});
