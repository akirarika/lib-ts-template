import { uwu } from "./index";
import { expect, test } from "vitest";

test("hello", async () => {
    expect(await uwu()).toBe("uwu");
});
