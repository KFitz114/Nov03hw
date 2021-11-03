import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Request(props) {
    const[request, setRequest] = useState ('');
        useEffect(() => {
            let params = {
                name: 'Keegan',
                id: '112'
            }
        axios.get('http://localhost:3400/request', {params})
            .then(res => { console.log(res.data);
                setRequest(res.data.request);
        })
    }, [])
        return(
            <div>
                <h1> User name and id come from here {request} </h1>
            </div>
        )
}

export default Request;