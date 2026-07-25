const { body, validationResult } = require("express-validator");

const validateUrl = [

    body("url")
        .notEmpty()
        .withMessage("URL is required")
        .isURL({
            protocols: ["http", "https"],
            require_protocol: true
        })
        .withMessage("Please provide a valid URL"),

    (req, res, next) => {

        const errors = validationResult(req);

        if (!errors.isEmpty()) {

            return res.status(400).json({
                success: false,
                error: {
                    code: "INVALID_URL",
                    message: errors.array()[0].msg
                }
            });

        }

        next();

    }

];

module.exports = validateUrl;