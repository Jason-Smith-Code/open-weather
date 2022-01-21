// I expect to get a degree number from 0 360 I need to convert that into a string depending on its value

export const convertDirection = (data) => {
    const north = 0;
    const northEast = 45;
    const east = 90;
    const southEast = 135;
    const south = 180;
    const southWest = 225;
    const west = 270
    const northWest = 315;
    const spread = 22.5;

    if          ( data > (north - spread ) && data < (north + spread)) {
        return "North";
    } else if   ( data > (northEast - spread ) && data < (northEast + spread)) {
        return "North East";
    } else if   ( data > (east - spread ) && data < (east + spread)) {
        return "East";
    } else if   ( data > (southEast - spread ) && data < (southEast + spread)) {
        return "South East";
    } else if   ( data > (south - spread ) && data < (south + spread)) {
        return "South";
    } else if   ( data > (southWest - spread ) && data < (southWest + spread)) {
        return "South West";
    } else if   ( data > (west - spread ) && data < (west + spread)) {
        return "West";
    } else if   ( data > (northWest - spread ) && data < (northWest + spread)) {
        return "North West";
    } 
}