import React, { useEffect, useState } from 'react';
import axios from 'axios';
import openSocket from 'socket.io-client';

const App = () => {

    const [data, dataState] = useState(null);

    const fetchNumber = async () => {
        const { data } = await axios.get('http://localhost:5000/number');
        console.log(data);
        dataState(data);
    };

    const addToNumber = async () => {
        try {
            const resp = await axios.post('http://localhost:5000/number', { _id: data._id, value: data.value + 1 });
            dataState(resp.data);
            console.log(resp.data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchNumber();
        const socket = openSocket("http://localhost:5000");
        socket.on('number', data => {
            console.log(data);
            dataState(data.value);
        });
    }, []);


    return (
        <div>
            the number is {data ? data.value : 1}
            <button onClick={addToNumber}>add</button>
        </div>
    );
};

export default App;