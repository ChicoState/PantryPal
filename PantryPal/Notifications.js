/*
 * File: Notifications.js
 * Description: This is to enable or disable notifications for the items in the pantry.
 */

import React, { useEffect } from 'react';
import { Notifications } from 'react-native-notifications';

const NotificationManager = ({ notificationsMap, enable }) => {
  useEffect(() => {
    const manageNotifications = () => {
      Object.entries(notificationsMap).forEach(({key, itemData}) => {
        const notificationId = key;

        if (enable && itemData.expiration) {
          Notifications.postLocalNotification({
            title: 'Expiring Item',
            body: `${notificationId} expires on ${itemData.expiration}`,
            extra: { key, itemData },
            sound: 'default',
            badge: 1,
            notificationId,
          });
        } else {
          Notifications.cancelLocalNotification(notificationId);
        }
      });
    };

    // Manage notifications based on props
    manageNotifications();

    return () => {
      // Cleanup if needed
    };
  }, []);

  return null; // This component doesn't render anything
};

export default NotificationManager;