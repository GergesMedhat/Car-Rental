import React from "react";
import "../styles/booking.css";
import CarItem from "../component/UI/CarItem";
import carData from "../assets/dummy-data/booking-cars";

const Booking = () => {
    return(
        <div className="bookings">  
            <div className="booking__wrapper">
                <h2 className="booking__title">Booking</h2>

                <div className="filter__widget-wrapper">
                <div className="filter__widget-01">
                        <select>
                            <option value="New">New</option>
                            <option value="Popular">Popular</option>
                            <option value="Upcoming">Upcoming</option>
                        </select>
                    </div>
                    <div className="filter__widget-02">
                        <select>
                            <option value="toyota">Toyota</option>
                            <option value="bmw">BMW</option>
                            <option value="audi">Audi</option>
                        </select>
                    </div>
                </div>
                <div className="booking__car-list">
                    {
                        carData.map((item) => (<CarItem item={item} key={item.id}  />)
                    )}
                </div>
            </div>
        </div>
    )
}

export default Booking;