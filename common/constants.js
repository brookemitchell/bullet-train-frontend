const keywords = {
    URL_CLIENT: "https://cdn.jsdelivr.net/npm/bullet-train-client/lib/index.js",
    LIB_NAME: "bulletTrain",
    NPM_CLIENT: "bullet-train-client",
    NPM_RN_CLIENT: "react-native-bullet-train",
    USER_ID: "bullet_train_sample_user",
    FEATURE_FUNCTION: "myCoolFeature",
    FEATURE_NAME: "myCoolFeature",
    USER_FEATURE_FUNCTION: "myPowerUserFeature",
    USER_FEATURE_NAME: "myPowerUserFeature",
    FEATURE_NAME_ALT: "bannerSize",
    FEATURE_NAME_ALT_VALUE: "big",
};


var Constants = {
    events: {
        "CREATE_ENVIRONMENT": {"event": "Environment created", "category": "Environment"},
        "CREATE_FEATURE": {"event": "Feature created", "category": "Features"},
        "CREATE_ORGANISATION": {"event": "Organisation created", "category": "Organisation"},
        "CREATE_PROJECT": {"event": "Project created", "category": "Project"},
        "CREATE_USER_FEATURE": {"event": "User feature created", "category": "User Features"},
        "DEMO_ACCOUNT": {"event": "User demo login", "category": "User"},
        "EDIT_ENVIRONMENT": {"event": "Environment edited", "category": "Environment"},
        "EDIT_FEATURE": {"event": "Feature edited", "category": "Features"},
        "EDIT_ORGANISATION": {"event": "Organisation edited", "category": "Organisation"},
        "EDIT_PROJECT": {"event": "Project edited", "category": "Project"},
        "EDIT_USER_FEATURE": {"event": "User feature edited", "category": "Features"},
        "INVITE": {"event": "Invite sent", "category": "Invite"},
        "LOGIN": {"event": "User login", "category": "User"},
        "REGISTER": {"event": "User register", "category": "User"},
        "REMOVE_ENVIRONMENT": {"event": "Environment edited", "category": "Environment"},
        "REMOVE_FEATURE": {"event": "Feature removed", "category": "Features"},
        "REMOVE_PROJECT": {"event": "Project removed", "category": "Project"},
        "REMOVE_USER_FEATURE": {"event": "User feature removed", "category": "User Features"},
        "TOGGLE_FEATURE": {"event": "Feature toggled", "category": "Features"},
        "TOGGLE_USER_FEATURE": {"event": "User feature toggled", "category": "User Features"},
        "TRY_IT": {"event": "Try it clicked", "category": "Click"},
        "VIEW_USER_FEATURE": {"event": "User feature viewed", "category": "User Features"},
        "VIEW_FEATURE": {"event": "Feature viewed", "category": "Features"}
    },
    pages: {
        "COMING_SOON": "Coming Soon Page",
        "CREATE_ENVIRONMENT": "Create Environment Page",
        "DOCUMENTATION": "Documentation Page",
        "ENVIRONMENT_SETTINGS": "Environment Settings Page",
        "FEATURES": "Features Page",
        "HOME": "Home Page",
        "INVITE": "User Invited Page",
        "NOT_FOUND": "404 Page",
        "ORGANISATION_SETTINGS": "Organisation Settings Page",
        "PROJECT_SELECT": "Project Select Page",
        "PROJECT_SETTINGS": "Project Settings Page",
        "USER": "User Page",
        "USERS": "Users Page"
    },
    strings: {
        ORGANISATION_DESCRIPTION: "This is used to create a default organisation for team members to create and manage projects.",
        ENVIRONMENT_DESCRIPTION: "Environments are versions of your projects, environments within a project all share the same features but can be individually turned on/off or have different values."
    },
    codeHelp: {
        keys: {
            "JavaScript": "javascript",
            "React Native": "javascript"
        },

        "CREATE_USER": (envId) => {
            return {
                "JavaScript": require('./code-help/create-user/create-user-js')(envId, keywords),
                "React Native": require('./code-help/create-user/create-user-rn')(envId, keywords),
                "Java": `Coming soon`,
                ".NET": "Coming soon"
            }
        },

        "INIT": (envId, flagName) => {
            return {
                "JavaScript": require('./code-help/init/init-js')(envId, keywords, flagName),
                "React Native": require('./code-help/init/init-rn')(envId, keywords, flagName),
                "Java": "Coming soon",
                ".NET": "Coming soon"
            }
        },

        "INSTALL": {
            "JavaScript": require('./code-help/install/install-js')(keywords),
            "React Native": require('./code-help/install/install-rn')(keywords),
            "Java": "Coming soon",
            ".NET": "Coming soon"
        }
    }
};

module.exports = Constants;