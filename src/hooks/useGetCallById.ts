
import { Call, useStreamVideoClient } from "@stream-io/video-react-sdk"
import { useEffect, useState } from "react"


const useGetCallById = (id : string | string[]) => {

    const [call, setCall] = useState<Call>();
    const [isCallLoading, setIsCallLoading] = useState<boolean>(false);

    const client = useStreamVideoClient();

    useEffect(() => {
        if(!client) return;
        
        const getCall =  async() => {
            try {
                const {calls} = await client.queryCalls({ filter_conditions : {id }});
                if(calls.length > 0) setCall(calls[0]);   
            } catch (error) {
                console.error(error);
                setCall(undefined);
                
            }finally{
                setIsCallLoading(false);
            }
        }

        getCall();

    }, [id, client]);

    return {call, isCallLoading};
}
 export default useGetCallById