import React from "react";
import Emojigrid from "../Components/Emojigrid/Emojigrid";
import Meta from "../Components/Meta";

const Home = () => {
    return (
        <div className="flex flex-col">
            <Meta />
            <Emojigrid />
        </div>
    )
}

export default Home