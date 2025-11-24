export interface SimulationParams {
  ipd: number; // Interpupillary distance in mm (default ~64mm)
  focalLength: number; // Camera focal length in mm
  targetDistance: number; // Distance to the focus object in meters
  vergenceAngle: number; // Calculated angle (read-only for display usually)
  objectType: 'cube' | 'sphere' | 'torus' | 'dna';
  wireframe: boolean; // Toggle for wireframe mode
  cameraSize: number; // Visual size of the camera models in God View
  objectScale: number; // Scale of the target object
  isPaused: boolean; // Pause rotation
  showBoundingBox: boolean; // Toggle target bounding box
  showBackgroundBoundingBox: boolean; // Toggle background bounding box
  showCameraBoundingBox: boolean; // Toggle camera bounding box
}

export interface AIAnalysisResult {
  title: string;
  explanation: string;
  depthImplications: string;
  technicalNote: string;
}

export enum ViewMode {
  SIDE_BY_SIDE = 'SBS',
  ANAGLYPH = 'ANAGLYPH',
  OVERLAY = 'OVERLAY'
}