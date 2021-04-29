import end from './End';
import start from './Start';
import process from './Process';
import judgment from './Judgment';
import { AvailableBuiltInType, NodeDescription } from '../types';

export const builtInNodes: NodeDescription[] = [
  {
    label: '开始',
    type: AvailableBuiltInType.START.valueOf(),
    component: start,
  },
  {
    label: '流程',
    type: AvailableBuiltInType.PROCESS.valueOf(),
    component: process,
  },
  {
    label: '判断',
    type: AvailableBuiltInType.JUDGMENT.valueOf(),
    component: judgment,
  },
  { label: '结束', type: AvailableBuiltInType.END.valueOf(), component: end },
];
