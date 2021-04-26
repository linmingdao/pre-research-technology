const data = [
  {
    id: "1",
    type: "start",
    position: { x: 207, y: -96 },
    data: {
      label:
        "水电水水电水水电水水电水水电水水电水水电水水电水水电水水电水水电水水电水水电水水电水",
    },
  },
  {
    id: "2",
    type: "process",
    position: { x: 313, y: 34 },
    data: {
      label:
        "水电水水电水水电水水电水水电水水电水水电水水电水水电水水电水水电水水电水水电水水电水",
    },
  },
  {
    id: "3",
    type: "judgment",
    position: { x: 86, y: 219 },
    data: {
      label:
        "水电水水电水水电水水电水水电水水电水水电水水电水水电水水电水水电水水电水水电水水电水",
    },
  },
  {
    id: "4",
    type: "judgment",
    position: { x: 435, y: 176 },
    data: { label: "<=60%" },
  },
  {
    id: "5",
    type: "end",
    position: { x: 50, y: 377 },
    data: { label: "未知" },
  },
  {
    id: "6",
    type: "process",
    position: { x: 494, y: 301 },
    data: { label: "查看业务线程CPU" },
  },
  {
    id: "7",
    type: "end",
    position: { x: 291, y: 428 },
    data: {
      label:
        "水电水水电水水电水水电水水电水水电水水电水水电水水电水水电水水电水水电水水电水水电水",
    },
  },
  {
    id: "e5",
    source: "4",
    target: "6",
    type: "smoothstep",
    arrowHeadType: "arrowclosed",
    style: { strokeWidth: 2 },
  },
  {
    source: "3",
    sourceHandle: null,
    target: "5",
    targetHandle: null,
    type: "smoothstep",
    arrowHeadType: "arrowclosed",
    style: { strokeWidth: 2 },
    id: "reactflow__edge-3null-5null",
  },
  {
    source: "2",
    sourceHandle: null,
    target: "3",
    targetHandle: null,
    type: "smoothstep",
    arrowHeadType: "arrowclosed",
    style: { strokeWidth: 2 },
    id: "reactflow__edge-2null-3null",
  },
  {
    source: "2",
    sourceHandle: null,
    target: "4",
    targetHandle: null,
    type: "smoothstep",
    arrowHeadType: "arrowclosed",
    style: { strokeWidth: 2 },
    id: "reactflow__edge-2null-4null",
  },
  {
    source: "1",
    sourceHandle: null,
    target: "2",
    targetHandle: null,
    type: "smoothstep",
    arrowHeadType: "arrowclosed",
    style: { strokeWidth: 2 },
    id: "reactflow__edge-1null-2null",
  },
  {
    source: "6",
    sourceHandle: null,
    target: "7",
    targetHandle: null,
    type: "smoothstep",
    arrowHeadType: "arrowclosed",
    style: { strokeWidth: 2 },
    id: "reactflow__edge-6null-7null",
  },
  {
    source: "1",
    sourceHandle: null,
    target: "7",
    targetHandle: null,
    type: "smoothstep",
    animated: true,
    arrowHeadType: "arrowclosed",
    style: { strokeWidth: 2 },
    id: "reactflow__edge-1null-7null",
  },
  {
    source: "1",
    sourceHandle: null,
    target: "3",
    targetHandle: null,
    type: "smoothstep",
    label: "告警测试",
    labelStyle: { fill: "#000", fillColor: "#e6e6e6" },
    arrowHeadType: "arrowclosed",
    style: { strokeWidth: 2 },
    id: "reactflow__edge-1null-3null",
  },
];

export default data;
