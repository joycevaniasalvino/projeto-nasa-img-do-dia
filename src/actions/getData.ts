// getData.ts

import axios from 'axios';

const baseUrl = 'https://api.nasa.gov/planetary';

export interface Data {
    copyright: string;
    date: string;
    explanation: string;
    hdurl: string;
    media_type: string;
    service_version: string;
    title: string;
    url: string;
}

export async function fetchDataFromAPI(): Promise<Data> {
    try {
        const response = await axios.get<Data>(`${baseUrl}/apod?api_key=fAqBTFPfuatIaXqpw4TxcYNjmZNi7aWZ2mgPoyt8`);
        return response.data;
    } catch (error) {
        throw new Error('Erro ao buscar dados da API');
    }
}
