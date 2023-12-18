type MemoryInfo = {
  jsHeapSizeLimit: number; // 4294705152;
  totalJSHeapSize: number; //  37725333;
  usedJSHeapSize: number; // 33480829;
};

interface Navigator {
  getUserMedia?: any;
}

declare global {
  interface Window {
    stream: MediaStream;
    performance: {
      memory: MemoryInfo;
    };
    navigator: Navigator;
  }
  interface HTMLCanvasElement {
    captureStream(frameRate?: number): MediaStream;
  }
  interface HTMLAudioElement {
    captureStream(frameRate?: number): MediaStream;
  }
}

window.performance.memory = window.performance.memory || {};
window.stream = window.stream || {};

interface ICustomWindow extends Window {
  stream?: MediaStream;
  URL?: {
    createObjectURL(buffer: Blob): void;
    revokeObjectURL(url: string): void;
  };
}

declare const window: ICustomWindow & any;
declare module '*.mid' {
  const content: any;
  export default content;
}

declare module '*.glb' {
  const content: any;
  export default content;
}

declare module '*.gltf' {
  const content: any;
  export default content;
}

declare module '*.obj' {
  const content: any;
  export default content;
}

declare module '*.max' {
  const content: any;
  export default content;
}

declare module '*.3ds' {
  const content: any;
  export default content;
}

declare module '*.tga' {
  const content: any;
  export default content;
}

declare module '*.mp4' {
  const content: any;
  export default content;
}

declare module '*.jpeg' {
  const content: any;
  export default content;
}

declare module '*.png' {
  const content: any;
  export default content;
}

declare module '*.jpg' {
  const content: any;
  export default content;
}

declare module '*.svg' {
  const content: any;
  export default content;
}

declare module '*.glsl' {
  const value: string;
  export default value;
}

declare module 'phenomenon';

declare namespace JSX {
  interface IntrinsicElements {
    customMaterial: any;
    colorShiftMaterial: any;
    rectAreaLightHelper: any;
    simulationMaterial: any;
    dofPointsMaterial: any;
    shaderMaterial2: any;
    filmPass: any;
  }
}

declare module 'complex-analyzer-node';

interface AudioWorkletProcessor {
  readonly port: MessagePort;
  process(
    inputs: Float32Array[][],
    outputs: Float32Array[][],
    parameters: Record<string, Float32Array>,
  ): boolean;
}

declare const AudioWorkletProcessor: {
  prototype: AudioWorkletProcessor;
  new (
    options?: AudioWorkletNodeOptions,
  ): AudioWorkletProcessor;
};

interface AudioParamMap {
  get(name: string): any;
}

declare function registerProcessor(
  name: string,
  processorCtor: (new (
    options?: AudioWorkletNodeOptions,
  ) => AudioWorkletProcessor) & {
    parameterDescriptors?: AudioParamDescriptor[];
  },
): void;
