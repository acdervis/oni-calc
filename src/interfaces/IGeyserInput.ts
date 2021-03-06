import IGeyserOutput from './IGeyserOutput';

export default interface IGeyserInput {
  name: string;
  amount: number;
  activeDuration: number;
  activeEvery: number;
  eruptionDuration: number;
  eruptionEvery: number;
  outputs: IGeyserOutput[];
}
