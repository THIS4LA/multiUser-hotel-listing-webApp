import Contact from "../models/ContactSchema.js";
import User from "../models/UserSchema.js";

// Get all contacts
export const getAllContacts = async (req, res) => {
  try {
    const contacts = await Contact.find({});

    res
      .status(200)
      .json({ success: true, message: "Successful", data: contacts });
  } catch (err) {
    res.status(404).json({ success: false, message: "Not found" });
  }
};

export const createContact = async (req, res) => {
  const { email, subject, msg } = req.body;
  const userId = req.userId; // Assuming you have userId attached to the request object after authentication

  try {
    // Check if required fields are provided
    if (!email || !msg || !subject) {
      return res.status(400).json({ message: "Email, Subject, and Message are required" });
    }

    // Create a new contact instance with the provided data and the user ID
    const newContact = new Contact({
      user: userId,
      email,
      subject,
      message: msg,
    });

    // Save the new contact to the database
    await newContact.save();

    // Send a success response
    res.status(201).json({ message: "Contact created successfully", contact: newContact });
  } catch (error) {
    // Handle errors
    console.error("Error creating contact:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};