import { cn } from './utils'; // Asegúrate de ajustar la ruta

describe('cn function', () => {
  it('should join class names with a space', () => {
    expect(cn('class1', 'class2')).toBe('class1 class2');
  });

  it('should ignore falsy values', () => {
    expect(cn('class1', null, 'class2', undefined, false)).toBe('class1 class2');
  });

  it('should return an empty string if no classes are provided', () => {
    expect(cn()).toBe('');
  });

  it('should handle multiple falsy values', () => {
    expect(cn('', 0, null, 'class3', undefined)).toBe('class3');
  });

  it('should return a single class name if only one is provided', () => {
    expect(cn('class1')).toBe('class1');
  });
});