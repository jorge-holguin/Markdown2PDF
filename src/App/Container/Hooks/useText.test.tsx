import { renderHook, act } from '@testing-library/react-hooks';
import useText from './useText';
import { initialText } from './InitialText';

describe('useText Hook', () => {
  test('should set initial text correctly', () => {
    const { result } = renderHook(() => useText());
    expect(result.current[0]).toEqual(initialText);
  });

  test('should change text', () => {
    const { result } = renderHook(() => useText());
    act(() => {
      result.current[1]('work');  // Actualiza el estado con un nuevo valor
    });
    expect(result.current[0]).toBe('work');
  });
});
