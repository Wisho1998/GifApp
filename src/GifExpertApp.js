import React, { useState } from "react"
import AddCategory from "./components/AddCategory";
import GifGrid from "./components/GifGrid";

const GifExpertApp = () =>{
    const categoriesInit = ["Demon Slayer"];
    const [categories, setCategories] = useState(categoriesInit)

    return (<>
        <header>
            <h1>GifExpertApp</h1>            
            <nav>
                <AddCategory setCategories={setCategories}/>
            </nav>
        </header>
        <section className="content">
            {
                categories.map(category => (
                    <GifGrid 
                        key={category}
                        category={category}
                    />
                ))
            }
        </section>
        <aside className="resume-bar">
            <p>lorasdlkasndlkansdlklkmlkalksdlkasdndlkn 
                adsñlmañlmdlasmdlkasmdlkasmdlmkasd
            </p>
        </aside>
    </>)
}
export default GifExpertApp;