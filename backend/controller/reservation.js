import ErrorHandler from "../middlewares/error.js";
import { Reservation } from "../models/reservation.js";


const send_reservation = async (req, res, next) => {
const {
  firstName,
  lastName,
  email,
  phone,
  date,
  time,
  guests,
  message
} = req.body; 
  if (!firstName || !lastName || !email || !date || !time || !guests || !phone) {
    return next(new ErrorHandler("Please fill all required reservation fields!", 400));
  }

  try {
    await Reservation.create({ firstName, lastName, email, date, time,guests, message, phone });
    res.status(201).json({
      success: true,
      message: "Reservation Sent Successfully!",
    });
  } catch (error) {
    // Handle Mongoose validation errors
    if (error.name === 'ValidationError') {
      const validationErrors = Object.values(error.errors).map(err => err.message);
      return next(new ErrorHandler(validationErrors.join(', '), 400));
    }

    // Handle other errors
    return next(error);
  }
};


export default send_reservation;

