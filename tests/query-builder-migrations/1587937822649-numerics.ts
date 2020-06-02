import { Migration } from "../../mod.ts";
import { dbDialects, Schema } from "../../qb.ts";

const dialect = Deno.env.get("DB_DIALECT") as dbDialects;

export const up: Migration = () => {
  return new Schema(dialect).create("numerics", (table) => {
    table.custom("col_1 integer");

    table.smallIncrements("col_2");
    table.bigInteger("col_3");
    table.binary("col_5");
    table.bit("col_6");
    table.integer("col_8");
    table.smallInteger("col_10");

    table.numeric("col_11");
    table.double("col_12");
    table.real("col_13");
    table.money("col_14");

    table.point("col_15");
    table.polygon("col_16");
    table.boolean("col_17");

    table.index("col_1");
    table.primary("col_3");
    table.unique("col_8");
  });
};

export const down: Migration = () => {
  return new Schema(dialect).drop("numerics");
};
