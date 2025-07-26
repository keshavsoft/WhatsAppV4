let StartFunc = async () => {
    var calendarEl = document.getElementById('calendar');

    const events = await LocalFuncFetchData();

    jVarCommonCalendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'timeGridWeek',
        editable: true,
        selectable: true,
        businessHours: true,
        dayMaxEvents: true, // allow "more" link when too many events
        events: events,
        headerToolbar: {
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridWeek'
        },
        buttonText: {
            today: 'Today',
            dayGridWeek: 'Week'
        }
    });

    jVarCommonCalendar.render();
};

let LocalFuncFetchData = async () => {
    const jVarLocalFetchUrl = "/publicDir/data.json";
    try {
        const response = await fetch(jVarLocalFetchUrl);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log("data : ", data);

        return data;
    } catch (error) {
        console.error("Fetching error:", error);
    }
};

export { StartFunc };
