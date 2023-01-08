import React from "react";
import '../styles/dashboard.css';
import SingleCard from "../component/reuseable/SingleCard";
import MileChart from "../Charts/MileChart";
import CarStatsChart from "../Charts/CarStatsChart";
import RecommendCarCard from "../component/UI/RecommendCarCard";
import recommendCarsData from "../assets/dummy-data/recommendCars";



const Energy= {
    title: 'Energe',
    icon:'ri-battery-2-charge-line',
    percent: 45
};
const Range= {
    title: 'Range',
    icon:'ri-split-cells-vertical',
    percent: "157k"
};
const breakFluid= {
    title: 'Break fluid',
    icon:'ri-drop-fill',
    percent: 9
};
const tireWear= {
    title: 'Tire Wear',
    icon:'ri-lightbulb-fill',
    percent: 25
};

const Dashboard = () => {
    return(
        <div className="dashboard">
            <div className="dashboard__wrapper">
                <div className="dashboard__cards">
                <SingleCard item={Energy}/>
                <SingleCard item={Range}/>
                <SingleCard item={breakFluid}/>
                <SingleCard item={tireWear}/>
                </div>

                <div className="statics">
                    <div className="stats">
                        <h3 className="stats__title"><b>Miles</b> Statistics</h3>
                        <MileChart />
                    </div>
                    <div className="stats">
                        <h3 className="stats__title"><b>Car</b> Statistics</h3>
                        <CarStatsChart />
                    </div>
                </div>

                <div className="recommend__cars-wrapper">
                 {
                    recommendCarsData.map((item)=> ( <RecommendCarCard item={item} key= {item.id} />)
                 )}
                </div>

            </div>
        </div>
    );
};

export default Dashboard;