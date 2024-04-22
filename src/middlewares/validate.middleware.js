const validate = (schema) => async (req, res, next) => {
  try {
    const parseBody = await schema.parseAsync(req.body);
    req.body = parseBody;
    next();
  } catch (err) {
    // Check if errors exist before accessing them
    if (!err.errors) {
      // Handle the case where no errors are present
      console.log("No validation errors found");
      return next(); // Or you can send a success response here
    }

    const status = 422;
    const message = "Fill the input properly";
    const extraDetails = err.errors[0].message; // Access only if errors exist

    const error = {
      status,
      message,
      extraDetails,
    };

    console.log(message);
    next(error); // Pass the entire error object for better handling
  }
};

module.exports = validate;
