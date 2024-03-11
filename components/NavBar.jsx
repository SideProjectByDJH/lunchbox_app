import React from "react";
import { BottomNavigation, Text, useTheme } from 'react-native-paper';
import { theme } from "../colors";
import Followings from "../pages/Followings";

const HomeRoute = () => <Text>Home</Text>;
const BookmarkRoute = () => <Text>Bookmark</Text>;

const UploadRoute = () => <Text>Upload</Text>;

const FollowingRoute = () => <Followings/>;

const MyPageRoute = () => <Text>MyPage</Text>;


export default function NavBar() {
  const paperTheme = useTheme();
  paperTheme.colors.secondaryContainer = 'transparent';

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'home', title: 'Home', focusedIcon: 'home', unfocusedIcon: 'home-outline'},
    {key: 'bookmark', title: 'Bookmark', focusedIcon: 'bookmark', unfocusedIcon: 'bookmark-outline'},
    {key: 'upload', title: 'Upload', focusedIcon: 'plus-circle-outline', unfocusedIcon: 'plus-circle'},
    {key: 'following', title: 'Following', focusedIcon: 'heart', unfocusedIcon: 'heart-outline'},
    {key: 'myPage', title: 'MyPage', focusedIcon: 'account', unfocusedIcon: 'account-outline'},
  ])

  const renderScene = BottomNavigation.SceneMap({
    home: HomeRoute,
    bookmark: BookmarkRoute,
    upload: UploadRoute,
    following: FollowingRoute,
    myPage: MyPageRoute,
  });

  return (
    <BottomNavigation
      navigationState={{index, routes}}
      onIndexChange={setIndex}
      renderScene={renderScene}
      shifting={false}
      labeled={false}
      compact={false}
      activeColor={theme.main}
      barStyle={{borderTopColor: theme.grey, borderTopWidth: 0.75, backgroundColor: 'white'}}
    />
  )
}
