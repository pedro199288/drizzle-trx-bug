import { int, mysqlTable, serial, uniqueIndex, varchar } from "drizzle-orm/mysql-core"

export const profiles = mysqlTable("profiles", {
  _id: serial<string>("_id").primaryKey(),
});

export const exercises = mysqlTable("exercises", {
  _id: serial("_id").primaryKey(),
  /**
   * NOTE: profileId default '0' means that it's a global app exercise,
   * if I used null, nameProfileIndex would not work
   */
  profileId: int("profileId").references(() => profiles._id).notNull().default(0),
  name: varchar("name", { length: 256 }).notNull(),
  nameEs: varchar("nameEs", { length: 256 }),
}, (table) => ({
  nameProfileIndex: uniqueIndex("name_profile_index").on(table.name, table.profileId),
  nameEsProfileIndex: uniqueIndex("nameEs_profile_index").on(table.nameEs, table.profileId),
}));