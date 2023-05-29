import { drizzle } from "drizzle-orm/planetscale-serverless";
import { connect } from "@planetscale/database";

// create the connection
const connection = connect({
  host: "redacted",
  username: "redacted",
  password: "redacted",
});

const db = drizzle(connection);

export default db