var define = require("node-constants")(exports);

define({
    MESSAGE: {
        LOG:{
            MYSQL_DB_ERROR: 'MYSQL_DB_ERROR',
            MONGODB_ERROR: 'MONGODB_ERROR',
            QUERY_ERROR: 'QUERY_ERROR'
        },
        UI: {
            MYSQL_DB_ERROR: 'Something wrong, please try again later',
            MONGODB_ERROR: 'Something wrong, please try again later',
            QUERY_ERROR: 'Something wrong, please try again later'
        },

        SHARE: {
            ERROR: 'SHARE_ERROR',
            SUCCESS: 'SHARE_SUCCESS',
            LINKEDIN: {
                SHARING_FAILED: "Error sharing to Linkedin",
                SHARING_SUCCESS: "Posted Successfully!"
            }
        },

        PROFILE: {
            ERROR: 'PROFILE_ERROR',
            NOT_FOUND: 'Profile Not Found!',
            EMPTY_ACCESS_TOKEN: 'Access token is empty, please login and try again'
        }
    }
});