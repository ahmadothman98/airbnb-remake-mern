import './../style/filters.css'
import ScrollMenu from 'react-horizontal-scrolling-menu';
import {IoIosArrowDropright,IoIosArrowDropleft} from 'react-icons/io'
import { useEffect, useState } from 'react';


const Filters = () => {
    const [left,setLeft] = useState(60)
    const [animation,setAnimation] = useState("");


    const leftClick = () =>{
        console.log(left)
        setAnimation("bannermoveright");
        setTimeout(() => {
            setLeft(left<60 ? left+180:left);
            setAnimation("");
        }, 300);
    }
    const rightClick = () =>{
        console.log(left)
        setAnimation("bannermoveleft");
        setTimeout(() => {
            setLeft(left>-4620?left-180:left);
            setAnimation("");
        }, 300);

    }
    
    return (
        <div className="container" >
            <IoIosArrowDropleft className='left-arrow' onClick={()=>{leftClick()}}/>
            <div className="filter-items" style={{ "left": left,"animationName":animation}}>

                <div className="filter ">
                    <img className="filter-pic"  src="https://a0.muscache.com/pictures/8e507f16-4943-4be9-b707-59bd38d56309.jpg" alt="" width="24" height="24" />
                    <span className="filter-name" >Islands </span>
                </div>

                <div className="filter ">
                    <img className="filter-pic"  src="https://a0.muscache.com/pictures/10ce1091-c854-40f3-a2fb-defc2995bcaf.jpg" alt="" width="24" height="24" />
                    <span className="filter-name" >Beach </span>
                </div>

                <div className="filter ">
                    <img className="filter-pic"  src="https://a0.muscache.com/pictures/3fb523a0-b622-4368-8142-b5e03df7549b.jpg" alt="" width="24" height="24" />
                    <span className="filter-name" >Amazing pools </span>
                </div>

                <div className="filter ">
                    <img className="filter-pic"  src="https://a0.muscache.com/pictures/c5a4f6fc-c92c-4ae8-87dd-57f1ff1b89a6.jpg" alt="" width="24" height="24" />
                    <span className="filter-name" >OMG! </span>
                </div>

                <div className="filter ">
                    <img className="filter-pic"  src="https://a0.muscache.com/pictures/c0a24c04-ce1f-490c-833f-987613930eca.jpg" alt="" width="24" height="24" />
                    <span className="filter-name" >National parks </span>
                </div>

                <div className="filter ">
                    <img className="filter-pic"  src="https://a0.muscache.com/pictures/732edad8-3ae0-49a8-a451-29a8010dcc0c.jpg" alt="" width="24" height="24" />
                    <span className="filter-name" >Cabins </span>
                </div>

                <div className="filter ">
                    <img className="filter-pic"  src="https://a0.muscache.com/pictures/50861fca-582c-4bcc-89d3-857fb7ca6528.jpg" alt="" width="24" height="24" />
                    <span className="filter-name" >Design </span>
                </div>

                <div className="filter ">
                    <img className="filter-pic"  src="https://a0.muscache.com/pictures/8b44f770-7156-4c7b-b4d3-d92549c8652f.jpg" alt="" width="24" height="24" />
                    <span className="filter-name" >Arctic </span>
                </div>

                <div className="filter ">
                    <img className="filter-pic"  src="https://a0.muscache.com/pictures/35919456-df89-4024-ad50-5fcb7a472df9.jpg" alt="" width="24" height="24" />
                    <span className="filter-name" >Tiny homes </span>
                </div>

                <div className="filter ">
                    <img className="filter-pic"  src="https://a0.muscache.com/pictures/677a041d-7264-4c45-bb72-52bff21eb6e8.jpg" alt="" width="24" height="24" />
                    <span className="filter-name" >Lakefront </span>
                </div>

                <div className="filter">
                    <img className="filter-pic"  src="https://a0.muscache.com/pictures/ca25c7f3-0d1f-432b-9efa-b9f5dc6d8770.jpg" alt="" width="24" height="24" />
                    <span className="filter-name" >Camping </span>
                </div>

                <div className="filter">
                    <img className="filter-pic"  src="https://a0.muscache.com/pictures/3b1eb541-46d9-4bef-abc4-c37d77e3c21b.jpg" alt="" width="24" height="24" />
                    <span className="filter-name" >Amazing views </span>
                </div>

                <div className="filter">
                    <img className="filter-pic"  src="https://a0.muscache.com/pictures/4221e293-4770-4ea8-a4fa-9972158d4004.jpg" alt="" width="24" height="24" />
                    <span className="filter-name" >Caves </span>
                </div>

                <div className="filter">
                    <img className="filter-pic"  src="https://a0.muscache.com/pictures/957f8022-dfd7-426c-99fd-77ed792f6d7a.jpg" alt="" width="24" height="24" />
                    <span className="filter-name" >Surfing </span>
                </div>

                <div className="filter">
                    <img className="filter-pic"  src="https://a0.muscache.com/pictures/1d477273-96d6-4819-9bda-9085f809dad3.jpg" alt="" width="24" height="24" />
                    <span className="filter-name" >A-frames </span>
                </div>

                <div className="filter">
                    <img className="filter-pic"  src="https://a0.muscache.com/pictures/d7445031-62c4-46d0-91c3-4f29f9790f7a.jpg" alt="" width="24" height="24" />
                    <span className="filter-name" >Earth homes </span>
                </div>

                <div className="filter">
                    <img className="filter-pic"  src="https://a0.muscache.com/pictures/ee9e2a40-ffac-4db9-9080-b351efc3cfc4.jpg" alt="" width="24" height="24" />
                    <span className="filter-name" >Tropical </span>
                </div>

                <div className="filter">
                    <img className="filter-pic"  src="https://a0.muscache.com/pictures/5ed8f7c7-2e1f-43a8-9a39-4edfc81a3325.jpg" alt="" width="24" height="24" />
                    <span className="filter-name" >Bed &amp; breakfasts </span>
                </div>

                <div className="filter">
                    <img className="filter-pic"  src="https://a0.muscache.com/pictures/c8e2ed05-c666-47b6-99fc-4cb6edcde6b4.jpg" alt="" width="24" height="24" />
                    <span className="filter-name" >Luxe </span>
                </div>

                <div className="filter">
                    <img className="filter-pic"  src="https://a0.muscache.com/pictures/ed8b9e47-609b-44c2-9768-33e6a22eccb2.jpg" alt="" width="24" height="24" />
                    <span className="filter-name" >Iconic cities </span>
                </div>

                <div className="filter">
                    <img className="filter-pic"  src="https://a0.muscache.com/pictures/52c8d856-33d0-445a-a040-a162374de100.jpg" alt="" width="24" height="24" />
                    <span className="filter-name" >Shared homes </span>
                </div>

                <div className="filter">
                    <img className="filter-pic"  src="https://a0.muscache.com/pictures/1b6a8b70-a3b6-48b5-88e1-2243d9172c06.jpg" alt="" width="24" height="24" />
                    <span className="filter-name" >Castles </span>
                </div>

                <div className="filter">
                    <img className="filter-pic"  src="https://a0.muscache.com/pictures/6ad4bd95-f086-437d-97e3-14d12155ddfe.jpg" alt="" width="24" height="24" />
                    <span className="filter-name" >Countryside </span>
                </div>

                <div className="filter">
                    <img className="filter-pic"  src="https://a0.muscache.com/pictures/78ba8486-6ba6-4a43-a56d-f556189193da.jpg" alt="" width="24" height="24" />
                    <span className="filter-name" >Mansions </span>
                </div>

                <div className="filter">
                    <img className="filter-pic"  src="https://a0.muscache.com/pictures/aaa02c2d-9f0d-4c41-878a-68c12ec6c6bd.jpg" alt="" width="24" height="24" />
                    <span className="filter-name" >Farms </span>
                </div>

                <div className="filter">
                    <img className="filter-pic"  src="https://a0.muscache.com/pictures/33dd714a-7b4a-4654-aaf0-f58ea887a688.jpg" alt="" width="24" height="24" />
                    <span className="filter-name" >Historical homes </span>
                </div>

                <div className="filter">
                    <img className="filter-pic"  src="https://a0.muscache.com/pictures/4759a0a7-96a8-4dcd-9490-ed785af6df14.jpg" alt="" width="24" height="24" />
                    <span className="filter-name" >Yurts </span>
                </div>

                <div className="filter">
                    <img className="filter-pic"  src="https://a0.muscache.com/pictures/c8bba3ed-34c0-464a-8e6e-27574d20e4d2.jpg" alt="" width="24" height="24" />
                    <span className="filter-name" >Skiing </span>
                </div>

                <div className="filter">
                    <img className="filter-pic"  src="https://a0.muscache.com/pictures/e4b12c1b-409b-4cb6-a674-7c1284449f6e.jpg" alt="" width="24" height="24" />
                    <span className="filter-name" >Cycladic homes </span>
                </div>

                <div className="filter">
                    <img className="filter-pic"  src="https://a0.muscache.com/pictures/a6dd2bae-5fd0-4b28-b123-206783b5de1d.jpg" alt="" width="24" height="24" />
                    <span className="filter-name" >Desert </span>
                </div>

                <div className="filter">
                    <img className="filter-pic"  src="https://a0.muscache.com/pictures/6b639c8d-cf9b-41fb-91a0-91af9d7677cc.jpg" alt="" width="24" height="24" />
                    <span className="filter-name" >Golfing </span>
                </div>

                <div className="filter">
                    <img className="filter-pic"  src="https://a0.muscache.com/pictures/ddd13204-a5ae-4532-898c-2e595b1bb15f.jpg" alt="" width="24" height="24" />
                    <span className="filter-name" >Chef's kitchens </span>
                </div>

                <div className="filter">
                    <img className="filter-pic"  src="https://a0.muscache.com/pictures/89faf9ae-bbbc-4bc4-aecd-cc15bf36cbca.jpg" alt="" width="24" height="24" />
                    <span className="filter-name" >Domes </span>
                </div>

                <div className="filter">
                    <img className="filter-pic"  src="https://a0.muscache.com/pictures/31c1d523-cc46-45b3-957a-da76c30c85f9.jpg" alt="" width="24" height="24" />
                    <span className="filter-name" >Campers </span>
                </div>

                <div className="filter">
                    <img className="filter-pic"  src="https://a0.muscache.com/pictures/48b55f09-f51c-4ff5-b2c6-7f6bd4d1e049.jpg" alt="" width="24" height="24" />
                    <span className="filter-name" >Minsus </span>
                </div>

                <div className="filter">
                    <img className="filter-pic"  src="https://a0.muscache.com/pictures/bcd1adc0-5cee-4d7a-85ec-f6730b0f8d0c.jpg" alt="" width="24" height="24" />
                    <span className="filter-name" >Beachfront </span>
                </div>

                <div className="filter">
                    <img className="filter-pic"  src="https://a0.muscache.com/pictures/60ff02ae-d4a2-4d18-a120-0dd274a95925.jpg" alt="" width="24" height="24" />
                    <span className="filter-name" >Vineyards </span>
                </div>

                <div className="filter">
                    <img className="filter-pic"  src="https://a0.muscache.com/pictures/251c0635-cc91-4ef7-bb13-1084d5229446.jpg" alt="" width="24" height="24" />
                    <span className="filter-name" >Casas particulares </span>
                </div>

                <div className="filter">
                    <img className="filter-pic"  src="https://a0.muscache.com/pictures/5cdb8451-8f75-4c5f-a17d-33ee228e3db8.jpg" alt="" width="24" height="24" />
                    <span className="filter-name" >Windmills </span>
                </div>

                <div className="filter">
                    <img className="filter-pic"  src="https://a0.muscache.com/pictures/827c5623-d182-474a-823c-db3894490896.jpg" alt="" width="24" height="24" />
                    <span className="filter-name" >Ryokans </span>
                </div>

                <div className="filter">
                    <img className="filter-pic"  src="https://a0.muscache.com/pictures/757deeaa-c78f-488f-992b-d3b1ecc06fc9.jpg" alt="" width="24" height="24" />
                    <span className="filter-name" >Ski-in/out </span>
                </div>

                <div className="filter">
                    <img className="filter-pic"  src="https://a0.muscache.com/pictures/747b326c-cb8f-41cf-a7f9-809ab646e10c.jpg" alt="" width="24" height="24" />
                    <span className="filter-name" >Shepherd's huts </span>
                </div>

                <div className="filter">
                    <img className="filter-pic"  src="https://a0.muscache.com/pictures/9a2ca4df-ee90-4063-b15d-0de7e4ce210a.jpg" alt="" width="24" height="24" />
                    <span className="filter-name" >Off-the-grid </span>
                </div>

                <div className="filter">
                    <img className="filter-pic"  src="https://a0.muscache.com/pictures/8f7740f0-4854-4057-8082-e098649cf689.jpg" alt="" width="24" height="24" />
                    <span className="filter-name" >Kezhans </span>
                </div>

                <div className="filter">
                    <img className="filter-pic"  src="https://a0.muscache.com/pictures/687a8682-68b3-4f21-8d71-3c3aef6c1110.jpg" alt="" width="24" height="24" />
                    <span className="filter-name" >Boats </span>
                </div>

                <div className="filter">
                    <img className="filter-pic"  src="https://a0.muscache.com/pictures/4d4a4eba-c7e4-43eb-9ce2-95e1d200d10e.jpg" alt="" width="24" height="24" />
                    <span className="filter-name" >Treehouses </span>
                </div>

                <div className="filter">
                    <img className="filter-pic"  src="https://a0.muscache.com/pictures/d721318f-4752-417d-b4fa-77da3cbc3269.jpg" alt="" width="24" height="24" />
                    <span className="filter-name" >Towers </span>
                </div>

                <div className="filter">
                    <img className="filter-pic"  src="https://a0.muscache.com/pictures/f60700bc-8ab5-424c-912b-6ef17abc479a.jpg" alt="" width="24" height="24" />
                    <span className="filter-name" >Barns </span>
                </div>

                <div className="filter">
                    <img className="filter-pic"  src="https://a0.muscache.com/pictures/c027ff1a-b89c-4331-ae04-f8dee1cdc287.jpg" alt="" width="24" height="24" />
                    <span className="filter-name" >Houseboats </span>
                </div>

                <div className="filter">
                    <img className="filter-pic"  src="https://a0.muscache.com/pictures/0ff9740e-52a2-4cd5-ae5a-94e1bfb560d6.jpg" alt="" width="24" height="24" />
                    <span className="filter-name" >Containers </span>
                </div>

                <div className="filter">
                    <img className="filter-pic"  src="https://a0.muscache.com/pictures/8a43b8c6-7eb4-421c-b3a9-1bd9fcb26622.jpg" alt="" width="24" height="24" />
                    <span className="filter-name" >Creative spaces </span>
                </div>

                <div className="filter">
                    <img className="filter-pic"  src="https://a0.muscache.com/pictures/8eccb972-4bd6-43c5-ac83-27822c0d3dcd.jpg" alt="" width="24" height="24" />
                    <span className="filter-name" >Grand pianos </span>
                </div>

                <div className="filter">
                    <img className="filter-pic"  src="https://a0.muscache.com/pictures/7ff6e4a1-51b4-4671-bc9a-6f523f196c61.jpg" alt="" width="24" height="24" />
                    <span className="filter-name" >Riads </span>
                </div>

                <div className="filter">
                    <img className="filter-pic"  src="https://a0.muscache.com/pictures/33848f9e-8dd6-4777-b905-ed38342bacb9.jpg" alt="" width="24" height="24" />
                    <span className="filter-name" >Trulli </span>
                </div>

                <div className="filter">
                    <img className="filter-pic"  src="https://a0.muscache.com/pictures/c9157d0a-98fe-4516-af81-44022118fbc7.jpg" alt="" width="24" height="24" />
                    <span className="filter-name" >Dammusos </span>
                </div>

                <div className="filter">
                    <img className="filter-pic"  src="https://a0.muscache.com/pictures/a4634ca6-1407-4864-ab97-6e141967d782.jpg" alt="" width="24" height="24" />
                    <span className="filter-name" >Lake </span>
                </div>
            </div>
            <IoIosArrowDropright className='right-arrow'onClick={()=>{rightClick()}} />
        </div>
    )
}

export default Filters;