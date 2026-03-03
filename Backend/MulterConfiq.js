const multer = require("multer");
const path = require("path");

// File filter (only allow images)
const fileFilter = (req, file, cb) => {
  const allowedTypes = /jpeg|jpg|png|webp/;

  const isValidExt = allowedTypes.test(
    path.extname(file.originalname).toLowerCase()
  );

  const isValidMime = allowedTypes.test(file.mimetype);

  if (isValidExt && isValidMime) {
    cb(null, true);
  } else {
    cb(new Error("Only image files are allowed!"));
  }
};

// Memory storage
const upload = multer({
  storage: multer.memoryStorage(),   // 🔥 memoryStorage
  fileFilter: fileFilter,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB limit
});

module.exports = upload;