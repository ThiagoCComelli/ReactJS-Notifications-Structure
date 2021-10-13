import React, {useRef,useState,useEffect} from 'react'
import Notifications from './Notifications/Notifications';
import NotificationHelper from '../utils/NotificationHelper';
import './App.css';

function App() {
  const [state,setState] = useState(false)
  const notificationRef = useRef(null)

  useEffect(() => {
    NotificationHelper.setup(notificationRef,"NotificationHelper")
    setState(true)
  }, [])

  if(!state) {
    return <></>
  }

  return (
    <div className="mainApp">
      <Notifications ref={NotificationHelper.notificationRef}/>
      <div onClick={() => {NotificationHelper.notificationRef.current.newNotification()}} className="mainAppBox">
        <h2>Box 1</h2>
      </div>
      <div onClick={() => {console.log(NotificationHelper.notificationRef.current.getAllNotifications())}} className="mainAppBox">
        <h2>Box 2</h2>
      </div>
    </div>
  )
}

export default App;
