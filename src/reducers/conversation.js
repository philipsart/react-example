import { CONVERSATION_NEXT_STEP, CONVERSATION_SUBMIT_VALUE } from '../actions';
import { ConversationSchema } from '../constants';

const initialState = {
  list: [],
  values: {},
};

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case CONVERSATION_NEXT_STEP:
    {
      const { list } = state;
      if (list.length >= ConversationSchema.length) {
        return state;
      }

      const newList = [
        ...list,
        ConversationSchema[list.length],
      ];
      return {
        ...state,
        list: newList,
      };
    }

    case CONVERSATION_SUBMIT_VALUE:
    {
      const { list, values } = state;
      if (list.length >= ConversationSchema.length) {
        return state;
      }

      const lastIndex = list.length - 1;
      const lastItem = list[lastIndex];
      const newList = [
        ...list,
        ConversationSchema[list.length],
      ];
      newList.splice(lastIndex, 1, { ...lastItem, value: payload });
      const newValues = {
        ...values,
        [lastItem.key]: payload,
      };

      return {
        ...state,
        list: newList,
        values: newValues,
      };
    }

    default:
      return state;
  }
};
