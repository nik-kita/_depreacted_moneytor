import { useReducer } from "preact/hooks";

export function useToggleValue<T>(init: T) {
  const [val, update] = useReducer((prevState: {
    toggle: boolean;
    value: T;
  }, v: [T, boolean]) => {
    return {
      toggle: v[1] ? !prevState.toggle : prevState.toggle,
      value: v[0],
    };
  }, { toggle: true, value: init });

  return {
    ...val,
    dispatch: (nextValue: T, stop?: "stop") => {
      update([nextValue, stop !== "stop"]);
    },
  };
}
