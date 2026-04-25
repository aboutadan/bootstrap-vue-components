import { describe, it, expect } from "vitest";
import { ref } from "vue";
import { useValidation } from "./useValidation";

describe("useValidation", () => {
  it("returns is-valid + valid-feedback when isValid is true", () => {
    const { validationClass, feedbackType } = useValidation(ref(true));
    expect(validationClass.value).toBe("is-valid");
    expect(feedbackType.value).toBe("valid-feedback");
  });

  it("returns is-invalid + invalid-feedback when isValid is false", () => {
    const { validationClass, feedbackType } = useValidation(ref(false));
    expect(validationClass.value).toBe("is-invalid");
    expect(feedbackType.value).toBe("invalid-feedback");
  });

  it("returns empty class + form-text when isValid is null", () => {
    const { validationClass, feedbackType } = useValidation(ref(null));
    expect(validationClass.value).toBe("");
    expect(feedbackType.value).toBe("form-text");
  });

  it("returns empty class + form-text when isValid is undefined", () => {
    const { validationClass, feedbackType } = useValidation(ref(undefined));
    expect(validationClass.value).toBe("");
    expect(feedbackType.value).toBe("form-text");
  });

  it("reacts to isValid changing", () => {
    const isValid = ref<boolean | null>(null);
    const { validationClass } = useValidation(isValid);
    expect(validationClass.value).toBe("");
    isValid.value = true;
    expect(validationClass.value).toBe("is-valid");
    isValid.value = false;
    expect(validationClass.value).toBe("is-invalid");
  });
});
