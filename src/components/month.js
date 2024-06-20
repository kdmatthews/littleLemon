import Weekday from "./weekday";
const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];


function Month(){
    const weekdaysMarkup = weekdays.map(weekday => {
        return (
            <Weekday
            key={weekday}
            title={abbreviationFromWeekday(weekday)}
            label={weekday}
            />
        )
    });
    return(
        <>
        <div className="weekdays-container">{weekdaysMarkup}</div>
        <div>"where dates go"</div>
        </>
    )

    }




function abbreviationFromWeekday(weekday) {
    return weekday.substring(0, 2)
}

export default Month;