const Bin = require('../models/bin.model');

const getBinDetails = async (address) => {
    try {
        if (address) {
          // Search for bins with the specified address
          return await Bin.find({ address: { $regex: address, $options: 'i' } }); // Case-insensitive search
        } else {
          // Return all bins if no address is specified
          return await Bin.find();
        }
      } catch (error) {
        throw new Error('Error fetching bins: ' + error.message);
      }
    };

// Create a new bin
const createBin = async (binData) => {
  try {
    const newBin = new Bin(binData); // Create a new Bin instance
    await newBin.save(); // Save the bin to the database
    return newBin;
  } catch (err) {
    throw new Error('Error creating bin: ' + err.message);
  }
};

const getAllBins = async () => {
    try {
      const bins = await Bin.find(); // Retrieve all bins from the database
      return bins;
    } catch (error) {
      throw new Error('Error fetching bin details: ' + error.message);
    }
  };

module.exports = {
  getBinDetails,
  createBin,
  getAllBins
};
