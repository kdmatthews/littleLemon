import Calendar from "./calendar";
import Time from "./time";
import Party from "./party";
import Form from "./form";

function Main(){
    return (
        <>
        <main className="main-container">
        <div className="calendar">
        <Calendar/>
        </div>
        <Time/>
        <Party/>
        <Form/>
        </main>
        </>
    );
}

export default Main;