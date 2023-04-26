function displayFees() {
  // User input for fee type
  const feeType = prompt("Enter fee type (Exam Fee / Application Fee):");

  // User input for nationality
  const nationality = prompt("Enter nationality:");

  // User input for course
  const course = prompt("Enter course:");

  // User input for level
  //There's no Level in Application Fee so it's not required
  var level = "";
  if (feeType == "Exam Fee") {
    level = prompt("Enter level:");
  }

  const fees = {
    "Exam Fee": {
      INDIAN: {
        ALL_COURSES: {
          ALL_LEVEL: {
            amount: 400,
          },
        },
      },
      FOREIGN: {
        ALL_COURSES: {
          ALL_LEVEL: {
            amount: 100,
          },
        },
      },
      NRI: {
        ALL_COURSES: {
          ALL_LEVEL: {
            amount: 600,
          },
        },
      },
      SAARC: {
        ALL_COURSES: {
          ALL_LEVEL: {
            amount: 600,
          },
        },
      },
    },
    "Application Fee": {
      INDIAN: {
        ALL_COURSES: {
          UG: {
            amount: 200,
          },
          "UG-DIPLOMA": {
            amount: 300,
          },
          PG: {
            amount: 500,
          },
        },
      },
      FOREIGN: {
        ALL_COURSES: {
          UG: {
            amount: 400,
          },
          "UG-DIPLOMA": {
            amount: 400,
          },
          PG: {
            amount: 700,
          },
        },
      },
    },
  };

  // Calculate the total fee based on user inputs
  let fee = 0;
  if (feeType === "Exam Fee") {
    fee = fees[feeType][nationality][course][level]["amount"];
  } else {
    fee = fees[feeType][nationality]["ALL_COURSES"][course]["amount"];
  }

  //To dislay the  total fee
  alert(`The fee to be paid is ${fee}`);
}

displayFees();
