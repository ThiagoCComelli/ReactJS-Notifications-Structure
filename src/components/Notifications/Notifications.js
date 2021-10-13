import React, {useState,forwardRef,useImperativeHandle} from 'react';
import {randomstring} from 'randomstring-js'
import './Notifications.css'

const NotificationsItem = ({content,removeNotification}) => {
    return (
        <div onAnimationEnd={() => {removeNotification(content)}} className="mainNotification">
            {content}
        </div>
    )
}

const Notifications = forwardRef((props, ref) => {
    const [notifications, setNotifications] = useState([])

    const getNoti = () => {
        return notifications
    }

    const removeNotification = (id) => {
        setNotifications(notifications.filter(item => item !== id))
    }

    useImperativeHandle(ref, () => ({
        getAllNotifications() {
            return getNoti()
        },
        newNotification() {
            setNotifications([...notifications,randomstring()])
        },
    }))

    return (
        <div id="NotificationHelper" className="mainNotifications">
            {notifications.map((item) => {
                return (
                    <NotificationsItem removeNotification={removeNotification} key={item} content={item}/>
                )
            })}
        </div>
    )
})

export default Notifications;
