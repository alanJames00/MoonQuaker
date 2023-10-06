import { useState, useEffect } from 'react';
import { Button, Segment, Dropdown, Menu, Header, Icon, Card } from 'semantic-ui-react'
import useStore from "./Store";
import quakeData from './data/QuakeDB.json'
import QuakeInfoBar from './QuakeInfoBar';


export default function ControlPanel() {

    const [selectedDay, setSelectedDay] = useState(null);
    const [days, setDays] = useState([]);
    const view = useStore((state) => state.view)

    console.log(view)
    const changeView = useStore((state) => state.changeView)

    const selectedYear = useStore((state) => state.year);
    const selectedDDay = useStore((state) => state.day);


    const isPlaying = useStore((state) => state.isPlaying);

    const quake = quakeData.find((item) => item.year == selectedYear && item.day == selectedDDay);
    console.log(quake)

    

    const years = [...new Set(quakeData.map((item) => item.year))].map((year) => ({
        key: year,
        text: year,
        value: year,
    }));


    useEffect(() => {
        if (selectedYear) {
            const yearData = quakeData.filter((item) => item.year === selectedYear);
            const uniqueDays = [...new Set(yearData.map((item) => item.day))];
            setDays(uniqueDays.map((day) => ({
                key: day,
                text: day,
                value: day,
            })));
        } else {
            setDays([]);
        }
        setSelectedDay(null);
    }, [selectedYear]);





    const handleYearChange = useStore((state) => state.handleYearChange);
    const handleDayChangeActual = useStore((state) => state.handleDayChange);
    const handlePlaying = useStore((state) => state.handlePlaying);



    function handleDayChange(event, data) {
        setSelectedDay(data.value);
        handleDayChangeActual(event, data);
    }


    return (
        <div style={{ display: 'flex' }}>


            <Header as='h2' color='white'>
                <Icon name='settings' style={{ color: 'white' }} />
                <Header.Content style={{ color: 'white' }}>
                    &lt;Control_Panel&gt;
                    <Header.Subheader style={{ color: 'white', marginRight: '20px', fontSize: '20px' }}>Select the Year and Day of MoonQuake</Header.Subheader>
                </Header.Content>
            </Header>



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
                    <Button basic inverted onClick={handlePlaying} >
                        {!isPlaying ? 'Play Now' : 'Stop Playing'}
                    </Button>
                </Segment>
            </div>
            {
                isPlaying && <QuakeInfoBar quake = {quake} isPlaying={isPlaying} />
            }
        </div>
    );
}