export const vertexShader = /* glsl */ `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`

const noiseHelpers = /* glsl */ `
  float Hash(vec2 p) {
    vec3 p2 = vec3(p.xy, 1.0);
    return fract(sin(dot(p2, vec3(37.1, 61.7, 12.4))) * 3758.5453123);
  }

  float noise(in vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    f *= f * (3.0 - 2.0 * f);
    return mix(
      mix(Hash(i + vec2(0.0, 0.0)), Hash(i + vec2(1.0, 0.0)), f.x),
      mix(Hash(i + vec2(0.0, 1.0)), Hash(i + vec2(1.0, 1.0)), f.x),
      f.y
    );
  }

  float fbm(vec2 p) {
    float v = 0.0;
    v += noise(p * 1.0) * 0.5;
    v += noise(p * 2.0) * 0.25;
    v += noise(p * 4.0) * 0.125;
    return v;
  }
`

// Run once on init/resize to bake the FBM noise into a texture so the
// per-frame shader doesn't have to recompute 3 octaves of noise per pixel.
export const noiseFragmentShader = /* glsl */ `
  uniform vec2 uResolution;
  varying vec2 vUv;
  ${noiseHelpers}
  void main() {
    float aspect = uResolution.x / uResolution.y;
    vec2 centeredUv = (vUv - 0.5) * vec2(aspect, 1.0);
    float n = fbm(centeredUv * 15.0);
    gl_FragColor = vec4(n, n, n, 1.0);
  }
`

export const fragmentShader = /* glsl */ `
  uniform sampler2D uNoise;
  uniform float uProgress;
  uniform vec2 uResolution;
  uniform vec3 uColor;
  uniform float uSpread;
  varying vec2 vUv;

  void main() {
    float dissolveEdge = vUv.y - uProgress * 1.2;
    float noiseValue = texture2D(uNoise, vUv).r;
    float d = dissolveEdge + noiseValue * uSpread;
    float pixelSize = 1.0 / uResolution.y;
    float alpha = 1.0 - smoothstep(-pixelSize, pixelSize, d);
    gl_FragColor = vec4(uColor, alpha);
  }
`
