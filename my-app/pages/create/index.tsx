import React, { ReactNode } from "react"
import { InferGetStaticPropsType } from 'next';

type Data = {
  message: string;
  result: {
    id: string;
    films: string;
    people: string;
    planets: string;
    species: string;
    vehicles: string;
  };
};

export const getStaticProps = async () => {

    // response
    const res = await fetch('https://www.swapi.tech/api/');
    //convert
    const data: Data[] = await res.json();
    return {
        props: {
            data
        }
    }
}



const Index = ({ data }: InferGetStaticPropsType<typeof getStaticProps>) =>
{

    return (
        <div>
        <h1>
        handle homepage of create blog
        </h1>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </div>
    )
}

export default Index;