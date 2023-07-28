import { useEffect, useState } from "react";

const useOnlineStatus = () => {

    const [onlineStatus, setOnlineStatus] = useState(true);
// when ever you add eventListeners you need to clean up 
    useEffect(() => {

        const handleOnline = () => {
            setOnlineStatus(true)
        }
        const handleOffline = () => {
            setOnlineStatus(false)
        }
        window.addEventListener("online", handleOnline)
        window.addEventListener("offline", handleOffline)
        return () => {
            window.removeEventListener("online", handleOnline),
            window.removeEventListener("offline", handleOffline)
    }

    }, []);
    
    return onlineStatus;
}

export default useOnlineStatus;