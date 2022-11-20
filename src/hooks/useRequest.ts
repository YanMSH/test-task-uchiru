import axios from 'axios';
import { useCallback, useState } from 'react';


export const useRequest = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<null | string>(null);

    const sendRequest = useCallback(
        async (
            options: {
                url: string;
                method?: string;
                headers?: { [field: string]: string };
                data?: { [field: string]: string };
            },
            applyData: (data: any) => void
        ) => {
            setIsLoading(true);
            setError(null);
            try {
                const response = await axios({
                    url: options.url,
                    method: options.method || 'get',
                    data: options.data,
                    headers: options.headers
                        ? options.headers
                        : { Accept: 'application/json', 'Content-Type': 'application/json', 'x-api-key': process.env.REACT_APP_API_KEY },
                });
                console.log(response.data)
                applyData(response.data);
            } catch (err: unknown) {
                if ((err as Error).message) {
                    setError((err as Error).message);
                } else {
                    setError('Undefined error from useRequest');
                }
            }
            setIsLoading(false);
        },
        []
    );
    return { isLoading, error, sendRequest };
};

export default useRequest;