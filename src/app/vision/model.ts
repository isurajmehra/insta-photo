
export interface Caption {
    text: string;
    confidence: number;
}

export interface Description {
    tags: string[];
    captions: Caption[];
}

export interface Metadata {
    height: number;
    width: number;
    format: string;
}

export interface VisionAnalytics {
    description: Description;
    requestId: string;
    metadata: Metadata;
}

