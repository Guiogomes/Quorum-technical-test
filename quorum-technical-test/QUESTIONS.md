# Discuss your strategy and decisions implementing the application. Please, consider time complexity, effort cost, technologies used and any other variables that you understand important in your development process.

My strategy involves receiving information from CSV files and creating logic to read them and manipulate their data. For this, I decided to create a service responsible for turning the information into an object with two arrays, header, and rows, to make it easier to retrieve information and manipulate it using JavaScript. I believe this solution is somewhat complex because the way JavaScript deals with CSV information is more challenging than Python's behavior. If I used Python, the solution could be implemented much faster. Another improvement I can apply to this code is to use more popular solutions, like React instead of Angular, but I prefer to use Angular because I have been working with it for the past two years.

# How would you change your solution to account for future columns that might be requested, such as "Bill Voted On Date" or "Co-Sponsors"?

I think the solution for reading the information is good for dealing with more data transfer, but the solution for retrieving information can be improved by opting for design pattern solutions, like the Decorator Pattern, but I'm still studying about it and need more time to master the application of design patterns.

# How would you change your solution if, instead of receiving CSVs of data, you were given a list of legislators or bills that you should generate a CSV for?

I would probably opt to turn this writing method into a function called by a button on the front end to convert array information into a CSV file. To do this, I would use JavaScript libraries that allow file writing, like "fs".

# How long did you spend working on the assignment?

I had a bit of difficulty making my solution work with the CSV file "votesResult", but the problem was that the file had a blank line at the end. I need to pay more attention to cases like this, but to develop the solution alone, I spent about 2 hours of effort.
