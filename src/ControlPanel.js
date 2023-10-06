// Importing necessary React components and hooks from external libraries
import { useState, useEffect } from 'react';
import { Button, Segment, Dropdown, Menu, Header, Icon, Card } from 'semantic-ui-react'

// Importing custom store hook and quakeData
import useStore from "./Store";
import quakeData from './data/QuakeDB.json'

// Importing QuakeInfoBar component
import QuakeInfoBar from './QuakeInfoBar';

// Defining the ControlPanel component
export default function ControlPanel() {

    // declare state variables for selectedDay and days
    const [selectedDay, setSelectedDay] = useState(null);
    const [days, setDays] = useState([]);

    // Access the contexts and setter functions from the custom store    
    const view = useStore((state) => state.view)
    const changeView = useStore((state) => state.changeView)

    const selectedYear = useStore((state) => state.year);
    const selectedDDay = useStore((state) => state.day);

    const isPlaying = useStore((state) => state.isPlaying);

    // Find quake data based on selected year and day
    const quake = quakeData.find((item) => item.year == selectedYear && item.day == selectedDDay);

    // Create an array of unique years from quakeData for dropdown options since years are repetitive
    const years = [...new Set(quakeData.map((item) => item.year))].map((year) => ({
        key: year,
        text: year,
        value: year,
    }));

    // useEffect hook to update the 'days' state based on the selected year
    useEffect(() => {
        if (selectedYear) {

            // Filter quakeData for the selected year
            const yearData = quakeData.filter((item) => item.year === selectedYear);
            
            // Extract unique days for the selected year
            const uniqueDays = [...new Set(yearData.map((item) => item.day))];

            // Update 'days' state with dropdown options for days
            setDays(uniqueDays.map((day) => ({
                key: day,
                text: day,
                value: day,
            })));
        } else {
            // Clear 'days' state if no year is selected        
            setDays([]);
        }
        // Reset selected day to null else
        setSelectedDay(null);
    }, [selectedYear]);


    // Access functions from the custom store
    const handleYearChange = useStore((state) => state.handleYearChange);
    const handleDayChangeActual = useStore((state) => state.handleDayChange);
    const handlePlaying = useStore((state) => state.handlePlaying);


    // Function to handle day change events
    function handleDayChange(event, data) {
        setSelectedDay(data.value);

        // Calling the handleDayChangeActual function from the store
        handleDayChangeActual(event, data);
    }


    // Render the ControlPanel Component
    return (
        <div style={{ display: 'flex' }}>

            {/* Header for the control panel */}
            <Header as='h2' color='white'>
                <Icon name='settings' style={{ color: 'white' }} />
                <Header.Content style={{ color: 'white' }}>
                    &lt;Control_Panel&gt;
                    <Header.Subheader style={{ color: 'white', marginRight: '20px', fontSize: '20px' }}>Select the Year and Day of MoonQuake</Header.Subheader>
                </Header.Content>
            </Header>


            {/* Year and Day selection controls */}
            <div style={{paddingRight:'200px', display:'flex'}}>
                <Menu compact>
                    <Dropdown text={selectedYear || 'Select Year'}
                        options={years}
                        fluid
                        selection
                        style={{ backgroundColor: 'black', color: 'white' }}
                        onChange={handleYearChange}
                        disabled={isPlaying}
                        title='Select The Year'
                    />
                </Menu>
                <Menu compact>
                    <Dropdown
                        placeholder='Select Day'
                        fluid
                        selection
                        options={days}
                        onChange={handleDayChange}
                        style={{ backgroundColor: 'black', color: 'white' }}
                        disabled={!selectedYear}
                    />
                </Menu>
                <Segment inverted style={{ background: 'black' }}>
                    {/* Button for playing or stopping */}
                    <Button basic inverted onClick={handlePlaying} >
                        {!isPlaying ? 'Play Now' : 'Stop Playing'}
                    </Button>
                </Segment>
            </div>
            {   
                /* Displaying QuakeInfoBar component if Playing */
                isPlaying && <QuakeInfoBar quake = {quake} isPlaying={isPlaying} />
            }
        </div>
    );
}