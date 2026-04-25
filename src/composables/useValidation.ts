import { computed, type Ref } from 'vue'

export function useValidation(isValid: Ref<boolean | null | undefined>, _helpText?: Ref<string | undefined>) {
  const validationClass = computed(() => {
    if (isValid.value === true) return 'is-valid'
    if (isValid.value === false) return 'is-invalid'
    return ''
  })

  const feedbackType = computed(() => {
    if (isValid.value === true) return 'valid-feedback'
    if (isValid.value === false) return 'invalid-feedback'
    return 'form-text'
  })

  return { validationClass, feedbackType }
}
