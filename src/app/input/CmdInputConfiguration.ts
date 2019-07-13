export interface CmdInputConfiguration {
  [name: string]: {
    type: 'string' | 'boolean' | 'number';
  };
}
