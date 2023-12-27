'use client'
import { useEffect, useState } from 'react';
import { fetchDataFromAPI, Data } from '../actions/getData';
import Image from 'next/image'
import Link from 'next/link';

export default function SeuComponente() {
    const [data, setData] = useState<Data | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const fetchedData = await fetchDataFromAPI();
                setData(fetchedData);
            } catch (error) {
                console.error('Erro ao buscar os dados:', error);
            }
        };

        fetchData();
    }, []);



    return (
        <div className='flex justify-center py-5 bg-blue-950'>
            {data && (
                <div className='w-5/6 max-w-5xl flex justify-center flex-col bg-black rounded-xl p-12 text-white gap-y-5'>
                    <div className='flex gap-x-5 items-center'>
                        <a target="_blank" href='https://www.nasa.gov/' >
                            <img
                                className='w-12'
                                src='.\NASA_Icon.png'
                                alt="Logo NASA" />
                        </a>
                        <div className='text-xl max-[350px]:text-xs gap-x-2 flex flex-row max-[400px]:flex-col'>
                            <p className='font-bold'>NASA:</p>
                            <p>Image of the day.</p>
                        </div>
                    </div>
                    <a target="_blank" href={data.url} >
                        <img
                            className='w-full'
                            src={data.hdurl}
                            alt="Imagem do dia da NASA" />
                    </a>
                    <p className='w-full italic text-xs flex justify-end'>Image by {data.copyright}</p>
                    <h2 className='w-64 text-lg font-bold'>{data.title}</h2>
                    <p className=''>{data.explanation}</p>
                    <p className='w-full italic text-xs flex justify-start'>
                        {/* {new Date(data.date).toLocaleDateString(
                            'pt-BR',
                            {
                                timeZone: 'UTC',
                            },
                        )} */}
                        {new Date(data.date).toLocaleDateString('en-US', {
                            timeZone: 'UTC',
                        })
                        }
                    </p>
                </div>
            )}
        </div>
    );
}
