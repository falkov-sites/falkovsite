import React, { useEffect, useState } from 'react';  

const IPAddress: React.FC = () => {  
    const [ipAddress, setIpAddress] = useState<string | null>(null);  
    const [loading, setLoading] = useState<boolean>(true);  
    const [error, setError] = useState<string | null>(null);  

    useEffect(() => {  
        const fetchIP = async () => {  
            try {  
                const response = await fetch('https://api.ipify.org?format=json');  
                if (!response.ok) {  
                    throw new Error('Network response was not ok');  
                }  
                const data = await response.json();  
                setIpAddress(data.ip);  
            } catch (error: any) {  
                setError(error.message);  
            } finally {  
                setLoading(false);  
            }  
        };  

        fetchIP();  
    }, []);  

    if (loading) {  
        return <div>Загрузка...</div>;  
    }  

    if (error) {  
        return <div>Ошибка: {error}</div>;  
    }  

    return (  
        <div>  
            <h1>Ваш IP-адрес:</h1>  
            <p>{ipAddress}</p>  
        </div>  
    );  
};  

export default IPAddress;