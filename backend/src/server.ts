import app from "./app";
import env from "./config/env";
import pool from "./config/database";

(async () => {
    try {
        await pool.query("SELECT 1");
        console.log("Database connection verified");

        app.listen(env.port, () => {
            console.log(`Server running on port ${env.port} in ${env.nodeEnv} mode`);
        });

    }
    catch (error) {
        console.error("Failed to connect to the database:", error);
    }
})();

