import { describe, it, expect } from "vitest";
import { useId } from "./useId";

describe("useId", () => {
  it("uses 'v' as the default prefix", () => {
    const id = useId();
    expect(id).toMatch(/^v-\d+$/);
  });

  it("uses a custom prefix", () => {
    const id = useId("modal");
    expect(id).toMatch(/^modal-\d+$/);
  });

  it("returns sequential ids that don't collide", () => {
    const a = useId("test");
    const b = useId("test");
    const c = useId("test");
    expect(a).not.toBe(b);
    expect(b).not.toBe(c);
    expect(a).not.toBe(c);
  });

  it("shares the counter across prefixes (so two prefixed ids are still unique)", () => {
    const a = useId("foo");
    const b = useId("bar");
    const aNum = parseInt(a.split("-")[1]!, 10);
    const bNum = parseInt(b.split("-")[1]!, 10);
    expect(bNum).toBeGreaterThan(aNum);
  });
});
