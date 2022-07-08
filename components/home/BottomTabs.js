import { View, Image, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { Divider } from 'react-native-elements'

export const bottomTabIcons = [
    {
      name: 'Home',
      active: 'https://img.icons8.com/fluency-systems-filled/144/ffffff/home.png',
      inactive:
        'https://img.icons8.com/fluency-systems-regular/48/ffffff/home.png',
    },
    {
      name: 'Search',
      active: 'https://img.icons8.com/ios-filled/500/ffffff/search--v1.png',
      inactive: 'https://img.icons8.com/ios/500/ffffff/search--v1.png',
    },
    {
      name: 'Reels',
      active: 'https://img.icons8.com/ios-filled/50/ffffff/instagram-reel.png',
      inactive: 'https://img.icons8.com/ios/500/ffffff/instagram-reel.png',
    },
    {
      name: 'Shop',
      active:
        'https://img.icons8.com/fluency-systems-filled/48/ffffff/shopping-bag-full.png',
      inactive:
        'https://img.icons8.com/fluency-systems-regular/48/ffffff/shopping-bag-full.png',
    },
    {
      name: 'Profile',
      active:
        'https://www.instadp.com/embedded/aHR0cHM6Ly9zY29udGVudC1vcnQyLTIuY2RuaW5zdGFncmFtLmNvbS92L3Q1MS4yODg1LTE5LzQ5OTA3NTc2XzI3NTk2MDUxOTc0MTY1NF83NjcxNjA5NzU0NDkzMzg2NzUyX24uanBnP19uY19odD1zY29udGVudC1vcnQyLTIuY2RuaW5zdGFncmFtLmNvbSZfbmNfY2F0PTEwMiZfbmNfb2hjPVkwTlNaY2NVUmhzQVhfaEdPcmkmZWRtPUFLcmFsRUlCQUFBQSZjY2I9Ny01Jm9oPTAwX0FULVVrNjJhNWhnQlhNNUt1TVJuRFd0aEZKOFFaZ1VwcWJrSWo0bGtwYjJrZUEmb2U9NjJBMkQzQjcmX25jX3NpZD01ZTMwNzI=.jpg',
      inactive:
        'https://www.instadp.com/embedded/aHR0cHM6Ly9zY29udGVudC1vcnQyLTIuY2RuaW5zdGFncmFtLmNvbS92L3Q1MS4yODg1LTE5LzQ5OTA3NTc2XzI3NTk2MDUxOTc0MTY1NF83NjcxNjA5NzU0NDkzMzg2NzUyX24uanBnP19uY19odD1zY29udGVudC1vcnQyLTIuY2RuaW5zdGFncmFtLmNvbSZfbmNfY2F0PTEwMiZfbmNfb2hjPVkwTlNaY2NVUmhzQVhfaEdPcmkmZWRtPUFLcmFsRUlCQUFBQSZjY2I9Ny01Jm9oPTAwX0FULVVrNjJhNWhnQlhNNUt1TVJuRFd0aEZKOFFaZ1VwcWJrSWo0bGtwYjJrZUEmb2U9NjJBMkQzQjcmX25jX3NpZD01ZTMwNzI=.jpg',
    },
  ]

const BottomTabs = ({icons}) => {
    const [activeTab, setActiveTab] = useState('Home')

    const Icon = ({icon}) => (
        <TouchableOpacity onPress={() => setActiveTab(icon.name)}>
            <Image 
                source={{uri: activeTab == icon.name ? icon.active : icon.inactive}} 
                style={[
                    styles.icon, 
                    icon.name == 'Profile' ? styles.profilePic() : null,
                    activeTab == 'Profile' && icon.name == activeTab 
                        ? styles.profilePic(activeTab) 
                        : null,
            ]}
            />
        </TouchableOpacity>
    )
  return (
      <View style={styles.wrapper}>
        <Divider width={1} orientation='vertical' />
        <View style={styles.container}>
            {icons.map((icon, index) => (
                <Icon key={index} icon={icon} />
            ))}
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    wrapper:{
        position: 'absolute',
        width: '100%',
        bottom: '3%',
        zIndex: 999,
        backgroundColor : '#000',
    },

    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        height: 50,
        paddingTop: 10,
    },
    
    icon: {
        width: 30,
        height:30,
    },

    profilePic: (activeTab = '') => ({
        borderRadius: 50,
        borderWidth: activeTab == 'Profile' ? 2 : 0,
        borderColor: '#fff'
    }),
})

export default BottomTabs