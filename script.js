// Initialize variables
DEFINE lottoNumbers as an empty list
DEFINE userNumbers as an empty list
DEFINE matchingNumbers as an empty list
DEFINE numberOfNumbers as 6
DEFINE maxNumber as 49

// Function to generate random lotto numbers
FUNCTION generateLottoNumbers()
  WHILE lottoNumbers.size < numberOfNumbers DO
    GENERATE randomNumber between 1 and maxNumber
    IF randomNumber is not in lottoNumbers THEN
      ADD randomNumber to lottoNumbers
    END IF
  END WHILE
END FUNCTION

// Function to get user numbers
FUNCTION getUserNumbers()
  PRINT "Enter your lotto numbers (between 1 and maxNumber):"
  WHILE userNumbers.size < numberOfNumbers DO
    INPUT userNumber
    IF userNumber is between 1 and maxNumber AND userNumber is not in userNumbers THEN
      ADD userNumber to userNumbers
    ELSE
      PRINT "Invalid number, try again."
    END IF
  END WHILE
END FUNCTION

// Function to compare numbers
FUNCTION compareNumbers()
  FOR EACH number IN userNumbers DO
    IF number is in lottoNumbers THEN
      ADD number to matchingNumbers
    END IF
  END FOR
END FUNCTION

// Main program execution
generateLottoNumbers()
getUserNumbers()
compareNumbers()















// Display results
/*PRINT "Lotto numbers are: ", lottoNumbers
PRINT "Your numbers are: ", userNumbers
PRINT "Matching numbers are: ", matchingNumbers

IF matchingNumbers.size > 0 THEN
  PRINT "Congratulations! You have ", matchingNumbers.size, " matching numbers."
ELSE
  PRINT "Sorry, no matching numbers. Better luck next time!"*/