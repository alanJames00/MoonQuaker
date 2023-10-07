import React from "react";

// Define component 'QuakeInfoBar' with 'quake' and 'isPlaying' as props
export default function QuakeInfoBar( {quake, isPlaying} ) {

    return (
        <div style={{display:'flex'}}>
        <div style={{display:'flex'}}>
            
            {/* Quake Info Section */}
            <h2>Quake Info |</h2>

            {/* Display quake information when playing */}
            <div className='moonQuakeInfo' style={{ display: isPlaying ? 'block' : 'none', fontSize: '20px', paddingLeft: '10px' }} >
                Time of Quake(HH:MM:SS): {quake.hour}: {quake.minute}: {quake.seconds}
                <br />
                Lunar Coordinates(Lat.,Long.): {quake.latitude}, {quake.longitude}
            </div>
        </div>

        {/* Display additional quake information when playing is true */}
        <div style={{display:'flex',paddingLeft:'10px',paddingRight:'10px'}}>
            <h2>|</h2>
            <div className='moonQuakeInfo' style={{ display: isPlaying ? 'block' : 'none', fontSize: '20px', paddingLeft: '10px' }} >
            
                Magnitude: {quake.magnitude}
                <br />
                Year: {quake.year}
                <br />
                Day: {quake.day}th Earth Day
            </div>
        </div>

        </div>
    );
}