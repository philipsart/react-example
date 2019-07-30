export const CONVERSATION_NEXT_STEP = 'CONVERSATION_NEXT_STEP';
export const CONVERSATION_SUBMIT_VALUE = 'CONVERSATION_SUBMIT_VALUE';

export function navigateNextStep() {
  return {
    type: CONVERSATION_NEXT_STEP,
  };
}

export function submitValue(value) {
  return {
    type: CONVERSATION_SUBMIT_VALUE,
    payload: value,
  };
}
