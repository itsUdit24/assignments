function dateMethods() {
  const currentDate = new Date();
  console.log("Current Date:", currentDate);

  // Getting various components of the date
  console.log("Date:", currentDate.getDate());
  console.log("Month:", currentDate.getMonth() + 1); // Months are zero-indexed, so adding 1
  console.log("Year:", currentDate.getFullYear());
  console.log("Hours:", currentDate.getHours());
  console.log("Minutes:", currentDate.getMinutes());
  console.log("Seconds:", currentDate.getSeconds());

  // Setting components of the date
  currentDate.setFullYear(2022);
  console.log("After setFullYear:", currentDate);

  currentDate.setMonth(5); // Setting month to June (zero-indexed)
  console.log("After setMonth:", currentDate);

  // Getting and setting time in milliseconds since 1970
  console.log("Time in milliseconds since 1970:", currentDate.getTime());

  const newDate = new Date(2023, 8, 15); // Creating a new date
  console.log("New Date:", newDate);
}

// Example Usage for Date Methods
dateMethods();


/*
OUTPUT: (ChatGPT)
Current Date: Tue Sep 09 2025 13:31:44 GMT+0530 (India Standard Time)
Date: 9
Month: 9
Year: 2025
Hours: 13
Minutes: 31
Seconds: 44
After setFullYear: Fri Sep 09 2022 13:31:44 GMT+0530 (India Standard Time)
After setMonth: Thu Jun 09 2022 13:31:44 GMT+0530 (India Standard Time)
Time in milliseconds since 1970: 1654761704000
New Date: Fri Sep 15 2023 00:00:00 GMT+0530 (India Standard Time
*/ 