const binService = require('../services/bin.service');

// Controller for creating a new bin
const createBin = async (req, res) => {
  try {
    const binData = req.body; // Get bin data from the request body

    // Create a new bin using the service
    const newBin = await binService.createBin(binData);

    res.status(201).json({
      success: true,
      message: 'Bin created successfully',
      data: newBin
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message
    });
  }
};


const getBinDetails = async (req, res) => {
    try {
      const { address } = req.query; // Get the Address query parameter
      const bins = await binService.getBinDetails(address); // Call service with the Address
      res.status(200).json({
        success: true,
        data: bins,
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: error.message,
      });
    }
  };
const getAllBins = async (req, res) => {
    try {
      const bins = await binService.getAllBins();
      res.status(200).json({
        success: true,
        data: bins
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error.message
      });
    }
  };

module.exports = {
  createBin,
  getBinDetails,
  getAllBins
};
