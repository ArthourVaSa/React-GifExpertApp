import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GiftExpertApp = () => {

    const [categories, setCategories] = useState(['One Puch Man']);

    // const handleApp = () => {

    //     const anime = 'JoJos';

    //     // setCategories([...categories, anime]);
    //     setCategories(cats => [...cats,anime]);

    // }

    return (
        <>
            <h2>GiftExpertApp</h2>
            <AddCategory setCategories={setCategories} />
            <hr/>

            <ol>
                {
                    categories.map(catgory => <GifGrid key={catgory} category={catgory}/>)
                }
            </ol>

        </>
    );

}